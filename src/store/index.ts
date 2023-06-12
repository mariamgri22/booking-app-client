import { configureStore } from "@reduxjs/toolkit";
import calendarReducer from "../feature/calendarSlice";
import servicesSlice from "../feature/servicesSlice";

const store = configureStore({
  reducer: {
    calendar: calendarReducer,
    services: servicesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
