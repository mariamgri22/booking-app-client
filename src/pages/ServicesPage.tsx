import { useNavigate } from "react-router-dom";
import { Services } from "../components/Services/Services";
import left from "./../assets/left.svg";
import { ServicePageStyled } from "./StyledPages";
import { AppDispatch } from "../store";
import { useDispatch } from "react-redux";
import { setCount, setSelectedArrayNull, setSelectedNull } from "../feature/servicesSlice";

 const ServicesPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

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
        <h3 className="services-title">Services</h3>
      </ServicePageStyled>

      <div>
        <Services />
      </div>
    </div>
  );
};

export default ServicesPage;
