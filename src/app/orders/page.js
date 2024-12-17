'use client';

import { useSelector } from 'react-redux';
import Link from 'next/link';

export default function Orders() {
  const { orders } = useSelector((state) => state.cart);

  if (orders.length === 0) {
    return (
      <section className="py-16 px-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800">No Orders Found</h1>
        <Link href="/shop" className="text-primary underline mt-4 inline-block">
          Start Shopping
        </Link>
      </section>
    );
  }

  return (
    <section className="py-16 px-8 container mx-auto">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8">Order History</h1>

      <div className="space-y-8">
        {orders.map((order) => (
          <div key={order.orderId} className="border p-6 rounded-md shadow-md">
            <h2 className="text-2xl font-bold text-gray-800">Order #{order.orderId}</h2>
            <p className="text-lg text-gray-600">Customer: {order.customerDetails.fullName}</p>
            <p className="text-lg text-gray-600">Email: {order.customerDetails.email}</p>
            <p className="text-lg text-gray-600">Address: {order.customerDetails.address}</p>

            <h3 className="text-xl font-bold text-gray-800 mt-4">Order Summary:</h3>
            {order.items.map((item) => (
              <div key={item.slug} className="flex justify-between">
                <p>{item.title} - x{item.quantity}</p>
                <p>${item.price.toFixed(2)}</p>
              </div>
            ))}

            <h3 className="text-xl font-bold text-gray-800 mt-4">
              Total Amount: ${order.totalAmount.toFixed(2)}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
