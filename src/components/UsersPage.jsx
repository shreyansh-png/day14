import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import { axiosInstance } from "../config/axiosInstance";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axiosInstance.get("/users");
        setUsers(res.data);
      } catch (err) {
        console.log("users failed", err);
      } finally {
        setLoading(false);   // the fix for the stuck loading screen
      }
    };
    getUsers();
  }, []);

  if (loading) return <h2 className="p-4 text-3xl">Loading users...</h2>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 p-4">
      {users.map((u) => (
        <UserCard key={u.id} user={u} />
      ))}
    </div>
  );
};

export default UsersPage;