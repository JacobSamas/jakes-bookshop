import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalAmount: 0,
  orders: [], 
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find((item) => item.slug === action.payload.slug);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalAmount += action.payload.price;
    },

    removeFromCart: (state, action) => {
      const itemIndex = state.items.findIndex((item) => item.slug === action.payload.slug);
      if (itemIndex !== -1) {
        state.totalAmount -= state.items[itemIndex].price * state.items[itemIndex].quantity;
        state.items.splice(itemIndex, 1);
      }
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

export const { addToCart, removeFromCart, placeOrder } = cartSlice.actions;
export default cartSlice.reducer;
