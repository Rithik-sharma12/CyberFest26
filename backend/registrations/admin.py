"""Admin configuration for registrations app."""

from django.contrib import admin
from .models import Registration, RegistrationAuditLog


@admin.register(Registration)
class RegistrationAdmin(admin.ModelAdmin):
    """Admin interface for Registration model."""
    
    list_display = [
        'id',
        'user_email',
        'event_title',
        'payment_status',
        'created_at',
        'verified_at',
    ]
    list_filter = ['payment_status', 'created_at', 'event']
    search_fields = ['user__email', 'user__first_name', 'event__title', 'transaction_id']
    ordering = ['-created_at']
    date_hierarchy = 'created_at'
    raw_id_fields = ['user', 'event', 'verified_by']
    
    readonly_fields = [
        'id',
        'created_at',
        'updated_at',
    ]
    
    fieldsets = (
        ('Registration Info', {
            'fields': ('id', 'user', 'event')
        }),
        ('Payment Details', {
            'fields': ('payment_proof_url', 'transaction_id', 'payment_status')
        }),
        ('Verification', {
            'fields': ('verified_by', 'verified_at', 'admin_notes')
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )
    
    def user_email(self, obj):
        return obj.user.email
    user_email.short_description = 'User'
    user_email.admin_order_field = 'user__email'
    
    def event_title(self, obj):
        return obj.event.title
    event_title.short_description = 'Event'
    event_title.admin_order_field = 'event__title'


@admin.register(RegistrationAuditLog)
class RegistrationAuditLogAdmin(admin.ModelAdmin):
    """Admin interface for audit logs (read-only)."""
    
    list_display = [
        'registration',
        'action',
        'old_status',
        'new_status',
        'performed_by',
        'created_at',
    ]
    list_filter = ['action', 'created_at']
    search_fields = ['registration__user__email', 'registration__event__title']
    ordering = ['-created_at']
    
    readonly_fields = [
        'id',
        'registration',
        'action',
        'old_status',
        'new_status',
        'performed_by',
        'notes',
        'ip_address',
        'created_at',
    ]
    
    def has_add_permission(self, request):
        """Audit logs cannot be created manually."""
        return False
    
    def has_change_permission(self, request, obj=None):
        """Audit logs cannot be modified."""
        return False
    
    def has_delete_permission(self, request, obj=None):
        """Audit logs cannot be deleted."""
        return False
