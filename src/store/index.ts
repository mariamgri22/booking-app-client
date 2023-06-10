import { configureStore } from "@reduxjs/toolkit";
import calendarReducer from "../feature/calendarSlice";
import servicesSlice from "../feature/servicesSlice";
import authReducer from "../feature/authSlice";
import bookingReducer from "../feature/bookingSlice";

const store = configureStore({
  reducer: {
    calendar: calendarReducer,
    services: servicesSlice,
    auth: authReducer,
    booking: bookingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
