// configure our store
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import productSlice from "./slices/productSlice";

export const store = configureStore({
  reducer: {
    users: userSlice,
    products: productSlice
  }
});