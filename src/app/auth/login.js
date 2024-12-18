'use client';

import AuthForm from '@/components/AuthForm';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();

  const handleLogin = (data) => {
    if (data.email === 'user@test.com' && data.password === 'password') {
      toast.success('Logged in successfully!');
      router.push('/');
    } else {
      toast.error('Invalid credentials!');
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <AuthForm type="login" onSubmit={handleLogin} />
    </section>
  );
}
