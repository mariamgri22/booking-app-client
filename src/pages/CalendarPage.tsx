import Calendar from "../components/Calendar/Calendar";
import user from "./../assets/user.svg";
import React from "react";
import { CalendarConatiner } from "./StyledPages";
import { useNavigate } from "react-router-dom";

const CalendarPage: React.FC = () => {
  const startDate = new Date();
  const numWeeks = 5;
  const navigate = useNavigate();

  const handleNavigateProfile = () => {
    navigate("/profile");
  };
  return (
    <div className="calendar-container">
      <CalendarConatiner>
        <h1>Booking app</h1>
        <img onClick={handleNavigateProfile} src={user} alt="" />
      </CalendarConatiner>
      <hr />
      <div>
        <Calendar startDate={startDate} numWeeks={numWeeks} />
      </div>
    </div>
  );
};

export default CalendarPage;
