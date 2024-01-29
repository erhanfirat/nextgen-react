import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <UserContext.Provider value={{ userName, setUserName, email, setEmail }}>
      {children}
    </UserContext.Provider>
  );
};
