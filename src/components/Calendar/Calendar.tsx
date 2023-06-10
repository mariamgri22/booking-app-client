import React, { useEffect } from "react";
import { CalendarProps } from "../../types/CalendarProps";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchAvailableHours,
  selectCurrentedDay,
  selectError,
  selectSelectedDay,
  selectStatus,
  setSelectedDay,
} from "../../feature/calendarSlice";
import renderCalendarDays from "../../helpers/calendarHelper";
import { Hours } from "./Hours";

const Calendar: React.FC<CalendarProps> = ({ startDate, numWeeks }) => {
  const dispatch = useDispatch();

  const selectedDay = useSelector(selectSelectedDay);
  const currentDay = useSelector(selectCurrentedDay);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);

  const handleDayClick = async (date: Date) => {
    const formattedDate = date.toISOString().split("T")[0]; 
    dispatch(setSelectedDay(formattedDate)); 
    dispatch(fetchAvailableHours(formattedDate));
  };
  

  useEffect(() => {
    const formattedDate = currentDay;
    dispatch(fetchAvailableHours(formattedDate));
  }, [currentDay, dispatch]);

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

