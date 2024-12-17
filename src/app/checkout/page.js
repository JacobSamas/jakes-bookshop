'use client';

import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { placeOrder } from '@/store/cartSlice';
import Link from 'next/link';

export default function Checkout() {
  const { items, totalAmount } = useSelector((state) => state.cart);
  const [customerDetails, setCustomerDetails] = useState({
    fullName: '',
    email: '',
    address: '',
  });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const dispatch = useDispatch();

  const handlePlaceOrder = () => {
    if (items.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    dispatch(placeOrder(customerDetails));
    setOrderPlaced(true);
  };

  const handleChange = (e) => {
    setCustomerDetails({ ...customerDetails, [e.target.name]: e.target.value });
  };

  if (orderPlaced) {
    return (
      <section className="py-16 px-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800">Order Confirmed!</h1>
        <p className="text-lg text-gray-600">Thank you for your purchase!</p>
        <Link href="/orders" className="text-primary underline mt-4 inline-block">
          View Order History
        </Link>
      </section>
    );
  }

  return (
    <section className="py-16 px-8 container mx-auto">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8">Checkout</h1>

      {/* Order Form */}
      <form className="mt-8 space-y-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800">Billing & Shipping Details</h2>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={customerDetails.fullName}
          onChange={handleChange}
          required
          className="w-full p-4 border rounded-md"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={customerDetails.email}
          onChange={handleChange}
          required
          className="w-full p-4 border rounded-md"
        />
        <input
          type="text"
          name="address"
          placeholder="Shipping Address"
          value={customerDetails.address}
          onChange={handleChange}
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
    </section>
  );
}
