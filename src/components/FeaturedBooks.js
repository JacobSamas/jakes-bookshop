'use client';

import { useState, useEffect } from 'react';
import BookCard from './BookCard';

const FeaturedBooks = () => {
  const books = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 15.99, link: '/shop/gatsby' },
    { title: '1984', author: 'George Orwell', price: 13.49, link: '/shop/1984' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 17.99, link: '/shop/mockingbird' },
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', price: 14.99, link: '/shop/catcher' },
    { title: 'Pride and Prejudice', author: 'Jane Austen', price: 12.99, link: '/shop/pride' },
    { title: 'Moby Dick', author: 'Herman Melville', price: 19.99, link: '/shop/mobydick' }
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(1); 

  // Swipe Handling
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    if (touchStartX - touchEndX > 50 && currentPage < pages - 1) {
      setCurrentPage((prev) => prev + 1); // Swipe left
    }
    if (touchEndX - touchStartX > 50 && currentPage > 0) {
      setCurrentPage((prev) => prev - 1); // Swipe right
    }
  };

  // Responsive Breakpoints
  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth >= 1024) setCardsPerPage(4);  // Desktop
      else if (window.innerWidth >= 768) setCardsPerPage(2);  // Tablet
      else setCardsPerPage(1);  // Mobile
    };

    window.addEventListener('resize', updateCardsPerPage);
    updateCardsPerPage();

    return () => window.removeEventListener('resize', updateCardsPerPage);
  }, []);

  const pages = Math.ceil(books.length / cardsPerPage);

  const handleDotClick = (index) => {
    setCurrentPage(index);
  };

  return (
    <section className="py-16 px-8 bg-gray-100">
      <div className="container mx-auto text-center space-y-8">
        <h1 className="text-4xl font-extrabold text-gray-800">Featured Books</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our curated selection of top-rated books from renowned authors across all genres.
        </p>

        {/* Horizontal Scroll Section with Touch Events */}
        <div
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentPage * 100}%)`
            }}
          >
            {books.map((book, index) => (
              <div
                key={index}
                className="w-full md:w-1/2 lg:w-1/4 px-4"
              >
                <BookCard
                  title={book.title}
                  author={book.author}
                  price={book.price}
                  link={book.link}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-4">
          {Array.from({ length: pages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-4 h-4 rounded-full ${
                currentPage === index ? 'bg-primary' : 'bg-gray-400'
              } transition`}
              aria-label={`Go to page ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
