import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { apiWithoutAuth } from "../apiWithoutAuth";
import { saveToLocalStorage } from "../helpers/localStorageHelper";
import { AvailableHoursResponse } from "../types/AvailableHoursResponse";
import { CalendarState } from "../types/CalendarState";

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

const initialState: CalendarState = {
  availableHours: [],
  status: "idle",
  error: null,
  selectedHour: null,
  selectedDay: null,
  currentDay: new Date().toISOString().split("T")[0],
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    setSelectedHour: (state, action: PayloadAction<string | null>) => {
      state.selectedHour = action.payload;
      saveToLocalStorage("selectedHour", action.payload);
    },
    setSelectedDay: (state, action: PayloadAction<string>) => {
      state.selectedDay = action.payload;
      saveToLocalStorage("selectedDay", state.selectedDay);
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
        state.error = action.error.message || null;
      });
  },
});

export { fetchAvailableHours };
export const { setSelectedHour, setSelectedDay } = calendarSlice.actions;
export default calendarSlice.reducer;
