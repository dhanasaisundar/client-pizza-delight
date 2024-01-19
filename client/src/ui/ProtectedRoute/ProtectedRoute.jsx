import { useNavigate } from "react-router-dom";
import Cookie from "js-cookie";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const token = Cookie.get("jwt_token");
  useEffect(
    function () {
      if (token === undefined) {
        navigate("/login");
      }
    },
    [token, navigate]
  );

  return children;
}

export default ProtectedRoute;
