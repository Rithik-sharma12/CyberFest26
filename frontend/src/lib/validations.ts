/**
 * Form Validation Schemas
 * 
 * Zod schemas for form validation.
 * Client-side validation only - server performs authoritative validation.
 */

import { z } from 'zod';

// Login form schema
export const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must be at least 8 characters'),
});

export type LoginSchema = z.infer<typeof loginSchema>;

// Signup form schema
export const signupSchema = z
  .object({
    email: z
      .string()
      .min(1, 'Email is required')
      .email('Please enter a valid email'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must be at least 8 characters')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        'Password must contain at least one uppercase letter, one lowercase letter, and one number'
      ),
    password_confirm: z.string().min(1, 'Please confirm your password'),
    first_name: z
      .string()
      .min(1, 'First name is required')
      .max(50, 'First name too long'),
    last_name: z
      .string()
      .min(1, 'Last name is required')
      .max(50, 'Last name too long'),
    phone_number: z
      .string()
      .optional()
      .refine(
        (val) => !val || /^\+?1?\d{9,15}$/.test(val),
        'Please enter a valid phone number'
      ),
    college_name: z.string().max(200, 'College name too long').optional(),
    college_id: z.string().max(50, 'College ID too long').optional(),
  })
  .refine((data) => data.password === data.password_confirm, {
    message: 'Passwords do not match',
    path: ['password_confirm'],
  });

export type SignupSchema = z.infer<typeof signupSchema>;

// Registration form schema
export const registrationSchema = z.object({
  payment_proof_url: z
    .string()
    .url('Please enter a valid URL')
    .optional()
    .or(z.literal('')),
  transaction_id: z
    .string()
    .max(100, 'Transaction ID too long')
    .optional()
    .or(z.literal('')),
});

export type RegistrationSchema = z.infer<typeof registrationSchema>;

// Password change schema
export const passwordChangeSchema = z
  .object({
    current_password: z.string().min(1, 'Current password is required'),
    new_password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        'Password must contain at least one uppercase letter, one lowercase letter, and one number'
      ),
    new_password_confirm: z.string().min(1, 'Please confirm your new password'),
  })
  .refine((data) => data.new_password === data.new_password_confirm, {
    message: 'Passwords do not match',
    path: ['new_password_confirm'],
  });

export type PasswordChangeSchema = z.infer<typeof passwordChangeSchema>;
