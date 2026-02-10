"""URL patterns for events app."""

from django.urls import path
from .views import (
    EventListView,
    EventDetailView,
    EventAdminListCreateView,
    EventAdminDetailView,
)

app_name = 'events'

urlpatterns = [
    # Public endpoints
    path('', EventListView.as_view(), name='event_list'),
    path('<uuid:id>/', EventDetailView.as_view(), name='event_detail'),
    
    # Admin endpoints
    path('admin/', EventAdminListCreateView.as_view(), name='admin_event_list'),
    path('admin/<uuid:id>/', EventAdminDetailView.as_view(), name='admin_event_detail'),
]
