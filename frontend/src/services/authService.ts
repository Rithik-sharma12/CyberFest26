/**
 * Authentication API Service
 * 
 * Handles all auth-related API calls.
 */

import apiClient, { tokenStorage } from './api';
import type {
  User,
  LoginResponse,
  RegisterResponse,
  LoginFormData,
  SignupFormData,
} from '@/types/api';

export const authService = {
  /**
   * Login user with email and password
   */
  login: async (data: LoginFormData): Promise<LoginResponse> => {
    const response = await apiClient.post<LoginResponse>('/auth/login/', data);
    const { access, refresh } = response.data;
    tokenStorage.setTokens(access, refresh);
    return response.data;
  },

  /**
   * Register a new user
   */
  register: async (data: SignupFormData): Promise<RegisterResponse> => {
    const response = await apiClient.post<RegisterResponse>('/auth/register/', data);
    const { tokens } = response.data;
    tokenStorage.setTokens(tokens.access, tokens.refresh);
    return response.data;
  },

  /**
   * Logout user - blacklist refresh token
   */
  logout: async (): Promise<void> => {
    const refreshToken = tokenStorage.getRefreshToken();
    try {
      await apiClient.post('/auth/logout/', { refresh: refreshToken });
    } finally {
      tokenStorage.clearTokens();
    }
  },

  /**
   * Get current user profile
   */
  getProfile: async (): Promise<User> => {
    const response = await apiClient.get<User>('/auth/profile/');
    return response.data;
  },

  /**
   * Update current user profile
   */
  updateProfile: async (data: Partial<User>): Promise<User> => {
    const response = await apiClient.patch<User>('/auth/profile/', data);
    return response.data;
  },

  /**
   * Change password
   */
  changePassword: async (data: {
    current_password: string;
    new_password: string;
    new_password_confirm: string;
  }): Promise<{ message: string }> => {
    const response = await apiClient.post('/auth/password/change/', data);
    return response.data;
  },

  /**
   * Check if user is authenticated (has valid token)
   */
  isAuthenticated: (): boolean => {
    return !!tokenStorage.getAccessToken();
  },
};

export default authService;
