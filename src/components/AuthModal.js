'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import AuthForm from '@/components/AuthForm';

const AuthModal = ({ type, isOpen, onClose, onSwitch }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
      );
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div
        ref={modalRef}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md space-y-6 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          ✖
        </button>

        <AuthForm type={type} onSubmit={() => {}} />

        {type === 'login' && (
          <p className="text-center mt-4">
            Don’t have an account?{' '}
            <button
              onClick={() => onSwitch('signup')}
              className="text-primary underline"
            >
              Sign Up
            </button>
            {' | '}
            <button
              onClick={() => onSwitch('reset')}
              className="text-primary underline"
            >
              Forgot Password?
            </button>
          </p>
        )}

        {type === 'signup' && (
          <p className="text-center mt-4">
            Already have an account?{' '}
            <button
              onClick={() => onSwitch('login')}
              className="text-primary underline"
            >
              Login
            </button>
          </p>
        )}

        {type === 'reset' && (
          <p className="text-center mt-4">
            Remembered your password?{' '}
            <button
              onClick={() => onSwitch('login')}
              className="text-primary underline"
            >
              Login Here
            </button>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthModal;
