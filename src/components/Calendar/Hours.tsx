import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { setSelectedHour } from "../../feature/calendarSlice";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { HourWrapper } from "./CalendarStyled";
import SingleHour from "./SingleHour";
import { useTranslation } from "react-i18next";

export const Hours = () => {
  const [showMorningHours, setShowMorningHours] = useState(true);
  const [showDayHours, setShowDayHours] = useState(true);
  const [showEveningHours, setShowEveningHours] = useState(true);
  const { t } = useTranslation();

  const { availableHours, selectedHour, currentDay } = useSelector(
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

  const currentTime = new Date();

  return (
    <HourWrapper>
      {availableHours.map((hours, index) => (
        <div key={index}>
          <div>
            <div onClick={() => setShowMorningHours(!showMorningHours)}>
              <h3 className="time-period">{t("Morning")}</h3>
            </div>

            {showMorningHours && (
              <div className="button-container">
                {hours
                  .filter((hour) => {
                    const hourDateTime = new Date(`${currentDay}T${hour}`);
                    return (
                      hourDateTime.getHours() >= 10 &&
                      hourDateTime.getHours() < 12 &&
                      hourDateTime > currentTime
                    );
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
              {t("Day")}
            </h3>
            {showDayHours && (
              <div className="button-container">
                {hours
                  .filter((hour) => {
                    const hourDateTime = new Date(`${currentDay}T${hour}`);
                    return (
                      hourDateTime.getHours() >= 12 &&
                      hourDateTime.getHours() < 18 &&
                      hourDateTime > currentTime
                    );
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
              {t("Evening")}
            </h3>
            {showEveningHours && (
              <div className="button-container">
                {hours
                  .filter((hour) => {
                    const hourDateTime = new Date(`${currentDay}T${hour}`);
                    return (
                      hourDateTime.getHours() >= 18 &&
                      hourDateTime.getHours() <= 23 &&
                      hourDateTime > currentTime
                    );
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
          <button onClick={handleNavigateService}>{t("Continue")}</button>
        </div>
      )}
    </HourWrapper>
  );
};
