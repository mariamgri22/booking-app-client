import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import en from "../public/locales/en/translation.json";
import arm from "../public/locales/arm/translation.json";

i18n.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      translation: en,
    },
    arm: {
      translation: arm,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <App />
      </Provider>
    </I18nextProvider>
  </React.StrictMode>
);
