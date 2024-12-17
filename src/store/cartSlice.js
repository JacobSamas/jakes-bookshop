import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalAmount: 0,
  orders: [],
  favorites: [], // Correct Favorites State
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const exists = state.favorites.some(
        (item) => item.slug === action.payload.slug
      );
      if (!exists) {
        state.favorites.push(action.payload); // Add unique favorite
      }
    },

    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        (item) => item.slug !== action.payload.slug
      );
    },

    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.slug === action.payload.slug
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalAmount += action.payload.price;
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.slug !== action.payload.slug
      );
    },

    placeOrder: (state, action) => {
      state.orders.push({
        orderId: Date.now(),
        items: [...state.items],
        totalAmount: state.totalAmount,
        customerDetails: action.payload,
      });
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  placeOrder,
  addToFavorites,
  removeFromFavorites,
} = cartSlice.actions;

export default cartSlice.reducer;
