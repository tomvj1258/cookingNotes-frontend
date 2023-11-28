import React from "react";
import Header from "../components/Header/Header";
import Router from "../routes/Router";
// import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Router />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
