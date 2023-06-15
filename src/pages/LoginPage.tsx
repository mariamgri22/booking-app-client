import { useNavigate } from "react-router-dom";
import LoginForm from "../components/Login/Login";
import left from "./../assets/left.svg";
import { ServicePageStyled } from "./StyledPages";

 const LoginPage = () => {
  const navigate = useNavigate();

  const handleNavigateProflle = () => {
    navigate("/profile");
  };
  return (
    <>
      <ServicePageStyled>
        <img onClick={handleNavigateProflle} src={left} alt="" />
        <h3>Login Page</h3>
      </ServicePageStyled>
      <LoginForm />
    </>
  );
};

export default LoginPage;