"""
Basic tests for registrations app.
"""

import pytest
from django.contrib.auth import get_user_model
from rest_framework.test import APIClient
from rest_framework import status
from django.utils import timezone
from datetime import timedelta

from events.models import Event
from registrations.models import Registration, PaymentStatus

User = get_user_model()


@pytest.fixture
def api_client():
    return APIClient()


@pytest.fixture
def test_user(db):
    return User.objects.create_user(
        email='test@example.com',
        password='TestPass123!',
        first_name='Test',
        last_name='User'
    )


@pytest.fixture
def admin_user(db):
    return User.objects.create_superuser(
        email='admin@example.com',
        password='AdminPass123!',
        first_name='Admin',
        last_name='User'
    )


@pytest.fixture
def test_event(db):
    return Event.objects.create(
        title='Test Event',
        description='A test event',
        date=timezone.now() + timedelta(days=7),
        venue='Test Venue',
        capacity=100,
        is_active=True
    )


@pytest.mark.django_db
class TestRegistrationCreate:
    """Tests for registration creation."""
    
    def test_create_registration_authenticated(self, api_client, test_user, test_event):
        """Test creating registration when authenticated."""
        api_client.force_authenticate(user=test_user)
        data = {
            'event': str(test_event.id),
            'payment_proof_url': 'https://drive.google.com/file/example',
        }
        response = api_client.post('/api/registrations/', data)
        assert response.status_code == status.HTTP_201_CREATED
        assert response.data['payment_status'] == 'PENDING'
    
    def test_create_registration_unauthenticated(self, api_client, test_event):
        """Test creating registration without auth fails."""
        data = {
            'event': str(test_event.id),
        }
        response = api_client.post('/api/registrations/', data)
        assert response.status_code == status.HTTP_401_UNAUTHORIZED
    
    def test_prevent_duplicate_registration(self, api_client, test_user, test_event):
        """Test duplicate registration is prevented."""
        api_client.force_authenticate(user=test_user)
        
        # First registration
        data = {'event': str(test_event.id)}
        api_client.post('/api/registrations/', data)
        
        # Second registration should fail
        response = api_client.post('/api/registrations/', data)
        assert response.status_code == status.HTTP_400_BAD_REQUEST


@pytest.mark.django_db
class TestAdminVerification:
    """Tests for admin verification endpoint."""
    
    def test_verify_registration(self, api_client, admin_user, test_user, test_event):
        """Test admin can verify registration."""
        # Create registration
        registration = Registration.objects.create(
            user=test_user,
            event=test_event,
            payment_status=PaymentStatus.PENDING
        )
        
        api_client.force_authenticate(user=admin_user)
        response = api_client.patch(
            f'/api/registrations/admin/{registration.id}/verify/',
            {'status': 'VERIFIED', 'admin_notes': 'Payment confirmed'}
        )
        
        assert response.status_code == status.HTTP_200_OK
        registration.refresh_from_db()
        assert registration.payment_status == PaymentStatus.VERIFIED
    
    def test_non_admin_cannot_verify(self, api_client, test_user, test_event):
        """Test non-admin cannot verify registration."""
        registration = Registration.objects.create(
            user=test_user,
            event=test_event,
            payment_status=PaymentStatus.PENDING
        )
        
        api_client.force_authenticate(user=test_user)
        response = api_client.patch(
            f'/api/registrations/admin/{registration.id}/verify/',
            {'status': 'VERIFIED'}
        )
        
        assert response.status_code == status.HTTP_403_FORBIDDEN
