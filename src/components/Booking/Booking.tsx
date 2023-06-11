import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchBookingById,
  selectBookingData,
  selectBookingLoading,
} from "../../feature/bookingSlice";
import { RootState } from "../../store";
import { nanoid } from "@reduxjs/toolkit";
import { getFromLocalStorage } from "../../helpers/localStorageHelper";
import RegisterForm from "./RegisterForm";

export const Booking = () => {
  const { selectedServices } =
    useSelector((state: RootState) => state.services) ||
    getFromLocalStorage("selectedServices");
  const currentDay =
    useSelector((state: RootState) => state.calendar.currentDay) ||
    getFromLocalStorage("currentDay");

  const selectedDay =
    useSelector((state: RootState) => state.calendar.selectedDay) ||
    getFromLocalStorage("selectedDay");
  const selectedHour =
    useSelector((state: RootState) => state.calendar.selectedHour) ||
    getFromLocalStorage("selectedHour");

  const dispatch = useDispatch();
  const bookingData = useSelector(selectBookingData);

  const loading = useSelector(selectBookingLoading);

  useEffect(() => {
    selectedServices.forEach((serviceId) => {
      if (!bookingData.find((data) => data.id === serviceId)) {   //!fix me
        dispatch(fetchBookingById(serviceId));
      }
    });
  }, [dispatch, selectedServices, bookingData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  //TODO update local storage booking data

  const displayDay = selectedDay || currentDay;
  return (
    <div>
      <span>{displayDay}</span>
      <span>{selectedHour}</span>
      {bookingData.map(({ description, category, price, duration }) => (
        <div key={nanoid()}>
          <span> {description} </span>
          <span>{category} </span>
          <span>{price} AMD </span>
          <span>{duration} hour (s)</span>
        </div>
      ))}
      <RegisterForm/>
    </div>
  );
};
