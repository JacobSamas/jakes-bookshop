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
            <h2 className="text-2xl font-bold text-gray-800">
              Order #{order.orderId}
            </h2>
            <p className="text-gray-600">Total Amount: ${order.totalAmount.toFixed(2)}</p>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Items:</h3>
            <ul className="list-disc list-inside">
              {order.items.map((item, index) => (
                <li key={`${item.slug}-${index}`} className="text-gray-600">
                  {item.title} - ${item.price} x {item.quantity}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
