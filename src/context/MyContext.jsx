import { createContext, useState, useEffect } from "react";

export const MyContext = createContext();

const MyProvider = ({ children }) => {
  // READ: on startup, check localStorage for a saved value.
  // localStorage only stores strings, so we compare with "true"
  const [isAuth, setIsAuth] = useState(
    () => localStorage.getItem("auth") === "true"
  );

  // SAVE: runs every time isAuth changes
  useEffect(() => {
    localStorage.setItem("auth", isAuth);
  }, [isAuth]);

  return (
    <MyContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;