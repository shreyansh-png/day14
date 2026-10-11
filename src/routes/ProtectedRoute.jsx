import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { MyContext } from "../context/MyContext";


const ProtectedRoute = ({ children }) => {
  const { isAuth } = useContext(MyContext);

 
if (!isAuth) {
  console.log("LOGIN PLS");            
  return <Navigate to="/" replace />;
}
  return children; 
};

export default ProtectedRoute;