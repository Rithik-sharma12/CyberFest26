"""
Views for Event management.

SECURITY:
- Public read access for event listing/details
- Admin-only access for create/update/delete
"""

from rest_framework import generics, filters
from rest_framework.permissions import AllowAny, IsAdminUser
from django_filters.rest_framework import DjangoFilterBackend

from .models import Event
from .serializers import (
    EventListSerializer,
    EventDetailSerializer,
    EventAdminSerializer,
)


class EventListView(generics.ListAPIView):
    """
    List all active events.
    
    GET /api/events/
    
    Public endpoint - no authentication required.
    Supports filtering and search.
    """
    
    serializer_class = EventListSerializer
    permission_classes = [AllowAny]
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['title', 'description', 'venue']
    ordering_fields = ['date', 'created_at', 'registration_fee']
    ordering = ['date']  # Default ordering: upcoming events first
    
    def get_queryset(self):
        """
        Return active events only for public listing.
        Optionally filter by upcoming events.
        """
        queryset = Event.objects.filter(is_active=True)
        
        # Optional: filter for upcoming events only
        upcoming_only = self.request.query_params.get('upcoming', None)
        if upcoming_only and upcoming_only.lower() == 'true':
            from django.utils import timezone
            queryset = queryset.filter(date__gte=timezone.now())
        
        return queryset


class EventDetailView(generics.RetrieveAPIView):
    """
    Get event details.
    
    GET /api/events/{id}/
    
    Public endpoint - no authentication required.
    """
    
    serializer_class = EventDetailSerializer
    permission_classes = [AllowAny]
    lookup_field = 'id'
    
    def get_queryset(self):
        """Return all events (including inactive for direct access)."""
        return Event.objects.all()


# Admin-only views

class EventAdminListCreateView(generics.ListCreateAPIView):
    """
    Admin endpoint for listing all events and creating new ones.
    
    GET /api/events/admin/
    POST /api/events/admin/
    
    SECURITY: Admin-only access.
    """
    
    queryset = Event.objects.all()
    serializer_class = EventAdminSerializer
    permission_classes = [IsAdminUser]
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['title', 'description', 'venue']
    ordering_fields = ['date', 'created_at', 'is_active']
    ordering = ['-created_at']


class EventAdminDetailView(generics.RetrieveUpdateDestroyAPIView):
    """
    Admin endpoint for event management.
    
    GET /api/events/admin/{id}/
    PATCH /api/events/admin/{id}/
    DELETE /api/events/admin/{id}/
    
    SECURITY: Admin-only access.
    """
    
    queryset = Event.objects.all()
    serializer_class = EventAdminSerializer
    permission_classes = [IsAdminUser]
    lookup_field = 'id'
