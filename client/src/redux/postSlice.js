import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  try {
    const response = await axios.get("http://localhost:3001/posts");
    return response.data; 
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    throw error;
  }
});

export const userSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPosts.fulfilled, (state, action) => {
       return action.payload; 
    });
  },
});

export default userSlice.reducer;
