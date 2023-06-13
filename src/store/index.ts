import { configureStore } from "@reduxjs/toolkit";
import calendarReducer from "../feature/calendarSlice";
import servicesSlice from "../feature/servicesSlice";
import usersSlice from "../feature/usersSlice";

const store = configureStore({
  reducer: {
    calendar: calendarReducer,
    services: servicesSlice,
    user: usersSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
