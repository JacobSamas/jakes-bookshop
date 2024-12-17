"use client";

import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, addToFavorites, removeFromFavorites } from "@/store/cartSlice";
import Link from "next/link";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function Cart() {
  const { items, totalAmount, favorites } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Check if an item is in favorites
  const isFavorited = (slug) => favorites.some((item) => item.slug === slug);

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
        {items.map((item, index) => (
          <div
            key={`${item.slug}-${index}`}  // Corrected Key Issue
            className="flex justify-between items-center border-b pb-4"
          >
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{item.title}</h2>
              <p className="text-gray-600">By {item.author}</p>
              <p className="text-xl font-bold text-primary">${item.price}</p>
            </div>

            <div className="flex space-x-4 items-center">
              {/* Toggle Heart Icon */}
              <button
                aria-label={isFavorited(item.slug) ? "Remove from Favorites" : "Add to Favorites"}
                className="text-red-500 hover:text-red-600 transition"
                onClick={() =>
                  isFavorited(item.slug)
                    ? dispatch(removeFromFavorites(item))
                    : dispatch(addToFavorites(item))
                }
              >
                {isFavorited(item.slug) ? (
                  <FavoriteIcon fontSize="large" />
                ) : (
                  <FavoriteBorderIcon fontSize="large" />
                )}
              </button>

              {/* Remove Button */}
              <button
                onClick={() => dispatch(removeFromCart(item))}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          </div>
        ))}

        <h2 className="text-3xl font-bold text-gray-900 mt-8">
          Total Amount: ${totalAmount.toFixed(2)}
        </h2>

        <Link href="/checkout">
          <button className="bg-secondary text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-yellow-500 transition">
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </section>
  );
}
