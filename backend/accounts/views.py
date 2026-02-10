"""
Views for user authentication and account management.

SECURITY:
- All sensitive operations require authentication
- Password changes require current password verification
- Registration includes rate limiting
"""

import logging
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import get_user_model

from .serializers import (
    UserRegistrationSerializer,
    UserProfileSerializer,
    CustomTokenObtainPairSerializer,
    PasswordChangeSerializer,
)

User = get_user_model()
logger = logging.getLogger(__name__)


class RegisterView(generics.CreateAPIView):
    """
    User registration endpoint.
    
    POST /api/auth/register/
    
    SECURITY: 
    - Open to all (AllowAny) but rate limited
    - Password is validated and hashed server-side
    """
    
    queryset = User.objects.all()
    serializer_class = UserRegistrationSerializer
    permission_classes = [AllowAny]
    # Rate limiting applied via throttle_scope
    throttle_scope = 'registration'
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        
        logger.info(f"New user registered: {user.email}")
        
        # Generate tokens for immediate login after registration
        refresh = RefreshToken.for_user(user)
        
        return Response({
            'message': 'Registration successful',
            'user': UserProfileSerializer(user).data,
            'tokens': {
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            }
        }, status=status.HTTP_201_CREATED)


class LoginView(TokenObtainPairView):
    """
    User login endpoint with JWT tokens.
    
    POST /api/auth/login/
    
    Returns access and refresh tokens along with user info.
    """
    
    serializer_class = CustomTokenObtainPairSerializer
    
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        
        if response.status_code == 200:
            # Log successful login
            email = request.data.get('email', 'unknown')
            logger.info(f"User logged in: {email}")
        
        return response


class LogoutView(APIView):
    """
    User logout endpoint.
    
    POST /api/auth/logout/
    
    SECURITY: Blacklists the refresh token to prevent reuse.
    """
    
    permission_classes = [IsAuthenticated]
    
    def post(self, request):
        try:
            refresh_token = request.data.get('refresh')
            if refresh_token:
                token = RefreshToken(refresh_token)
                token.blacklist()
                
                logger.info(f"User logged out: {request.user.email}")
                
            return Response({
                'message': 'Logout successful'
            }, status=status.HTTP_200_OK)
            
        except Exception as e:
            logger.warning(f"Logout error for user {request.user.email}: {str(e)}")
            return Response({
                'message': 'Logout successful'
            }, status=status.HTTP_200_OK)


class ProfileView(generics.RetrieveUpdateAPIView):
    """
    User profile endpoint.
    
    GET /api/auth/profile/ - Get current user profile
    PATCH /api/auth/profile/ - Update current user profile
    
    SECURITY: Users can only access/modify their own profile.
    """
    
    serializer_class = UserProfileSerializer
    permission_classes = [IsAuthenticated]
    
    def get_object(self):
        """Return the authenticated user."""
        return self.request.user


class PasswordChangeView(APIView):
    """
    Password change endpoint.
    
    POST /api/auth/password/change/
    
    SECURITY: Requires current password verification.
    """
    
    permission_classes = [IsAuthenticated]
    
    def post(self, request):
        serializer = PasswordChangeSerializer(
            data=request.data,
            context={'request': request}
        )
        serializer.is_valid(raise_exception=True)
        
        # Update password
        user = request.user
        user.set_password(serializer.validated_data['new_password'])
        user.save()
        
        logger.info(f"Password changed for user: {user.email}")
        
        return Response({
            'message': 'Password changed successfully'
        }, status=status.HTTP_200_OK)
