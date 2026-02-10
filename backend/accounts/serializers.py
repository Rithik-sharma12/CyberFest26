"""
Serializers for User authentication and management.

SECURITY: Never expose sensitive fields like password in responses.
"""

from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

User = get_user_model()


class UserRegistrationSerializer(serializers.ModelSerializer):
    """
    Serializer for user registration.
    
    SECURITY:
    - Password is write-only and validated against Django password validators
    - Email is normalized and validated for uniqueness
    """
    
    password = serializers.CharField(
        write_only=True,
        required=True,
        validators=[validate_password],
        style={'input_type': 'password'}
    )
    password_confirm = serializers.CharField(
        write_only=True,
        required=True,
        style={'input_type': 'password'}
    )
    
    class Meta:
        model = User
        fields = [
            'email',
            'password',
            'password_confirm',
            'first_name',
            'last_name',
            'phone_number',
            'college_name',
            'college_id',
        ]
        extra_kwargs = {
            'first_name': {'required': True},
            'last_name': {'required': True},
        }
    
    def validate_email(self, value):
        """Normalize email to lowercase."""
        return value.lower().strip()
    
    def validate(self, attrs):
        """Validate password confirmation matches."""
        if attrs['password'] != attrs['password_confirm']:
            raise serializers.ValidationError({
                'password_confirm': 'Passwords do not match.'
            })
        return attrs
    
    def create(self, validated_data):
        """Create user with hashed password."""
        # Remove password_confirm as it's not a model field
        validated_data.pop('password_confirm')
        
        user = User.objects.create_user(**validated_data)
        return user


class UserProfileSerializer(serializers.ModelSerializer):
    """
    Serializer for user profile (read/update).
    
    SECURITY: Excludes password and sensitive authentication fields.
    """
    
    full_name = serializers.CharField(source='get_full_name', read_only=True)
    
    class Meta:
        model = User
        fields = [
            'id',
            'email',
            'first_name',
            'last_name',
            'full_name',
            'phone_number',
            'college_name',
            'college_id',
            'created_at',
        ]
        read_only_fields = ['id', 'email', 'created_at']


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    """
    Custom JWT token serializer with additional user data in response.
    
    SECURITY: Only includes non-sensitive user information in token response.
    """
    
    def validate(self, attrs):
        data = super().validate(attrs)
        
        # Add user info to response (not in the token itself)
        data['user'] = {
            'id': str(self.user.id),
            'email': self.user.email,
            'first_name': self.user.first_name,
            'last_name': self.user.last_name,
            'is_admin': self.user.is_admin,
        }
        
        return data
    
    @classmethod
    def get_token(cls, user):
        """Add custom claims to the JWT token."""
        token = super().get_token(user)
        
        # Add custom claims (kept minimal for security)
        token['email'] = user.email
        token['is_admin'] = user.is_admin
        
        return token


class PasswordChangeSerializer(serializers.Serializer):
    """
    Serializer for password change endpoint.
    
    SECURITY: Requires current password verification before allowing change.
    """
    
    current_password = serializers.CharField(
        required=True,
        write_only=True,
        style={'input_type': 'password'}
    )
    new_password = serializers.CharField(
        required=True,
        write_only=True,
        validators=[validate_password],
        style={'input_type': 'password'}
    )
    new_password_confirm = serializers.CharField(
        required=True,
        write_only=True,
        style={'input_type': 'password'}
    )
    
    def validate_current_password(self, value):
        """Verify current password is correct."""
        user = self.context['request'].user
        if not user.check_password(value):
            raise serializers.ValidationError('Current password is incorrect.')
        return value
    
    def validate(self, attrs):
        """Validate new password confirmation matches."""
        if attrs['new_password'] != attrs['new_password_confirm']:
            raise serializers.ValidationError({
                'new_password_confirm': 'New passwords do not match.'
            })
        return attrs
