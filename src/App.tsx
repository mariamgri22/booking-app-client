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
        <Routes>
          <Route
            path="/"
            element={
              <Suspense
                fallback={
                 <div className="centre">
                    <span className="loader"></span>
                  </div>
                }
              >
                <CalendarPage />
              </Suspense>
            }
          />
          <Route
            path="/services"
            element={
              <Suspense
                fallback={
                 <div className="centre">
                    <span className="loader"></span>
                  </div>
                }
              >
                <ServicesPage />
              </Suspense>
            }
          />
          <Route
            path="/booking"
            element={
              <Suspense
                fallback={
                 <div className="centre">
                    <span className="loader"></span>
                  </div>
                }
              >
                <BookingPage />
              </Suspense>
            }
          />
          <Route
            path="/profile"
            element={
              <Suspense
                fallback={
                 <div className="centre">
                    <span className="loader"></span>
                  </div>
                }
              >
                <ProfilePage />
              </Suspense>
            }
          />
          <Route
            path="/login"
            element={
              <Suspense
                fallback={
                 <div className="centre">
                    <span className="loader"></span>
                  </div>
                }
              >
                <LoginPage />
              </Suspense>
            }
          />
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
      </BrowserRouter>
    </div>
  );
};

export default App;
