import "./App.css";
import { lazy, Suspense } from "react";
import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

const CalendarPage = lazy(() => import("./pages/CalendarPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const BookingPage = lazy(() => import("./pages/BookingPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const UserPage = lazy(() => import("./components/UserPage/UserPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const Error404 = lazy(() => import("./pages/Error"));

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<span className="loader"></span>}>
          <Routes>
            <Route path="/" element={<CalendarPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              element={
                <ProtectedRoute>
                  <UserPage />
                </ProtectedRoute>
              }
              path="/user"
            />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
