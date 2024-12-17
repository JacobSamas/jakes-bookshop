'use client';

import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '@/store/cartSlice';
import Link from 'next/link';

export default function Cart() {
  const { items, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (items.length === 0) {
    return (
      <section className="py-16 px-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800">Your Cart is Empty</h1>
        <Link href="/shop" className="text-primary underline mt-4 inline-block">
          Back to Shop
        </Link>
      </section>
    );
  }

  return (
    <section className="py-16 px-8 container mx-auto">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8">Your Cart</h1>
      <div className="space-y-8">
        {items.map((item) => (
          <div key={item.slug} className="flex justify-between items-center border-b pb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{item.title}</h2>
              <p className="text-gray-600">By {item.author}</p>
              <p className="text-xl font-bold text-primary">${item.price}</p>
            </div>

            <button
              onClick={() => dispatch(removeFromCart(item))}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
            >
              Remove
            </button>
          </div>
        ))}

        <h2 className="text-3xl font-bold text-gray-900 mt-8">
          Total Amount: ${totalAmount.toFixed(2)}
        </h2>

        <Link href="/shop">
          <button className="bg-primary text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-800 transition">
            Continue Shopping
          </button>
        </Link>
      </div>
    </section>
  );
}
