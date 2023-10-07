import { createSlice } from "@reduxjs/toolkit";
import { signIn } from "../actions/authAction";

let initialState = {
  isLoading: false,
  isError: false,
  userDetails: {}
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // loading state
    builder.addCase(signIn.pending, (state, action) => {
      state.isLoading = true;
    });
    // error state
    builder.addCase(signIn.rejected, (state, action) => {
      state.isError = true;
    });
    // sign in
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.userDetails = action.payload;
    });
  }
});

export default userSlice.reducer;