# College Event Registration Platform - Backend

A secure Django REST Framework backend for college event registration with Supabase PostgreSQL.

## Features

- 🔐 JWT Authentication with refresh tokens
- 📝 Event management (CRUD for admins)
- 📋 Registration system with payment verification
- 🛡️ Rate limiting and security best practices
- 📊 Audit logging for registrations

## Tech Stack

- Django 5.x
- Django REST Framework
- SimpleJWT for authentication
- PostgreSQL (Supabase)
- CORS headers support

## Quick Start

### 1. Setup Python Environment

```bash
# Create virtual environment
python -m venv venv

# Activate (Windows)
venv\Scripts\activate

# Activate (Unix/Mac)
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

### 2. Configure Environment

```bash
# Copy example env file
cp .env.example .env

# Edit .env with your settings:
# - SECRET_KEY: Generate a strong key
# - DATABASE_URL: Your Supabase connection string
# - CORS_ALLOWED_ORIGINS: Your frontend URL
```

### 3. Database Setup

```bash
# Run migrations
python manage.py migrate

# Create superuser (admin)
python manage.py createsuperuser
```

### 4. Run Development Server

```bash
python manage.py runserver
```

Server will start at http://localhost:8000

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register/` | Register new user |
| POST | `/api/auth/login/` | Login (returns tokens) |
| POST | `/api/auth/logout/` | Logout (blacklist token) |
| POST | `/api/auth/token/refresh/` | Refresh access token |
| GET | `/api/auth/profile/` | Get user profile |
| PATCH | `/api/auth/profile/` | Update profile |

### Events

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/events/` | List active events |
| GET | `/api/events/{id}/` | Event details |
| GET | `/api/events/admin/` | Admin: List all events |
| POST | `/api/events/admin/` | Admin: Create event |
| PATCH | `/api/events/admin/{id}/` | Admin: Update event |
| DELETE | `/api/events/admin/{id}/` | Admin: Delete event |

### Registrations

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/registrations/` | Create registration |
| GET | `/api/registrations/me/` | User's registrations |
| GET | `/api/registrations/{id}/` | Registration detail |
| GET | `/api/registrations/admin/` | Admin: All registrations |
| PATCH | `/api/registrations/admin/{id}/verify/` | Admin: Verify payment |
| GET | `/api/registrations/admin/stats/` | Admin: Statistics |

## Example API Requests

### Register User

```json
POST /api/auth/register/
{
  "email": "student@college.edu",
  "password": "SecurePass123!",
  "password_confirm": "SecurePass123!",
  "first_name": "John",
  "last_name": "Doe",
  "college_name": "ABC College",
  "college_id": "STU2024001"
}
```

### Login

```json
POST /api/auth/login/
{
  "email": "student@college.edu",
  "password": "SecurePass123!"
}

Response:
{
  "access": "eyJ...",
  "refresh": "eyJ...",
  "user": {
    "id": "uuid",
    "email": "student@college.edu",
    "first_name": "John",
    "last_name": "Doe",
    "is_admin": false
  }
}
```

### Create Registration

```json
POST /api/registrations/
Authorization: Bearer <access_token>
{
  "event": "event-uuid",
  "payment_proof_url": "https://drive.google.com/...",
  "transaction_id": "TXN123456"
}
```

### Verify Registration (Admin)

```json
PATCH /api/registrations/admin/{id}/verify/
Authorization: Bearer <admin_token>
{
  "status": "VERIFIED",
  "admin_notes": "Payment confirmed via UTR"
}
```

## Security Features

- ✅ JWT authentication with httpOnly cookies option
- ✅ Password hashing (Django's PBKDF2)
- ✅ CORS allowlist configuration
- ✅ Rate limiting on sensitive endpoints
- ✅ CSRF protection
- ✅ SQL injection protection via ORM
- ✅ XSS protection headers
- ✅ Input validation on all endpoints
- ✅ Audit logging for registrations

## Running Tests

```bash
# Run all tests
pytest

# Run with coverage
pytest --cov=.
```

## Production Deployment

1. Set `DEBUG=False` in `.env`
2. Configure proper `SECRET_KEY`
3. Set `ALLOWED_HOSTS` appropriately
4. Enable HTTPS (`SECURE_SSL_REDIRECT=True`)
5. Use Gunicorn: `gunicorn core.wsgi:application`

## Project Structure

```
backend/
├── core/               # Django project settings
│   ├── settings.py
│   ├── urls.py
│   └── exceptions.py
├── accounts/           # User authentication
│   ├── models.py
│   ├── serializers.py
│   ├── views.py
│   └── urls.py
├── events/             # Event management
│   ├── models.py
│   ├── serializers.py
│   ├── views.py
│   └── urls.py
├── registrations/      # Registration handling
│   ├── models.py
│   ├── serializers.py
│   ├── views.py
│   └── urls.py
├── manage.py
└── requirements.txt
```
