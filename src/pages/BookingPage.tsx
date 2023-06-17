import { Booking } from "../components/Booking/Booking";
import { ServicePageStyled } from "./StyledPages";
import left from "./../assets/left.svg";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const BookingPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleNavigateService = () => {
    navigate("/services");
  };
  return (
    <div>
      <ServicePageStyled>
        <img onClick={handleNavigateService} src={left} alt="" />
        <h3>{t("Booking")}</h3>
      </ServicePageStyled>
      <hr />
      <Booking />
    </div>
  );
};

export default BookingPage;
