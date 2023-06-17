import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../token";
import Cookies from "js-cookie";
import { FormLoginValues, FormValues } from "../types/FormValues";

export const createUser = createAsyncThunk(
  "user/createUser",
  async (values: FormValues, { rejectWithValue }) => {
    try {
      const response = await api.post("/users", values);
      console.log("🚀 ~ file: usersSlice.ts:12 ~ response:", response);
      Cookies.set("token", response.data.token, { expires: 7 });
      return response.data.user;
    } catch (error: any) {
      console.log("🚀 ~ file: usersSlice.ts:14 ~ error:", error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const login = createAsyncThunk(
  "user/createUser",
  async (values: FormLoginValues, { rejectWithValue }) => {
    try {
      const response = await api.post("/login", values);
      console.log("🚀 ~ file: usersSlice.ts:12 ~ response:", response);
      Cookies.set("token", response.data.token, { expires: 7 });
      return response.data.user;
    } catch (error: any) {
      console.log("🚀 ~ file: usersSlice.ts:14 ~ error:", error);
      return rejectWithValue(error.response.data);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state) => {
        state.loading = false;
      })
  },
});

export default userSlice.reducer;
