/**
 * Registrations API Service
 * 
 * Handles all registration-related API calls.
 */

import apiClient from './api';
import type { Registration, RegistrationCreatePayload } from '@/types/api';

export const registrationsService = {
  /**
   * Create a new registration for an event
   */
  createRegistration: async (data: RegistrationCreatePayload): Promise<Registration> => {
    const response = await apiClient.post<Registration>('/registrations/', data);
    return response.data;
  },

  /**
   * Get current user's registrations
   */
  getMyRegistrations: async (): Promise<Registration[]> => {
    const response = await apiClient.get<Registration[]>('/registrations/me/');
    return response.data;
  },

  /**
   * Get registration details by ID
   */
  getRegistrationById: async (id: string): Promise<Registration> => {
    const response = await apiClient.get<Registration>(`/registrations/${id}/`);
    return response.data;
  },
};

export default registrationsService;
