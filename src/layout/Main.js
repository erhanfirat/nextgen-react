import Footer from "./Footer";
import Header from "./Header";
import PageBody from "./PageBody";

const Main = () => {
  return (
    <div className="layout flex flex-col min-h-screen">
      <Header />
      <PageBody />
      <Footer />
    </div>
  );
};

export default Main;
