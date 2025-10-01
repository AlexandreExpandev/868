import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from '@/core/components/ErrorBoundary';

export const RootLayout = () => {
  return (
    <ErrorBoundary fallback={<div>Something went wrong at the root level.</div>}>
      <Outlet />
    </ErrorBoundary>
  );
};
