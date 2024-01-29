import Main from "./layout/Main";
import "react-toastify/dist/ReactToastify.css";

import { createContext, useReducer } from "react";

export const myContext = createContext();

import { UserContextProvider } from "./context/userContextProvider";

function App() {
  return (
    <UserContextProvider>
      <Main />;
    </UserContextProvider>
  );
}

export default App;

// Linting - ESLint - EcmaScript Lint
