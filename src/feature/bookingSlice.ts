import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { apiWithoutAuth } from "../apiWithoutAuth";
import { RootState } from "../store";
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "../helpers/localStorageHelper";

interface BookingData {
  id: number;
  description: string;
  price: number;
  duration: string;
  category: string;
}

interface BookingState {
  bookingData: BookingData[];
  loading: boolean;
  error: string | null;
}

export const fetchBookingById = createAsyncThunk(
  "booking/fetchBookingById",
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await apiWithoutAuth.get(`/service/${id}`);
      const data = response.data;
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState: BookingState = {
  bookingData: getFromLocalStorage("bookingData") || [],  //!fix me
  loading: false,
  error: null,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookingById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchBookingById.fulfilled,
        (state, action: PayloadAction<BookingData>) => {
          state.loading = false;
          const newData = action.payload;

          const existingBookingIndex = state.bookingData.findIndex(
            (booking) => booking.id === newData.id
          );

          if (existingBookingIndex !== -1) {
            state.bookingData[existingBookingIndex] = newData;
          } else {
            state.bookingData.push(newData);
          }

          saveToLocalStorage("bookingData", state.bookingData);
        }
      )
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
