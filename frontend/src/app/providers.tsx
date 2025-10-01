import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from '@/core/contexts/auth';
import { queryClient } from '@/core/lib/queryClient';

/**
 * @component AppProviders
 * @summary Wraps the entire application with necessary context providers.
 * @type layout-component
 */
export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        {children}
        <Toaster position="bottom-right" />
      </AuthProvider>
    </QueryClientProvider>
  );
};
