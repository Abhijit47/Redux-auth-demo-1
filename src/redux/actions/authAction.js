import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const signIn = createAsyncThunk(
  "signIn",

  //payload creator
  async (payload) => {
    // rest of the logic
    try {
      const res = await axios.post("https://dummyjson.com/auth/login", payload);
      // console.log(res.data);
      alert("Login success!");
      if (res.status === 200) {
        localStorage.setItem("jwt-token", res.data.token);
      }
      return res.data;
    } catch (error) {
      alert(error.message);
    }
  }
);