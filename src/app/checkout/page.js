'use client';

import { useSelector } from 'react-redux';
import { useState } from 'react';
import Link from 'next/link';

export default function Checkout() {
  const { items, totalAmount } = useSelector((state) => state.cart);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = () => {
    if (items.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <section className="py-16 px-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800">Order Confirmed!</h1>
        <p className="text-lg text-gray-600">Thank you for your purchase!</p>
        <Link href="/shop" className="text-primary underline mt-4 inline-block">
          Back to Shop
        </Link>
      </section>
    );
  }

  return (
    <section className="py-16 px-8 container mx-auto">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8">Checkout</h1>

      {/* Cart Summary */}
      <div className="space-y-8">
        {items.length === 0 ? (
          <p className="text-lg text-gray-600">Your cart is empty.</p>
        ) : (
          items.map((item) => (
            <div key={item.slug} className="flex justify-between items-center border-b pb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{item.title}</h2>
                <p className="text-gray-600">By {item.author}</p>
                <p className="text-xl font-bold text-primary">${item.price}</p>
              </div>
            </div>
          ))
        )}

        {/* Total Amount */}
        {items.length > 0 && (
          <h2 className="text-3xl font-bold text-gray-900 mt-8">
            Total Amount: ${totalAmount.toFixed(2)}
          </h2>
        )}
      </div>

      {/* Order Form */}
      {items.length > 0 && (
        <form className="mt-8 space-y-6 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800">Billing & Shipping Details</h2>

          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full p-4 border rounded-md"
          />
          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full p-4 border rounded-md"
          />
          <input
            type="text"
            placeholder="Shipping Address"
            required
            className="w-full p-4 border rounded-md"
          />

          <button
            type="button"
            onClick={handlePlaceOrder}
            className="bg-primary text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-800 transition"
          >
            Place Order
          </button>
        </form>
      )}
    </section>
  );
}
