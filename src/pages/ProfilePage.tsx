import React, { useState, ChangeEvent } from "react";
import { ProfilePageStyled } from "./StyledPages";
import left from "./../assets/left.svg";
import { useNavigate } from "react-router-dom";

const ProfilePage: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(event.target.value);
  };

  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate("/");
  };

  return (
    <ProfilePageStyled>
      <div>
        <div>
          <img onClick={handleNavigateHome} src={left} alt="" />
          <h3>Personal account</h3>
        </div>
        <select value={selectedLanguage} onChange={handleLanguageChange}>
          <option value="">Select Language</option>
          <option value="en">English</option>
          <option value="arm">Armenian</option>
          <option value="ru">Russian</option>
        </select>
        <button>Login</button>
      </div>
      <div>
        <button>New Book</button>
      </div>
    </ProfilePageStyled>
  );
};

export default ProfilePage;
