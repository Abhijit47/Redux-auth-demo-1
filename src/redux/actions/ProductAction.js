import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getProducts = createAsyncThunk(
  "getProducts",

  //payload creator
  async (payload) => {
    // rest of the logic
    try {
      const res = await axios.get("https://dummyjson.com/products");
      // console.log(res.data.products);
      return res.data;
    } catch (error) {
      alert(error.message);
    }
  }
);