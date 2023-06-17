import React, { useState } from "react";
import { ProfilePageStyled } from "./StyledPages";
import left from "./../assets/left.svg";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ProfilePage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate("/");
  };

  const handleToggle = () => {
    navigate("/login");
  };

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const language = event.target.value;
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
  };

  return (
    <ProfilePageStyled>
      <div>
        <div>
          <img onClick={handleNavigateHome} src={left} alt="" />
          <h3>{t("PersonalAccount")}</h3>
        </div>
        <select value={selectedLanguage} onChange={handleLanguageChange}>
          <option value="">{t("SelectLanguage")}</option>
          <option value="en">{t("English")}</option>
          <option value="arm">{t("Armenian")}</option>
        </select>
        <button onClick={handleToggle}>{t("Login")}</button>
      </div>
      <div>
        <button onClick={handleNavigateHome}>{t("NewBook")}</button>
      </div>
    </ProfilePageStyled>
  );
};

export default ProfilePage;

