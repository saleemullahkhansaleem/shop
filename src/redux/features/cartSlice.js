import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      if (state.findIndex((pro) => pro.id === action.payload.id) === -1) {
        state.push(action.payload);
      } else {
        return state.map((pro) =>
          pro.id === action.payload.id
            ? { ...pro, quantity: pro.quantity + 1 }
            : pro
        );
      }
    },
    removeFromCart(state, action) {
      return state.filter((pro) => pro.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
