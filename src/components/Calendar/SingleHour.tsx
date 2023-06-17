import React from "react";

interface SingleHourProps {
  isHourSelected: (hour: string) => boolean;
  hour: string;
  index: number;
  handleHourClick: (hour: string) => void;
}

const SingleHour: React.FC<SingleHourProps> = ({
  isHourSelected,
  hour,
  index,
  handleHourClick,
}) => {
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

export default SingleHour;
