import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import { Button } from '@/core/components/Button';
import { Input } from '@/core/components/Input';
import { useAuth } from '@/core/contexts/auth';
import { authService, loginSchema, LoginCredentials } from '@/domain/auth';

/**
 * @page LoginPage
 * @summary Page for user login.
 * @domain auth
 * @type page-component
 */
export const LoginPage = () => {
  const navigate = useNavigate();
  const { login: setAuth } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginCredentials>({
    resolver: zodResolver(loginSchema),
  });

  const mutation = useMutation({
    mutationFn: authService.login,
    onSuccess: (data) => {
      setAuth(data.user, data.token);
      toast.success('Logged in successfully!');
      navigate('/app/calculator');
    },
    onError: (error) => {
      toast.error(error.message || 'Login failed. Please check your credentials.');
    },
  });

  const onSubmit = (data: LoginCredentials) => {
    mutation.mutate(data);
  };

  return (
    <div>
      <h2 className="mb-6 text-center text-2xl font-bold">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Input placeholder="Email" {...register('email')} />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
        </div>
        <div>
          <Input type="password" placeholder="Password" {...register('password')} />
          {errors.password && (
            <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>
          )}
        </div>
        <Button type="submit" className="w-full" isLoading={mutation.isPending}>
          Login
        </Button>
      </form>
      <p className="mt-4 text-center text-sm">
        Don't have an account?{' '}
        <Link to="/auth/register" className="font-medium text-blue-600 hover:underline">
          Register
        </Link>
      </p>
    </div>
  );
};
