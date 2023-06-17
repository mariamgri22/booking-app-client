import { useNavigate } from "react-router-dom";
import { Services } from "../components/Services/Services";
import left from "./../assets/left.svg";
import { ServicePageStyled } from "./StyledPages";
import { AppDispatch } from "../store";
import { useDispatch } from "react-redux";
import { setCount, setSelectedArrayNull, setSelectedNull } from "../feature/servicesSlice";
import { useTranslation } from "react-i18next";


 const ServicesPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleNavigateHome = () => {
    localStorage.removeItem("selectedServices");
    dispatch(setSelectedArrayNull());
    dispatch(setSelectedNull())
    dispatch(setCount());
    navigate("/");
  };
  return (
    <div>
      <ServicePageStyled>
        <img onClick={handleNavigateHome} src={left} alt="" />
        <h3 className="services-title">{t("Services")}</h3>
      </ServicePageStyled>

      <div>
        <Services />
      </div>
    </div>
  );
};

export default ServicesPage;
