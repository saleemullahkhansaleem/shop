import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "productSlice",
  initialState: [],
  reducers: {
    addProduct: (state, action) => [...state, action.payload],
    removeProduct: (state, action) =>
      state.filter((item) => item.id !== action.payload),
    updateProduct: (state, action) =>
      state.map((pro) => (pro.id === action.payload.id ? action.payload : pro)),
  },
});

export const { addProduct, removeProduct, updateProduct } =
  productSlice.actions;
export default productSlice.reducer;
