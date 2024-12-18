'use client';

import AuthForm from '@/components/AuthForm';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export default function Signup() {
  const router = useRouter();

  const handleSignup = (data) => {
    if (data.password !== data.confirmPassword) {
      toast.error("Passwords don't match!");
    } else {
      toast.success('Signup successful! You can now login.');
      router.push('/auth/login');
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <AuthForm type="signup" onSubmit={handleSignup} />
    </section>
  );
}
