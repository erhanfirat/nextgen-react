import { useContext, useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import PageBody from "./PageBody";
import { myContext } from "../App";

const Main = () => {
  const { userName, setUserName, PI } = useContext(myContext);

  // const [userName, setUserName] = useState("");

  const changeUserName = (newName) => {
    console.log("changeUserName >>> ", newName);
    setUserName(newName);
  };

  useEffect(() => {
    console.log("MAIN userName >>> ", userName);
  }, [userName]);

  return (
    <div className="layout">
      <myContext.Consumer>
        {(userName) => <Header userName={userName} />}
        <PageBody />
        <Footer />
      </myContext.Consumer>
    </div>
  );
};

export default Main;

export const Title = ({ children }) => {
  return <h1 className="page-title">
      {children}
    </h1>;
};
