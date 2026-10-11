import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
 
  const { isAuth } = useAuth();

  if (!isAuth) {
    console.log("LOGIN PLS");
   
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;