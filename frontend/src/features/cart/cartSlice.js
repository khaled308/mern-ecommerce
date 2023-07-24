import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const products = state.filter((p) => p._id !== item._id);
      products.push({
        quantity: 1,
        ...item,
      });
      return products;
    },
    removeFromCart(state, action) {
      const product = action.payload;
      return state.filter((item) => item._id !== product._id);
    },
    decreasingQuantity(state, action) {
      const product = action.payload;
      const item = state.find((item) => item._id === product._id);
      if (item.quantity > 1) {
        item.quantity--;
      }
    },
    increaseQuantity(state, action) {
      const product = action.payload;
      const item = state.find((item) => item._id === product._id);
      item.quantity++;
    },

    changeQuantity(state, action) {
      const { item, quantity } = action.payload;
      const updatedItem = state.find((p) => p._id === item._id);
      updatedItem.quantity = quantity;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decreasingQuantity,
  increaseQuantity,
  changeQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
