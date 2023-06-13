import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { getFromLocalStorage } from "../../helpers/localStorageHelper";
import "./services.css"

interface SingleServiceProps {
  id: number;
  description: string;
  duration: string;
  price: number;
  isServiceSelected: (id: number) => boolean;
  toggleServiceSelection: (id: number) => void;
}

export const SingleService: React.FC<SingleServiceProps> = ({
  id,
  description,
  duration,
  price,
  isServiceSelected,
  toggleServiceSelection,
}) => {
  const { selectedHour } =
    useSelector((state: RootState) => state.calendar) ||
    getFromLocalStorage("selectedHour");

  // Inside the `SingleService` component
  const isServiceDisabled = () => {
    const selectedHourParts = selectedHour.split(":");
    const selectedHourNumber = parseInt(selectedHourParts[0]);
    const selectedMinuteNumber = parseInt(selectedHourParts[1]);

    const durationNumber = parseInt(duration);

    const totalMinutes = selectedHourNumber * 60 + selectedMinuteNumber;
    const durationInMinutes = durationNumber * 60;

    const endTimeInMinutes = totalMinutes + durationInMinutes;
    const endTimeHour = Math.floor(endTimeInMinutes / 60);
    console.log(
      "🚀 ~ file: SingleService.tsx:40 ~ isServiceDisabled ~ endTimeHour:",
      endTimeHour
    );
    const endTimeMinute = endTimeInMinutes % 60;

    // Check if the service extends beyond midnight (24:00)
    if (endTimeHour >= 24) {
      return true;
    }

    return false;
  };

  // Inside the rendering of `SingleService` component
  const disableService = isServiceDisabled();

  return (
    <div
      key={id}
      //   className={`service-item ${isServiceSelected(id) ? "selected" : ""}`}
      className={` ${disableService ? "disabled" : ""} service-item ${
        isServiceSelected(id) ? "selected" : ""
      }`}
      onClick={() => toggleServiceSelection(id)}
    >
      <div className="service-info">
        <div className="service-description">Description: {description}</div>
        <div className="service-duration">Duration: {duration} hour(s)</div>
        <div className="service-price">Price: ${price}</div>
      </div>
      <button className="service-toggle">
        {isServiceSelected(id) ? "-" : "+"}
      </button>
    </div>
  );
};
