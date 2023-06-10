import Calendar from "../components/Calendar/Calendar";

import React from "react";

const CalendarPage: React.FC = () => {
  const startDate = new Date(); 
  const numWeeks = 5; 
 
  return (
    <div className="calendar-container">
      <h1>Calendar</h1>
      <div>
        <Calendar startDate={startDate} numWeeks={numWeeks} />
      </div>
    </div>
  );
};

export default CalendarPage;