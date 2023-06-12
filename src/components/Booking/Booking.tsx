import { useSelector } from "react-redux";

import { RootState } from "../../store";
import { nanoid } from "@reduxjs/toolkit";
import { getFromLocalStorage } from "../../helpers/localStorageHelper";
import RegisterForm from "./RegisterForm";
import { useNavigate } from "react-router-dom";
import { PriceCalculator } from "./PriceCalucator";
import api from "../../token";

export const Booking = () => {
  const { selectedServicesArray } =
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

  const navigate = useNavigate();

  const handleClickNavigate = () => {
    navigate("/services");
  };

  const displayDay = selectedDay || currentDay;

  const handleClickBook = async ({description, price, duration}) => {
    try {
      const response = await api.post("/createService", {
        description: description,
        price: price,
        duration: duration,
        day: selectedDay,
      });

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
// I am here 
  return (
    <div>
      <button onClick={handleClickNavigate}>arrow</button>
      <span>{displayDay}</span>
      <span>{selectedHour}</span>
      {selectedServicesArray.map(
        ({ description, category, price, duration }) => (
          <>
            <div key={nanoid()}>
              <span> {description} </span>
              <span>{category} </span>
              <span>{price} AMD </span>
              <span>{duration} hour (s)</span>
            </div>
            <button key={nanoid()}
              onClick={() =>
                handleClickBook({
                  description,
                  price,
                  duration,
                  day: selectedDay,
                })
              }
            >
              Book
            </button>
          </>
        )
      )}
      <PriceCalculator />
      <RegisterForm />
    </div>
  );
};
