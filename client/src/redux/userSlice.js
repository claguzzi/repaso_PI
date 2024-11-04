import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  try {
    const response = await axios.get("http://localhost:3001/user");
    return response.data;
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    throw error;
  }
});

export const getUserByName = createAsyncThunk("users/getUserByName", async (nombre) => {
  try {
    const response = await axios.get(`http://localhost:3001/user?name=${nombre}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener usuario:", error);
    throw error;
  }
});

export const getUserById = createAsyncThunk("users/getUserById", async (id) => {
  try {
    const response = await axios.get(`http://localhost:3001/user/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener usuario:", error);
    throw error;
  }
});

export const deleteUser = createAsyncThunk("users/deleteUser", async (id) => {
  try {
    await axios.delete(`http://localhost:3001/user/${id}`);
    return id; // Devolvemos el ID del usuario eliminado
  } catch (error) {
    console.error("Error al eliminar usuario:", error);
    throw error;
  }
});

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    resetUsers: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(getUserByName.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        // Eliminar el usuario del estado basado en el ID devuelto
        return state.filter((user) => user.id !== action.payload);
      });
  },
});

export const { resetUsers } = userSlice.actions;

export default userSlice.reducer;
