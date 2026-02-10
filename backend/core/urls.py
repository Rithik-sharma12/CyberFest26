"""
URL Configuration for College Event Registration Platform.
"""

from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # API endpoints
    path('api/auth/', include('accounts.urls')),
    path('api/events/', include('events.urls')),
    path('api/registrations/', include('registrations.urls')),
    
    # JWT Token refresh
    path('api/auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
