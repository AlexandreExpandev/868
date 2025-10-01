import { Outlet, Link, useNavigate } from 'react-router-dom';
import { Button } from '@/core/components/Button';
import { useAuth } from '@/core/contexts/auth';

export const AppLayout = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/auth/login');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <nav className="container mx-auto flex items-center justify-between p-4">
          <Link to="/app/calculator" className="text-xl font-bold text-blue-600">
            Calculadora
          </Link>
          <div className="flex items-center gap-4">
            <span>Welcome, {user?.name}</span>
            <Button onClick={handleLogout} variant="secondary" size="sm">
              Logout
            </Button>
          </div>
        </nav>
      </header>
      <main className="container mx-auto p-4">
        <Outlet />
      </main>
    </div>
  );
};
