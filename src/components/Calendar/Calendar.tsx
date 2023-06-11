import React, { useEffect } from "react";
import { CalendarProps } from "../../types/CalendarProps";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchAvailableHours,
  setSelectedDay,
  setSelectedHour,
} from "../../feature/calendarSlice";
import renderCalendarDays from "../../helpers/calendarHelper";
import { Hours } from "./Hours";
import { RootState } from "../../store";

const Calendar: React.FC<CalendarProps> = ({ startDate, numWeeks }) => {
  const dispatch = useDispatch();

  const {selectedDay,currentDay, status, error} = useSelector((state: RootState) =>state.calendar);


  const handleDayClick = async (date: Date) => {
    const formattedDate = date.toISOString().split("T")[0];
    dispatch(setSelectedDay(formattedDate));
    dispatch(fetchAvailableHours(formattedDate));
    dispatch(setSelectedHour(null));
  };

  useEffect(() => {
    const formattedDate = currentDay;
    dispatch(fetchAvailableHours(formattedDate));
    dispatch(setSelectedHour(null));
  }, [currentDay, dispatch]);

  useEffect(() => {
    localStorage.setItem("currentDay", currentDay);
  }, [currentDay]);

  return (
    <>
      <div className="calendar-container">
        <div className="calendar-scroll">
          <div className="calendar">
            <div className="calendar-grid">
              {" "}
              {renderCalendarDays(
                startDate,
                numWeeks,
                currentDay,
                selectedDay,
                handleDayClick
              )}
            </div>
          </div>
        </div>
        <div className="hours-container">
          {status === "loading" && <div>Loading...</div>}
          {status === "failed" && <div>Error: {error}</div>}
          {status === "succeeded" && <Hours />}
        </div>
      </div>
    </>
  );
};

export default Calendar;
