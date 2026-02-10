"""
Serializers for Registration management.

SECURITY:
- payment_status is read-only in user-facing serializers
- Only admin can modify payment_status via dedicated serializer
"""

from rest_framework import serializers
from django.utils import timezone

from .models import Registration, PaymentStatus, RegistrationAuditLog
from events.serializers import EventListSerializer
from accounts.serializers import UserProfileSerializer


class RegistrationCreateSerializer(serializers.ModelSerializer):
    """
    Serializer for creating a new registration.
    
    SECURITY:
    - payment_status is NOT writable - always defaults to PENDING
    - User is set from the authenticated request
    """
    
    class Meta:
        model = Registration
        fields = [
            'event',
            'payment_proof_url',
            'transaction_id',
        ]
    
    def validate_event(self, event):
        """
        Validate event is open for registration.
        
        SECURITY: Server-side validation - don't trust frontend.
        """
        if not event.is_active:
            raise serializers.ValidationError("This event is not accepting registrations.")
        
        if not event.is_upcoming:
            raise serializers.ValidationError("This event has already occurred.")
        
        if event.is_full:
            raise serializers.ValidationError("This event has reached maximum capacity.")
        
        return event
    
    def validate(self, attrs):
        """
        Check for duplicate registration.
        
        SECURITY: Prevent duplicate registrations at serializer level.
        """
        user = self.context['request'].user
        event = attrs['event']
        
        if Registration.objects.filter(user=user, event=event).exists():
            raise serializers.ValidationError({
                'event': 'You have already registered for this event.'
            })
        
        return attrs
    
    def create(self, validated_data):
        """
        Create registration with authenticated user.
        
        SECURITY: User is set from request, not from input data.
        """
        user = self.context['request'].user
        validated_data['user'] = user
        # payment_status defaults to PENDING in model
        return super().create(validated_data)


class RegistrationDetailSerializer(serializers.ModelSerializer):
    """
    Serializer for registration details (user view).
    
    Includes event details and excludes admin-only fields.
    """
    
    event = EventListSerializer(read_only=True)
    status_display = serializers.CharField(
        source='get_payment_status_display',
        read_only=True
    )
    
    class Meta:
        model = Registration
        fields = [
            'id',
            'event',
            'payment_proof_url',
            'transaction_id',
            'payment_status',
            'status_display',
            'created_at',
            'updated_at',
        ]
        read_only_fields = [
            'id',
            'payment_status',
            'created_at',
            'updated_at',
        ]


class RegistrationAdminListSerializer(serializers.ModelSerializer):
    """
    Serializer for admin registration listing.
    
    Includes user and event summary information.
    """
    
    user_email = serializers.EmailField(source='user.email', read_only=True)
    user_name = serializers.CharField(source='user.get_full_name', read_only=True)
    event_title = serializers.CharField(source='event.title', read_only=True)
    event_date = serializers.DateTimeField(source='event.date', read_only=True)
    status_display = serializers.CharField(
        source='get_payment_status_display',
        read_only=True
    )
    
    class Meta:
        model = Registration
        fields = [
            'id',
            'user_email',
            'user_name',
            'event_title',
            'event_date',
            'payment_proof_url',
            'transaction_id',
            'payment_status',
            'status_display',
            'created_at',
        ]


class RegistrationAdminDetailSerializer(serializers.ModelSerializer):
    """
    Serializer for admin registration detail view.
    
    Includes full user and event information.
    """
    
    user = UserProfileSerializer(read_only=True)
    event = EventListSerializer(read_only=True)
    status_display = serializers.CharField(
        source='get_payment_status_display',
        read_only=True
    )
    verified_by_email = serializers.EmailField(
        source='verified_by.email',
        read_only=True,
        allow_null=True
    )
    
    class Meta:
        model = Registration
        fields = [
            'id',
            'user',
            'event',
            'payment_proof_url',
            'transaction_id',
            'payment_status',
            'status_display',
            'admin_notes',
            'verified_by_email',
            'verified_at',
            'created_at',
            'updated_at',
        ]


class RegistrationVerifySerializer(serializers.Serializer):
    """
    Serializer for payment verification endpoint.
    
    SECURITY: 
    - Only accessible to admin users
    - Creates audit log entry
    """
    
    status = serializers.ChoiceField(
        choices=[PaymentStatus.VERIFIED, PaymentStatus.REJECTED],
        required=True
    )
    admin_notes = serializers.CharField(
        required=False,
        allow_blank=True,
        max_length=1000
    )
    
    def validate_status(self, value):
        """Validate status transition."""
        registration = self.context.get('registration')
        if registration and registration.payment_status != PaymentStatus.PENDING:
            raise serializers.ValidationError(
                f"Cannot change status from {registration.payment_status}. "
                "Only PENDING registrations can be verified or rejected."
            )
        return value
    
    def update_registration(self, registration, admin_user, ip_address=None):
        """
        Update registration status with audit logging.
        
        SECURITY: Creates immutable audit log entry.
        """
        old_status = registration.payment_status
        new_status = self.validated_data['status']
        admin_notes = self.validated_data.get('admin_notes', '')
        
        # Update registration
        registration.payment_status = new_status
        registration.admin_notes = admin_notes
        registration.verified_by = admin_user
        registration.verified_at = timezone.now()
        registration.save()
        
        # Create audit log entry
        RegistrationAuditLog.objects.create(
            registration=registration,
            action='STATUS_CHANGED',
            old_status=old_status,
            new_status=new_status,
            performed_by=admin_user,
            notes=admin_notes,
            ip_address=ip_address
        )
        
        return registration
