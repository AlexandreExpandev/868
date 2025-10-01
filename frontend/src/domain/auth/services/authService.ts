import { api } from '@/core/lib/api';
import type { LoginCredentials, LoginResponse, RegisterData } from '../types';

/**
 * @service authService
 * @summary Provides methods for authentication-related API calls.
 */
export const authService = {
  login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
    const { data } = await api.post('/external/auth/login', credentials);
    return data.data;
  },

  register: async (registerData: RegisterData): Promise<void> => {
    await api.post('/external/auth/register', registerData);
  },
};
