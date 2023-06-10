import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiWithoutAuth } from "../apiWithoutAuth"; 
import { RootState } from "../store";


export const fetchBookingById = createAsyncThunk(
  "booking/fetchBookingById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await apiWithoutAuth.get(`/service/${id}`);
      const data = response.data;
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    bookingData: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookingById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBookingById.fulfilled, (state, action) => {
        state.loading = false;
        state.bookingData.push(action.payload);
      })
      .addCase(fetchBookingById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const selectBookingData = (state: RootState) =>
  state.booking.bookingData;
export const selectBookingLoading = (state: RootState) => state.booking.loading;
export const selectBookingError = (state: RootState) => state.booking.error;

export default bookingSlice.reducer;
