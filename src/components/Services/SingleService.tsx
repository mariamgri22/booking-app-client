import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { getFromLocalStorage } from "../../helpers/localStorageHelper";
import { SingleServiceProps } from "../../types/SingleServiceProps";

export const SingleService: React.FC<SingleServiceProps> = ({
  id,
  description,
  duration,
  price,
  isServiceSelected,
  toggleServiceSelection,
}) => {
  const selectedHour =
    useSelector((state: RootState) => state.calendar.selectedHour) ||
    getFromLocalStorage("selectedHour");

  const isServiceDisabled = () => {
    const selectedHourParts = selectedHour.split(":");
    const selectedHourNumber = parseInt(selectedHourParts[0]);
    const selectedMinuteNumber = parseInt(selectedHourParts[1]);

    const durationNumber = parseInt(duration);

    const totalMinutes = selectedHourNumber * 60 + selectedMinuteNumber;
    const durationInMinutes = durationNumber * 60;

    const endTimeInMinutes = totalMinutes + durationInMinutes;
    const endTimeHour = Math.floor(endTimeInMinutes / 60);
   

    if (endTimeHour >= 24) {
      return true;
    }

    return false;
  };

  const disableService = isServiceDisabled();

  return (
    <div
      key={id}
      className={` ${disableService ? "disabled" : ""} service-item ${
        isServiceSelected(id) ? "selected" : ""
      }`}
      onClick={() => toggleServiceSelection(id)}
    >
      <div className="service-info">
        <div>
          <div>
            <div className="service-description"> {description}</div>

            <div className="service-duration"> {duration} hour(s)</div>
          </div>
          <div className="service-price"> {price} AMD</div>
        </div>
      </div>

      <span className="service-toggle">
        <button>{isServiceSelected(id) ? "-" : "+"}</button>
      </span>
    </div>
  );
};
