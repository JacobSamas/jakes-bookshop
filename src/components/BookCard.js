'use client';

import Link from 'next/link';
import { gsap } from 'gsap';
import { useRef, useEffect } from 'react';

const BookCard = ({ title, author, price, image, link }) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);

  // Animation on Load
  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    );

    gsap.fromTo(
      imageRef.current,
      { scale: 0.95 },
      { scale: 1, duration: 1, delay: 0.3, ease: 'elastic.out(1, 0.5)' }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className="group relative bg-white rounded-xl shadow-lg overflow-hidden w-60 h-96 transform transition hover:scale-105 hover:shadow-2xl"
    >
      <Link href={link}>
        <div
          ref={imageRef}
          className="h-2/3 bg-gray-300 flex items-center justify-center text-gray-600 text-xl font-semibold group-hover:scale-110 transition-transform"
        >
          {image || 'Book Cover'}
        </div>

        <div className="p-4 space-y-2 h-1/3 flex flex-col justify-between">
          <h2 className="text-xl font-bold text-gray-800 truncate">{title}</h2>
          <p className="text-gray-600 truncate">By {author}</p>

          <div className="flex justify-between items-center mt-2">
            <p className="text-primary font-bold text-lg">${price}</p>
            <button className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-primary transition">
              Buy Now
            </button>
          </div>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
      </Link>
    </div>
  );
};

export default BookCard;
