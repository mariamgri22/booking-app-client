const renderCalendarDays = (
  startDate: Date,
  numWeeks: number,
  currentDay: Date,
  selectedDay: Date | null,
  handleDayClick: (date: Date) => void
): JSX.Element[] => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const weeks: JSX.Element[] = [];

  for (let week = 0; week < numWeeks; week++) {
    const days: JSX.Element[] = [];

    for (let i = 0; i < 7; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + week * 7 + i);
      const isCurrentDay =
        date.toDateString() === new Date(currentDay).toDateString();

      const isSelected =
        selectedDay &&
        date.toDateString() === new Date(selectedDay).toDateString();
      const dayClasses = `calendar-cell ${isCurrentDay ? "current-day" : ""} ${
        isSelected ? "selected" : ""
      }`;

      days.push(
        <div
          key={`day-${week}-${i}`}
          className={dayClasses}
          onClick={() => handleDayClick(date)}
        >
          <div className="calendar-date">{date.getDate()}</div>
          <div className="calendar-day">{daysOfWeek[date.getDay()]}</div>
        </div>
      );
    }

    weeks.push(
      <div key={`week-${week}`} className="calendar-week">
        {days}
      </div>
    );
  }

  return weeks;
};

export default renderCalendarDays;
