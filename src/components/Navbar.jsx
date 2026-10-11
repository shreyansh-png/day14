import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Navbar = () => {

  const { isAuth, logout } = useAuth();

  return (
    <nav className="flex gap-4 p-4 bg-gray-200">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>
      <Link to="/users">Users</Link>

      
      {isAuth ? (
        <button className="ml-auto" onClick={logout}>Logout</button>
      ) : (
        <Link className="ml-auto" to="/login">Login</Link>
      )}
    </nav>
  );
};

export default Navbar;