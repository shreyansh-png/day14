import { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../context/MyContext.jsx";

const Navbar = () => {
 
  const { isAuth, setIsAuth } = useContext(MyContext);

  return (
    <nav className="flex gap-4 p-4 bg-gray-200">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>


      <button className="ml-auto" onClick={() => setIsAuth(!isAuth)}>

        {isAuth ? "Logout" : "Login"}
      </button>
    </nav>
  );
};

export default Navbar;