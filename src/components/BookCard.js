'use client';

import Link from 'next/link';
import { gsap } from 'gsap';
import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites, addToCart } from '@/store/cartSlice';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const BookCard = ({ title, author, price, image, link, slug }) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const dispatch = useDispatch();

  // Directly Check Favorites from Redux State
  const { favorites } = useSelector((state) => state.cart);
  const isFavorited = favorites.some((item) => item.slug === slug);

  useEffect(() => {
    // GSAP Animations
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

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        slug,
        title,
        author,
        price,
        image,
      })
    );
    alert(`${title} added to cart!`);
  };

  const handleToggleFavorite = () => {
    if (isFavorited) {
      dispatch(removeFromFavorites({ slug }));
    } else {
      dispatch(
        addToFavorites({
          slug,
          title,
          author,
          price,
          image,
        })
      );
    }
  };

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
      </Link>

      <div className="p-4 space-y-2 h-1/3 flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800 truncate">{title}</h2>

          {/* Toggle Heart Icon */}
          <button
            onClick={handleToggleFavorite}
            aria-label={isFavorited ? 'Remove from Favorites' : 'Add to Favorites'}
            className="text-red-500 hover:text-red-600 transition"
          >
            {isFavorited ? (
              <FavoriteIcon fontSize="large" />
            ) : (
              <FavoriteBorderIcon fontSize="large" />
            )}
          </button>
        </div>

        <p className="text-gray-600 truncate">By {author}</p>

        <div className="flex justify-between items-center mt-2">
          <p className="text-primary font-bold text-lg">${price}</p>
          <button
            onClick={handleAddToCart}
            className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-primary transition"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
