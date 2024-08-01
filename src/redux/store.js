export const { configureStore } = require("@reduxjs/toolkit");
import cartReducer from "./features/cartSlice";
import productReducer from "./features/productSlice";

const store = configureStore({
  reducer: {
    cartReducer,
    productReducer,
  },
});
