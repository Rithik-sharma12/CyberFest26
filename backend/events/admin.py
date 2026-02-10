"""Admin configuration for events app."""

from django.contrib import admin
from .models import Event


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    """Admin interface for Event model."""
    
    list_display = [
        'title',
        'date',
        'venue',
        'capacity',
        'registration_count',
        'is_active',
        'created_at',
    ]
    list_filter = ['is_active', 'date', 'created_at']
    search_fields = ['title', 'description', 'venue']
    ordering = ['-date']
    date_hierarchy = 'date'
    
    readonly_fields = [
        'id',
        'created_at',
        'updated_at',
        'registration_count',
        'available_spots',
    ]
    
    fieldsets = (
        ('Basic Information', {
            'fields': ('title', 'description', 'image_url')
        }),
        ('Schedule & Location', {
            'fields': ('date', 'end_date', 'venue')
        }),
        ('Capacity & Pricing', {
            'fields': ('capacity', 'registration_fee')
        }),
        ('Contact & Payment', {
            'fields': ('contact_email', 'payment_form_url')
        }),
        ('Status', {
            'fields': ('is_active',)
        }),
        ('Statistics', {
            'fields': ('registration_count', 'available_spots'),
            'classes': ('collapse',)
        }),
        ('Timestamps', {
            'fields': ('id', 'created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )
    
    def registration_count(self, obj):
        """Display registration count in admin."""
        return obj.registration_count
    registration_count.short_description = 'Registrations'
    
    def available_spots(self, obj):
        """Display available spots in admin."""
        return obj.available_spots
    available_spots.short_description = 'Available'
