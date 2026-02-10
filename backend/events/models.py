"""
Event models for College Event Registration Platform.

SECURITY: Event data is managed by admins only.
"""

import uuid
from django.db import models
from django.core.validators import MinValueValidator
from django.utils import timezone


class Event(models.Model):
    """
    Event model representing college events.
    
    Events can only be created/modified by admin users.
    """
    
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )
    
    title = models.CharField(
        max_length=200,
        db_index=True
    )
    
    description = models.TextField(
        help_text="Detailed description of the event"
    )
    
    # Event timing
    date = models.DateTimeField(
        db_index=True,
        help_text="Event start date and time"
    )
    
    end_date = models.DateTimeField(
        null=True,
        blank=True,
        help_text="Event end date and time (optional)"
    )
    
    # Location
    venue = models.CharField(
        max_length=300,
        help_text="Event venue/location"
    )
    
    # Capacity management
    capacity = models.PositiveIntegerField(
        validators=[MinValueValidator(1)],
        help_text="Maximum number of participants"
    )
    
    # Registration fee (informational only - payments handled externally)
    registration_fee = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        default=0,
        help_text="Registration fee in INR (0 for free events)"
    )
    
    # Event status
    is_active = models.BooleanField(
        default=True,
        db_index=True,
        help_text="Whether the event is open for registration"
    )
    
    # Event image (URL to image)
    image_url = models.URLField(
        max_length=500,
        blank=True,
        null=True,
        help_text="URL to event banner/image"
    )
    
    # Contact information
    contact_email = models.EmailField(
        blank=True,
        help_text="Contact email for event queries"
    )
    
    # Google Form link for payment proof submission (alternative method)
    payment_form_url = models.URLField(
        max_length=500,
        blank=True,
        null=True,
        help_text="Google Form URL for payment proof submission"
    )
    
    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table = 'events'
        ordering = ['-date']
        indexes = [
            models.Index(fields=['date', 'is_active']),
            models.Index(fields=['created_at']),
        ]
    
    def __str__(self):
        return self.title
    
    @property
    def is_upcoming(self):
        """Check if event is in the future."""
        return self.date > timezone.now()
    
    @property
    def is_registration_open(self):
        """Check if registration is currently open."""
        return self.is_active and self.is_upcoming and self.available_spots > 0
    
    @property
    def registration_count(self):
        """Get current number of registrations."""
        return self.registrations.exclude(
            payment_status='REJECTED'
        ).count()
    
    @property
    def available_spots(self):
        """Get number of available registration spots."""
        return max(0, self.capacity - self.registration_count)
    
    @property
    def is_full(self):
        """Check if event has reached capacity."""
        return self.available_spots == 0
