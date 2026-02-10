"""URL patterns for registrations app."""

from django.urls import path
from .views import (
    RegistrationCreateView,
    UserRegistrationsView,
    UserRegistrationDetailView,
    AdminRegistrationListView,
    AdminRegistrationDetailView,
    AdminVerifyRegistrationView,
    AdminRegistrationStatsView,
)

app_name = 'registrations'

urlpatterns = [
    # User endpoints
    path('', RegistrationCreateView.as_view(), name='registration_create'),
    path('me/', UserRegistrationsView.as_view(), name='user_registrations'),
    path('<uuid:id>/', UserRegistrationDetailView.as_view(), name='registration_detail'),
    
    # Admin endpoints
    path('admin/', AdminRegistrationListView.as_view(), name='admin_registration_list'),
    path('admin/stats/', AdminRegistrationStatsView.as_view(), name='admin_stats'),
    path('admin/<uuid:id>/', AdminRegistrationDetailView.as_view(), name='admin_registration_detail'),
    path('admin/<uuid:id>/verify/', AdminVerifyRegistrationView.as_view(), name='admin_verify'),
]
