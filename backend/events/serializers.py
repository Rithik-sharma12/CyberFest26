"""
Serializers for Event data.

SECURITY: Read-only serializer for public event data.
"""

from rest_framework import serializers
from .models import Event


class EventListSerializer(serializers.ModelSerializer):
    """
    Serializer for event listing (minimal data for list view).
    """
    
    is_registration_open = serializers.BooleanField(read_only=True)
    available_spots = serializers.IntegerField(read_only=True)
    
    class Meta:
        model = Event
        fields = [
            'id',
            'title',
            'date',
            'venue',
            'capacity',
            'registration_fee',
            'is_active',
            'is_registration_open',
            'available_spots',
            'image_url',
        ]


class EventDetailSerializer(serializers.ModelSerializer):
    """
    Serializer for event detail view (full data).
    """
    
    is_registration_open = serializers.BooleanField(read_only=True)
    available_spots = serializers.IntegerField(read_only=True)
    registration_count = serializers.IntegerField(read_only=True)
    is_upcoming = serializers.BooleanField(read_only=True)
    is_full = serializers.BooleanField(read_only=True)
    
    class Meta:
        model = Event
        fields = [
            'id',
            'title',
            'description',
            'date',
            'end_date',
            'venue',
            'capacity',
            'registration_fee',
            'is_active',
            'image_url',
            'contact_email',
            'payment_form_url',
            'created_at',
            # Computed fields
            'is_registration_open',
            'available_spots',
            'registration_count',
            'is_upcoming',
            'is_full',
        ]


class EventAdminSerializer(serializers.ModelSerializer):
    """
    Serializer for admin event management (create/update).
    
    SECURITY: Only accessible to admin users.
    """
    
    class Meta:
        model = Event
        fields = '__all__'
        read_only_fields = ['id', 'created_at', 'updated_at']
