'use client';

import Link from 'next/link';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const heroTextRef = useRef(null);
  const subTextRef = useRef(null);
  const ctaBtnRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroTextRef.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1, ease: 'power2.out' }
    );

    gsap.fromTo(
      subTextRef.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1, delay: 0.3, ease: 'power2.out' }
    );

    gsap.fromTo(
      ctaBtnRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: 'power2.out' }
    );

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1, delay: 0.9, ease: 'power2.out' }
    );
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 via-primary to-blue-700 text-white px-6 lg:px-16">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Text Section */}
        <div className="space-y-6 text-center lg:text-left">
          <h1
            ref={heroTextRef}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
          >
            Discover Your Next Great Read
          </h1>
          <p
            ref={subTextRef}
            className="text-md md:text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto lg:mx-0"
          >
            Dive into unforgettable stories, timeless classics, and modern hits. 
            Let your next adventure begin at Jake&apos;s Bookshop.
          </p>
          <div ref={ctaBtnRef} className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 mt-6">
            <Link
              href="/shop"
              className="bg-secondary text-white py-4 px-8 rounded-md text-lg font-semibold hover:bg-yellow-500 transition transform hover:scale-105"
            >
              Shop Now
            </Link>
            <Link
              href="/about"
              className="border-2 border-white text-white py-4 px-8 rounded-md text-lg font-semibold hover:bg-white hover:text-primary transition transform hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Image Section Hidden on Mobile */}
        <div className="hidden md:flex justify-center lg:justify-end">
          <div
            ref={imageRef}
            className="w-64 h-80 md:w-72 md:h-96 lg:w-80 lg:h-96 bg-gray-300 rounded-lg shadow-lg flex items-center justify-center text-gray-600 text-2xl md:text-3xl font-semibold"
          >
            Book Preview
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
