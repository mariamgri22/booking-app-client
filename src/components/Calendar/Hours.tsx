import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { setSelectedHour } from "../../feature/calendarSlice";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { HourWrapper } from "./CalendarStyled";
import { SingleHour } from "./SingleHour";
import up from "../../assets/up.svg";
import down from "../../assets/down.svg";

export const Hours = () => {
  const [showMorningHours, setShowMorningHours] = useState(true);
  const [showDayHours, setShowDayHours] = useState(true);
  const [showEveningHours, setShowEveningHours] = useState(true);

  const { availableHours, selectedHour } = useSelector(
    (state: RootState) => state.calendar
  );
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const handleHourClick = (hour: string) => {
    dispatch(setSelectedHour(hour));
  };

  const isHourSelected = (hour: string) => selectedHour === hour;

  const handleNavigateService = () => {
    navigate("/services");
  };

  return (
    <HourWrapper>
      {availableHours.map((hours, index) => (
        <div key={index}>
          <div>
            <div onClick={() => setShowMorningHours(!showMorningHours)}>
              <h3 className="time-period">Morning</h3>
            </div>

            {showMorningHours && (
              <div className="button-container">
                {hours
                  .filter((hour) => {
                    const splitHour = hour.split(":")[0];
                    return splitHour >= "10" && splitHour < "12";
                  })
                  .map((hour, index) => (
                    <SingleHour
                      hour={hour}
                      index={index}
                      handleHourClick={handleHourClick}
                      isHourSelected={isHourSelected}
                    />
                  ))}
              </div>
            )}
          </div>
          <div>
            <h3
              className="time-period"
              onClick={() => setShowDayHours(!showDayHours)}
            >
              Day
            </h3>
            {showDayHours && (
              <div className="button-container">
                {hours
                  .filter((hour) => {
                    const splitHour = hour.split(":")[0];
                    return splitHour >= "12" && splitHour < "18";
                  })
                  .map((hour, index) => (
                    <SingleHour
                      hour={hour}
                      index={index}
                      handleHourClick={handleHourClick}
                      isHourSelected={isHourSelected}
                    />
                  ))}
              </div>
            )}
          </div>
          <div>
            <h3
              className="time-period"
              onClick={() => setShowEveningHours(!showEveningHours)}
            >
              Evening
            </h3>
            {showEveningHours && (
              <div className="button-container">
                {hours
                  .filter((hour) => {
                    const splitHour = hour.split(":")[0];
                    return splitHour >= "18" && splitHour <= "23";
                  })
                  .map((hour, index) => (
                    <SingleHour
                      hour={hour}
                      index={index}
                      handleHourClick={handleHourClick}
                      isHourSelected={isHourSelected}
                    />
                  ))}
              </div>
            )}
          </div>
        </div>
      ))}
      {selectedHour && (
        <div className="selected-hour">
          <button onClick={handleNavigateService}>Continue</button>
        </div>
      )}
    </HourWrapper>
  );
};
