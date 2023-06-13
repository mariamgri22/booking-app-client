import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedHour } from "../../feature/calendarSlice";

import "./hours.css";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../store";

export const Hours = () => {
  const { availableHours, selectedHour } = useSelector(
    (state: RootState) => state.calendar
  );
  const navigate = useNavigate();
  const dispatch:AppDispatch = useDispatch();

  const handleHourClick = (hour: string) => {
    dispatch(setSelectedHour(hour));
  };

  const isHourSelected = (hour: string) => selectedHour === hour;

  const handleNavigateService = () => {
    navigate("/services");
  };

  return (
    <div>
      <h2 className="hours-title">Available Hours</h2>
      {availableHours.map((hours, index) => (
        <div key={index}>
          <div>
            <h3 className="time-period">Morning</h3>
            <div className="button-container">
              {hours
                .filter((hour) => {
                  const splitHour = hour.split(":")[0];
                  return splitHour >= "10" && splitHour < "12";
                })
                .map((hour, index) => (
                  <button
                    key={index}
                    className={`hour-button ${
                      isHourSelected(hour) ? "selected" : ""
                    }`}
                    onClick={() => handleHourClick(hour)}
                  >
                    {hour}
                  </button>
                ))}
            </div>
          </div>
          <div>
            <h3 className="time-period">Day</h3>
            <div className="button-container">
              {hours
                .filter((hour) => {
                  const splitHour = hour.split(":")[0];
                  return splitHour >= "12" && splitHour < "18";
                })
                .map((hour, index) => (
                  <button
                    key={index}
                    className={`hour-button ${
                      isHourSelected(hour) ? "selected" : ""
                    }`}
                    onClick={() => handleHourClick(hour)}
                  >
                    {hour}
                  </button>
                ))}
            </div>
          </div>
          <div>
            <h3 className="time-period">Evening</h3>
            <div className="button-container">
              {hours
                .filter((hour) => {
                  const splitHour = hour.split(":")[0];
                  return splitHour >= "18" && splitHour <= "23";
                })
                .map((hour, index) => (
                  <button
                    key={index}
                    className={`hour-button ${
                      isHourSelected(hour) ? "selected" : ""
                    }`}
                    onClick={() => handleHourClick(hour)}
                  >
                    {hour}
                  </button>
                ))}
            </div>
          </div>
        </div>
      ))}
      {selectedHour && (
        <div className="selected-hour">
          <p>Selected Hour: {selectedHour}</p>
          <button onClick={handleNavigateService}>Continue</button>
        </div>
      )}
    </div>
  );
};
