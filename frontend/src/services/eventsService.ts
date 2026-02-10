/**
 * Events API Service
 * 
 * Handles all event-related API calls.
 */

import apiClient from './api';
import type { Event, EventDetail } from '@/types/api';

export interface EventsQueryParams {
  search?: string;
  upcoming?: boolean;
  ordering?: string;
}

export const eventsService = {
  /**
   * Get list of all active events
   */
  getEvents: async (params?: EventsQueryParams): Promise<Event[]> => {
    const response = await apiClient.get<Event[]>('/events/', { params });
    return response.data;
  },

  /**
   * Get event details by ID
   */
  getEventById: async (id: string): Promise<EventDetail> => {
    const response = await apiClient.get<EventDetail>(`/events/${id}/`);
    return response.data;
  },
};

export default eventsService;
