# College Event Registration Platform

A secure, full-stack event registration platform for colleges built with Django REST Framework and React.

## 🏗️ Architecture

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│                 │     │                 │     │                 │
│   React SPA     │────▶│  Django REST    │────▶│   Supabase      │
│   (Frontend)    │     │  API (Backend)  │     │   PostgreSQL    │
│                 │     │                 │     │                 │
└─────────────────┘     └─────────────────┘     └─────────────────┘
     Port 5173              Port 8000              Cloud DB
```

## 📁 Project Structure

```
code/
├── backend/            # Django REST API
│   ├── core/           # Project settings
│   ├── accounts/       # User auth
│   ├── events/         # Event management
│   ├── registrations/  # Registration handling
│   └── README.md
│
├── frontend/           # React SPA
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── context/
│   └── README.md
│
└── README.md           # This file
```

## 🚀 Quick Start

### Prerequisites

- Python 3.10+
- Node.js 18+
- PostgreSQL (or Supabase account)

### Backend Setup

```bash
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows

# Install dependencies
pip install -r requirements.txt

# Configure environment
cp .env.example .env
# Edit .env with your database credentials

# Run migrations
python manage.py migrate

# Create admin user
python manage.py createsuperuser

# Start server
python manage.py runserver
```

### Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Configure environment
cp .env.example .env.local
# Set VITE_API_BASE_URL=http://localhost:8000/api

# Start development server
npm run dev
```

## 🔐 Security Features

- JWT authentication with refresh tokens
- Password hashing with Django's PBKDF2
- CORS allowlist configuration
- Rate limiting on registration endpoints
- CSRF protection
- SQL injection protection via ORM
- Input validation on all endpoints
- Audit logging for sensitive operations

## 📋 Features

### User Features
- Browse active events
- Register for events
- Submit payment proof
- Track registration status
- View registration history

### Admin Features
- Manage events (CRUD)
- View all registrations
- Verify/reject payments
- View registration statistics

## 🛠️ Tech Stack

### Backend
- Django 5.x
- Django REST Framework
- SimpleJWT
- PostgreSQL (Supabase)

### Frontend
- React 18
- TypeScript
- Vite
- Tailwind CSS 3
- TanStack React Query
- React Hook Form + Zod

## 📖 API Documentation

See [backend/README.md](backend/README.md) for full API documentation.

### Key Endpoints

```
# Auth
POST /api/auth/register/
POST /api/auth/login/
POST /api/auth/logout/

# Events
GET  /api/events/
GET  /api/events/{id}/

# Registrations
POST /api/registrations/
GET  /api/registrations/me/
PATCH /api/registrations/admin/{id}/verify/
```

## 🧪 Testing

### Backend Tests
```bash
cd backend
pytest
```

### Frontend Tests
```bash
cd frontend
npm run test  # when tests are added
```

## 📦 Deployment

### Backend (Example with Gunicorn)
```bash
gunicorn core.wsgi:application --bind 0.0.0.0:8000
```

### Frontend (Build)
```bash
npm run build
# Deploy dist/ folder to static hosting
```

## 📝 License

This project is proprietary. All rights reserved.

## 👥 Contributors

- Development Team
