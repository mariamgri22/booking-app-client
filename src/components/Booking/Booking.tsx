import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { AppDispatch, RootState } from "../../store";
import { getFromLocalStorage } from "../../helpers/localStorageHelper";
import RegisterForm from "./RegisterForm";
import { useNavigate } from "react-router-dom";
import { PriceCalculator } from "./PriceCalucator";
import api from "../../token";
import { useDispatch } from "react-redux";
import { createUser } from "../../feature/usersSlice";
import { BookingContainer } from "./BookStyled";
import Cookies from "js-cookie";
import { SubmitButton } from "../Login/FormStyled";

export const Booking = () => {
  const dispatch: AppDispatch = useDispatch();
  const selectedServicesArray = getFromLocalStorage("selectedServices");

  let { currentDay, selectedDay, selectedHour } = useSelector(
    (state: RootState) => state.calendar
  );

  if (!currentDay) {
    currentDay = getFromLocalStorage("currentDay");
  }
  if (!selectedDay) {
    selectedDay = getFromLocalStorage("selectedDay");
  }
  if (!selectedHour) {
    selectedHour = getFromLocalStorage("selectedHour");
  }
  const token = Cookies.get("token");

  const [newHour, setNewHour] = useState(selectedHour);

  useEffect(() => {
    if (selectedHour && selectedServicesArray.length > 0) {
      const [hour, minute] = selectedHour.split(":");
      for (const { duration } of selectedServicesArray) {
        const durationInHours = parseInt(duration);
        const selectedDate = new Date();
        selectedDate.setHours(Number(hour), Number(minute));

        const newDate = new Date(
          selectedDate.getTime() + durationInHours * 60 * 60 * 1000
        );
        const newHour = `${newDate.getHours()}:${newDate
          .getMinutes()
          .toString()
          .padStart(2, "0")}`;
        setNewHour(newHour);
      }
    }
  }, [selectedHour, selectedServicesArray]);

  const navigate = useNavigate();

  const displayDay = selectedDay || currentDay;

  const handleBookAndRegister = async (values) => {
    try {
      await dispatch(createUser(values));

      for (const {
        id,
        description,
        price,
        duration,
      } of selectedServicesArray) {
        await api.post("/createService", {
          description,
          price,
          duration,
          hour: selectedHour,
          day: selectedDay,
        });
        navigate("/user");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleBook = async () => {
    try {
      for (const {
        id,
        description,
        price,
        duration,
      } of selectedServicesArray) {
        await api.post("/createService", {
          description,
          price,
          duration,
          hour: selectedHour,
          day: selectedDay,
        });
        navigate("/user");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <BookingContainer>
        <h4>Booking details</h4>
        <div className="hours">
          <span>{displayDay} </span>
          <span>From: {selectedHour}</span> - <span> To:{newHour}</span>
        </div>

        {selectedServicesArray.map(
          ({
            id,
            description,
            category,
            price,
            duration,
          }: {
            id: number;
            description: string;
            category: string;
            price: number;
            duration: string;
          }) => (
            <div className="desc" key={id}>
              <span>{description}</span>
              <span>{category}</span>
              <span>{price} AMD</span>
              <span>{duration} hour(s)</span>
            </div>
          )
        )}
        <PriceCalculator />
      </BookingContainer>
      <hr />
      {token ? (
        <>
          <SubmitButton onClick={handleBook}>Booking</SubmitButton>
        </>
      ) : (
        <RegisterForm handleBooking={handleBookAndRegister} />
      )}
    </>
  );
};
