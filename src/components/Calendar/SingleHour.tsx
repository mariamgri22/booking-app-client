export const SingleHour = ({isHourSelected,hour,index,handleHourClick}) => {
  return (
    <>
      <button
        key={index}
        className={`hour-button ${isHourSelected(hour) ? "selected" : ""}`}
        onClick={() => handleHourClick(hour)}
      >
        {hour}
      </button>
    </>
  );
};
