/**
 * API Type Definitions
 * 
 * These types match the Django REST Framework serializers.
 * Keep in sync with backend serializers.
 */

// User Types
export interface User {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  full_name: string;
  phone_number?: string;
  college_name?: string;
  college_id?: string;
  created_at: string;
}

export interface AuthTokens {
  access: string;
  refresh: string;
}

export interface LoginResponse {
  access: string;
  refresh: string;
  user: {
    id: string;
    email: string;
    first_name: string;
    last_name: string;
    is_admin: boolean;
  };
}

export interface RegisterResponse {
  message: string;
  user: User;
  tokens: AuthTokens;
}

// Event Types
export interface Event {
  id: string;
  title: string;
  date: string;
  venue: string;
  capacity: number;
  registration_fee: number;
  is_active: boolean;
  is_registration_open: boolean;
  available_spots: number;
  image_url?: string;
}

export interface EventDetail extends Event {
  description: string;
  end_date?: string;
  contact_email?: string;
  payment_form_url?: string;
  created_at: string;
  registration_count: number;
  is_upcoming: boolean;
  is_full: boolean;
}

// Registration Types
export type PaymentStatus = 'PENDING' | 'VERIFIED' | 'REJECTED';

export interface Registration {
  id: string;
  event: Event;
  payment_proof_url?: string;
  transaction_id?: string;
  payment_status: PaymentStatus;
  status_display: string;
  created_at: string;
  updated_at: string;
}

export interface RegistrationCreatePayload {
  event: string;
  payment_proof_url?: string;
  transaction_id?: string;
}

// API Response Types
export interface ApiError {
  error: {
    code: string;
    message: string;
    details?: Record<string, string[]>;
  };
}

export interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

// Form Types (for React Hook Form)
export interface LoginFormData {
  email: string;
  password: string;
}

export interface SignupFormData {
  email: string;
  password: string;
  password_confirm: string;
  first_name: string;
  last_name: string;
  phone_number?: string;
  college_name?: string;
  college_id?: string;
}

export interface RegistrationFormData {
  payment_proof_url?: string;
  transaction_id?: string;
}
