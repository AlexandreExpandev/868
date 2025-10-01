import React, { useState, useEffect, useCallback } from 'react';
import { AuthContext } from './context';
import type { AuthContextValue, User } from './types';
import { api } from '@/core/lib/api';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadUserFromToken = useCallback(async () => {
    const token = localStorage.getItem('authToken');
    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      // Here you would typically have an endpoint to verify the token and get user data
      // For this example, we'll assume the token is valid and decode it or fetch user.
      // This is a placeholder for a /me or /profile endpoint call.
      // For now, we'll just set a placeholder user if a token exists.
      setUser({ id: '1', name: 'User', email: 'user@example.com' });
    } else {
      delete api.defaults.headers.common['Authorization'];
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    loadUserFromToken();
  }, [loadUserFromToken]);

  const login = (userData: User, token: string) => {
    localStorage.setItem('authToken', token);
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    delete api.defaults.headers.common['Authorization'];
    setUser(null);
  };

  const value: AuthContextValue = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
