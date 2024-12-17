'use client';

import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { removeFromFavorites } from '@/store/cartSlice';

export default function Favorites() {
  const { favorites } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (favorites.length === 0) {
    return (
      <section className="py-16 px-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800">No Favorites Found</h1>
        <Link href="/shop" className="text-primary underline mt-4 inline-block">
          Start Shopping
        </Link>
      </section>
    );
  }

  return (
    <section className="py-16 px-8 container mx-auto">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8">Your Favorites</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {favorites.map((item, index) => (
          <div key={`${item.slug}-${index}`} className="border p-6 rounded-md shadow-md">
            <h2 className="text-2xl font-bold text-gray-800">{item.title}</h2>
            <p className="text-gray-600">By {item.author}</p>
            <p className="text-xl font-bold text-primary">${item.price}</p>

            <button
              onClick={() => dispatch(removeFromFavorites(item))}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition mt-4"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
