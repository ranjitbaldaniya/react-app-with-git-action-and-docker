import React, { createContext, useContext, useState } from "react";

export const UserContext = createContext();

const LoginContext = ({ children }) => {
  const [user, setUser] = useState({ name: "ranjit" });

  return (
    <>
      <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
    </>
  );
};

export default LoginContext;
