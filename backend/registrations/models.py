"""
Registration models for College Event Registration Platform.

SECURITY:
- Payment status can only be modified by admin through dedicated endpoint
- Unique constraint prevents duplicate registrations
- All status changes are logged
"""

import uuid
import logging
from django.db import models
from django.conf import settings
from django.core.validators import URLValidator

logger = logging.getLogger(__name__)


class PaymentStatus(models.TextChoices):
    """Payment verification status choices."""
    PENDING = 'PENDING', 'Pending Verification'
    VERIFIED = 'VERIFIED', 'Payment Verified'
    REJECTED = 'REJECTED', 'Payment Rejected'


class Registration(models.Model):
    """
    Event registration model.
    
    SECURITY:
    - Unique constraint on (user, event) prevents duplicate registrations
    - payment_status changes are logged for audit
    - Only admins can modify payment_status
    """
    
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )
    
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='registrations',
        db_index=True
    )
    
    event = models.ForeignKey(
        'events.Event',
        on_delete=models.CASCADE,
        related_name='registrations',
        db_index=True
    )
    
    # Payment proof - URL to uploaded proof (Google Drive, etc.)
    payment_proof_url = models.URLField(
        max_length=500,
        blank=True,
        null=True,
        validators=[URLValidator()],
        help_text="URL to payment proof (Google Drive link, etc.)"
    )
    
    # Transaction reference (optional)
    transaction_id = models.CharField(
        max_length=100,
        blank=True,
        null=True,
        help_text="Payment transaction ID/reference number"
    )
    
    # Payment status - SECURITY: Only modifiable by admin
    payment_status = models.CharField(
        max_length=20,
        choices=PaymentStatus.choices,
        default=PaymentStatus.PENDING,
        db_index=True
    )
    
    # Admin notes (for rejection reason, etc.)
    admin_notes = models.TextField(
        blank=True,
        help_text="Admin notes about the registration/payment"
    )
    
    # Verification tracking
    verified_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='verified_registrations',
        help_text="Admin who verified/rejected the payment"
    )
    verified_at = models.DateTimeField(
        null=True,
        blank=True
    )
    
    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table = 'registrations'
        # SECURITY: Prevent duplicate registrations
        constraints = [
            models.UniqueConstraint(
                fields=['user', 'event'],
                name='unique_user_event_registration'
            )
        ]
        indexes = [
            models.Index(fields=['user', 'event']),
            models.Index(fields=['payment_status']),
            models.Index(fields=['created_at']),
        ]
        ordering = ['-created_at']
    
    def __str__(self):
        return f"{self.user.email} - {self.event.title}"
    
    def save(self, *args, **kwargs):
        """
        Override save to log payment status changes.
        
        SECURITY: Audit logging for all status changes.
        """
        if self.pk:
            # Check if payment_status changed
            try:
                old_instance = Registration.objects.get(pk=self.pk)
                if old_instance.payment_status != self.payment_status:
                    logger.info(
                        f"Registration status changed: {self.id} | "
                        f"User: {self.user.email} | "
                        f"Event: {self.event.title} | "
                        f"Status: {old_instance.payment_status} -> {self.payment_status}"
                    )
            except Registration.DoesNotExist:
                pass
        else:
            # New registration
            logger.info(
                f"New registration created: User={self.user.email}, Event={self.event.title}"
            )
        
        super().save(*args, **kwargs)
    
    @property
    def is_verified(self):
        """Check if payment is verified."""
        return self.payment_status == PaymentStatus.VERIFIED
    
    @property
    def is_pending(self):
        """Check if payment is pending verification."""
        return self.payment_status == PaymentStatus.PENDING
    
    @property
    def is_rejected(self):
        """Check if payment was rejected."""
        return self.payment_status == PaymentStatus.REJECTED


class RegistrationAuditLog(models.Model):
    """
    Audit log for registration changes.
    
    SECURITY: Immutable record of all registration status changes.
    """
    
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )
    
    registration = models.ForeignKey(
        Registration,
        on_delete=models.CASCADE,
        related_name='audit_logs'
    )
    
    action = models.CharField(
        max_length=50,
        help_text="Action performed (CREATED, STATUS_CHANGED, etc.)"
    )
    
    old_status = models.CharField(
        max_length=20,
        blank=True,
        null=True
    )
    
    new_status = models.CharField(
        max_length=20,
        blank=True,
        null=True
    )
    
    performed_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        related_name='registration_actions'
    )
    
    notes = models.TextField(blank=True)
    
    ip_address = models.GenericIPAddressField(null=True, blank=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        db_table = 'registration_audit_logs'
        ordering = ['-created_at']
    
    def __str__(self):
        return f"{self.registration_id} - {self.action} - {self.created_at}"
