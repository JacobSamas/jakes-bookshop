'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export default function Reset() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleReset = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error('Please enter your email!');
      return;
    }

    toast.success(`Password reset link sent to ${email}`);
    setEmail('');
    router.push('/auth/login'); 
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleReset}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-auto space-y-6"
      >
        <h1 className="text-4xl font-bold text-center">Reset Password</h1>

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-4 rounded-md border border-gray-300"
        />

        <button
          type="submit"
          className="bg-primary text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-secondary transition w-full"
        >
          Send Reset Link
        </button>

        <div className="text-center mt-4">
          <p>
            Remembered your password?{' '}
            <a href="/auth/login" className="text-primary underline">
              Login Here
            </a>
          </p>
        </div>
      </form>
    </section>
  );
}
