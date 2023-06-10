import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./../store";

import { apiWithoutAuth } from "../apiWithoutAuth";

interface AvailableHoursResponse {
  availableHours: string[][];
}

const fetchAvailableHours = createAsyncThunk(
  "calendar/fetchAvailableHours",
  async (formattedDate: string) => {
    const response = await apiWithoutAuth.get<AvailableHoursResponse>(
      `/available-hours/${formattedDate}`
    );
    console.log(response.data.availableHours);

    return response.data.availableHours;
  }
);

interface CalendarState {
  availableHours: string[][];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  selectedHour: string | null;
  selectedDay: string | null;
  currentDay: string;
}

const initialState: CalendarState = {
  availableHours: [],
  status: "idle",
  error: null,
  selectedHour: null,
  selectedDay:  null,
  currentDay: new Date().toISOString().split("T")[0],
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    setSelectedHour: (state, action: PayloadAction<string | null>) => {
      state.selectedHour = action.payload;
    },
    setSelectedDay: (state, action: PayloadAction<Date>) => {
      state.selectedDay = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAvailableHours.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAvailableHours.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.availableHours = action.payload;
      })
      .addCase(fetchAvailableHours.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAvailableHours = (state: RootState) =>
  state.calendar.availableHours;
export const selectStatus = (state: RootState) => state.calendar.status;
export const selectError = (state: RootState) => state.calendar.error;
export const selectSelectedDay = (state: RootState) =>
  state.calendar.selectedDay;
export const selectCurrentedDay = (state: RootState) =>
  state.calendar.currentDay;

export const selectSelectedHour = (state: RootState) =>
  state.calendar.selectedHour;

export { fetchAvailableHours };
export const { setSelectedHour, setSelectedDay } = calendarSlice.actions;
export default calendarSlice.reducer;
