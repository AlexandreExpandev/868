import { Link } from 'react-router-dom';
import { Button } from '@/core/components/Button';

/**
 * @page HomePage
 * @summary The public landing page for the application.
 * @type page-component
 */
export const HomePage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Calculadora</h1>
        <p className="mt-4 text-lg text-gray-600">A simple calculator for your daily needs.</p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild>
            <Link to="/auth/login">Login</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link to="/auth/register">Register</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
