import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { axiosInstance } from "../config/axiosInstance";
import { useAuth } from "../hooks/useAuth";

const LoginPage = () => {
  // controlled inputs: React state holds what the user typed
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();   // from AuthContext
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();   // stop the browser from reloading the page
    try {
      // 2nd argument of post() is the data we send (request body)
      const res = await axiosInstance.post("/auth/login", {
        username,
        password,
      });
      login(res.data.token);   // saves token in context + localStorage
      toast.success("Logged in");
      nav("/products");
    } catch (err) {
      // wrong password: the interceptor already showed the red toast
      console.log("login failed", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-4 max-w-sm">
      <h2 className="text-2xl font-bold">Login</h2>

      <input
        className="border rounded p-2"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        className="border rounded p-2"
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="bg-black text-white rounded p-2">Login</button>

      <p className="text-sm">
        New here? <Link to="/register" className="underline">Register</Link>
      </p>
    </form>
  );
};

export default LoginPage;