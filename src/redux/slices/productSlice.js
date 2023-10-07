import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../actions/ProductAction";

let initialState = {
  isLoading: false,
  isError: false,
  productDetails: {}
};

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // loading state
    builder.addCase(getProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    // error state
    builder.addCase(getProducts.rejected, (state, action) => {
      state.isError = true;
    });
    // sign in
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.productDetails = action.payload;
    });
  }
});

export default productSlice.reducer;