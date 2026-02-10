"""
Views for Registration management.

SECURITY:
- User registration endpoints require authentication
- Admin verification endpoint requires admin privileges
- All operations use database transactions
- Rate limiting on registration creation
"""

import logging
from django.db import transaction
from rest_framework import generics, status, filters
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.throttling import ScopedRateThrottle

from .models import Registration, PaymentStatus, RegistrationAuditLog
from .serializers import (
    RegistrationCreateSerializer,
    RegistrationDetailSerializer,
    RegistrationAdminListSerializer,
    RegistrationAdminDetailSerializer,
    RegistrationVerifySerializer,
)

logger = logging.getLogger(__name__)


def get_client_ip(request):
    """Extract client IP address from request."""
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0].strip()
    else:
        ip = request.META.get('REMOTE_ADDR')
    return ip


class RegistrationCreateView(generics.CreateAPIView):
    """
    Create a new event registration.
    
    POST /api/registrations/
    
    SECURITY:
    - Requires authentication
    - Rate limited to prevent abuse
    - Uses database transaction
    - Server-side validation only
    """
    
    serializer_class = RegistrationCreateSerializer
    permission_classes = [IsAuthenticated]
    throttle_classes = [ScopedRateThrottle]
    throttle_scope = 'registration'
    
    @transaction.atomic
    def create(self, request, *args, **kwargs):
        """
        Create registration within a database transaction.
        
        SECURITY: Atomic transaction ensures data consistency.
        """
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        registration = serializer.save()
        
        # Create audit log
        RegistrationAuditLog.objects.create(
            registration=registration,
            action='CREATED',
            new_status=PaymentStatus.PENDING,
            performed_by=request.user,
            ip_address=get_client_ip(request)
        )
        
        logger.info(
            f"Registration created: {registration.id} | "
            f"User: {request.user.email} | "
            f"Event: {registration.event.title}"
        )
        
        return Response(
            RegistrationDetailSerializer(registration).data,
            status=status.HTTP_201_CREATED
        )


class UserRegistrationsView(generics.ListAPIView):
    """
    List current user's registrations.
    
    GET /api/registrations/me/
    
    SECURITY: Users can only see their own registrations.
    """
    
    serializer_class = RegistrationDetailSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        """Return only the authenticated user's registrations."""
        return Registration.objects.filter(
            user=self.request.user
        ).select_related('event')


class UserRegistrationDetailView(generics.RetrieveAPIView):
    """
    Get details of a specific registration.
    
    GET /api/registrations/{id}/
    
    SECURITY: Users can only view their own registrations.
    """
    
    serializer_class = RegistrationDetailSerializer
    permission_classes = [IsAuthenticated]
    lookup_field = 'id'
    
    def get_queryset(self):
        """Return only the authenticated user's registrations."""
        return Registration.objects.filter(
            user=self.request.user
        ).select_related('event')


# Admin Views

class AdminRegistrationListView(generics.ListAPIView):
    """
    List all registrations (admin only).
    
    GET /api/registrations/admin/
    
    SECURITY: Admin-only access.
    Supports filtering by event, user, and payment status.
    """
    
    serializer_class = RegistrationAdminListSerializer
    permission_classes = [IsAdminUser]
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['user__email', 'user__first_name', 'event__title']
    ordering_fields = ['created_at', 'payment_status']
    ordering = ['-created_at']
    
    def get_queryset(self):
        """
        Return registrations with optional filtering.
        """
        queryset = Registration.objects.select_related('user', 'event')
        
        # Filter by event
        event_id = self.request.query_params.get('event')
        if event_id:
            queryset = queryset.filter(event_id=event_id)
        
        # Filter by payment status
        status_filter = self.request.query_params.get('status')
        if status_filter and status_filter in PaymentStatus.values:
            queryset = queryset.filter(payment_status=status_filter)
        
        return queryset


class AdminRegistrationDetailView(generics.RetrieveAPIView):
    """
    Get registration details (admin only).
    
    GET /api/registrations/admin/{id}/
    
    SECURITY: Admin-only access.
    """
    
    serializer_class = RegistrationAdminDetailSerializer
    permission_classes = [IsAdminUser]
    queryset = Registration.objects.select_related('user', 'event', 'verified_by')
    lookup_field = 'id'


class AdminVerifyRegistrationView(APIView):
    """
    Verify or reject a registration's payment.
    
    PATCH /api/registrations/admin/{id}/verify/
    
    SECURITY:
    - Admin-only access
    - Only PENDING registrations can be verified/rejected
    - Creates immutable audit log
    - Uses database transaction
    """
    
    permission_classes = [IsAdminUser]
    
    @transaction.atomic
    def patch(self, request, id):
        """
        Update registration payment status.
        
        Request body:
        {
            "status": "VERIFIED" | "REJECTED",
            "admin_notes": "Optional notes"
        }
        """
        try:
            registration = Registration.objects.select_for_update().get(id=id)
        except Registration.DoesNotExist:
            return Response(
                {'error': {'code': 'NOT_FOUND', 'message': 'Registration not found'}},
                status=status.HTTP_404_NOT_FOUND
            )
        
        serializer = RegistrationVerifySerializer(
            data=request.data,
            context={'registration': registration}
        )
        serializer.is_valid(raise_exception=True)
        
        # Update registration with audit logging
        updated_registration = serializer.update_registration(
            registration=registration,
            admin_user=request.user,
            ip_address=get_client_ip(request)
        )
        
        logger.info(
            f"Registration verified: {registration.id} | "
            f"Admin: {request.user.email} | "
            f"New Status: {updated_registration.payment_status}"
        )
        
        return Response(
            RegistrationAdminDetailSerializer(updated_registration).data,
            status=status.HTTP_200_OK
        )


class AdminRegistrationStatsView(APIView):
    """
    Get registration statistics (admin only).
    
    GET /api/registrations/admin/stats/
    
    Optional query params:
    - event: Filter by event ID
    """
    
    permission_classes = [IsAdminUser]
    
    def get(self, request):
        """Return registration statistics."""
        queryset = Registration.objects.all()
        
        # Optional event filter
        event_id = request.query_params.get('event')
        if event_id:
            queryset = queryset.filter(event_id=event_id)
        
        stats = {
            'total': queryset.count(),
            'pending': queryset.filter(payment_status=PaymentStatus.PENDING).count(),
            'verified': queryset.filter(payment_status=PaymentStatus.VERIFIED).count(),
            'rejected': queryset.filter(payment_status=PaymentStatus.REJECTED).count(),
        }
        
        return Response(stats, status=status.HTTP_200_OK)
