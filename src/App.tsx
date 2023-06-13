import "./App.css";

import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import CalendarPage from "./pages/CalendarPage";
import { ServicesPage } from "./pages/ServicesPage";
import { BookingPage } from "./pages/BookingPage";
import { LoginPage } from "./pages/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserPage } from "./components/UserPage/UserPage";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CalendarPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/booking" element={<BookingPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route
            element={
              <ProtectedRoute >
                 <UserPage/>
              </ProtectedRoute>
            }
            path="/user"
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
