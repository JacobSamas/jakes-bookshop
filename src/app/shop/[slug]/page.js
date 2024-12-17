'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { use, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const bookData = [
  { slug: 'gatsby', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 15.99, description: 'A classic novel about the American dream.' },
  { slug: '1984', title: '1984', author: 'George Orwell', price: 13.49, description: 'A dystopian story about a totalitarian future.' },
  { slug: 'mockingbird', title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 17.99, description: 'A story of racial injustice in the deep South.' },
  { slug: 'catcher', title: 'The Catcher in the Rye', author: 'J.D. Salinger', price: 14.99, description: 'A coming-of-age novel about teenage rebellion.' },
  { slug: 'pride', title: 'Pride and Prejudice', author: 'Jane Austen', price: 12.99, description: 'A romantic story about manners and misunderstandings.' },
  { slug: 'mobydick', title: 'Moby Dick', author: 'Herman Melville', price: 19.99, description: 'A tale of obsession and revenge on the high seas.' }
];

export default function BookDetails({ params }) {
  const { slug } = use(params); 
  const book = bookData.find((b) => b.slug === slug);
  const router = useRouter();

  // Animation Refs
  const coverRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // GSAP Animations
    gsap.fromTo(
      coverRef.current,
      { opacity: 0, scale: 0.9, x: -100 },
      { opacity: 1, scale: 1, x: 0, duration: 1, ease: 'power2.out' }
    );

    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1, delay: 0.5, ease: 'power2.out' }
    );

    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.8, ease: 'power2.out' }
    );
  }, []);

  if (!book) {
    return (
      <section className="py-16 px-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800">Book Not Found</h1>
        <Link href="/shop" className="text-primary underline mt-4 inline-block">
          Back to Shop
        </Link>
      </section>
    );
  }

  return (
    <section className="py-16 px-8 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div
        ref={coverRef}
        className="bg-gradient-to-tr from-blue-800 to-purple-600 h-96 w-full rounded-lg shadow-lg flex items-center justify-center text-white text-3xl font-bold"
      >
        {book.title} Cover
      </div>

      <div ref={textRef} className="space-y-6">
        <h1 className="text-5xl font-extrabold text-gray-900">{book.title}</h1>
        <p className="text-lg text-gray-600">By {book.author}</p>
        <p className="text-xl text-gray-700 leading-relaxed">{book.description}</p>
        <p className="text-4xl font-bold text-primary">${book.price}</p>

        <div ref={buttonRef} className="flex space-x-6 mt-8">
          <button
            onClick={() => alert('Added to Cart!')}
            className="bg-secondary text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-yellow-500 transition transform hover:scale-105 shadow-lg"
          >
            Add to Cart
          </button>

          <button
            onClick={() => router.push('/shop')}
            className="border-2 border-gray-700 text-gray-800 px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-800 hover:text-white transition transform hover:scale-105 shadow-lg"
          >
            Back to Shop
          </button>
        </div>
      </div>
    </section>
  );
}
