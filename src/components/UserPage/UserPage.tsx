import { useNavigate } from "react-router-dom";
import { ServicePageStyled } from "../../pages/StyledPages";
import left from "../../assets/left.svg";
import { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import {
  setCount,
  setSelectedArrayNull,
  setSelectedNull,
} from "../../feature/servicesSlice";
import { BiLogOut } from "react-icons/bi";

const UserPage = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const handleLogout = () => {
    Cookies.remove("token");
    navigate("/");
  };

  const handleNavigateProflle = () => {
    localStorage.removeItem("selectedServices");
    dispatch(setSelectedArrayNull());
    dispatch(setSelectedNull());
    dispatch(setCount());
    navigate("/");
  };

  return (
    <>
      <ServicePageStyled>
        <img onClick={handleNavigateProflle} src={left} alt="" />
        <h3>Welcome</h3>
        <div style={{ cursor: "pointer" }} onClick={handleLogout}>
          <BiLogOut />
        </div>
      </ServicePageStyled>
      <hr />
      <span>We will be in touch soon</span>
    </>
  );
};

export default UserPage;
