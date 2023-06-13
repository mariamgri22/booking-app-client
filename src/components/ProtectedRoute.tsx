import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import { Outlet } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const token = Cookies.get("token");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!token) {
      navigate("/login", { replace: true });
    } else {
      navigate("/user", { replace: true });
    }
  }, [navigate, token, location.pathname]);

  return (
    <div>
      <Outlet />
      {children}
    </div>
  );
};

export default ProtectedRoute;
