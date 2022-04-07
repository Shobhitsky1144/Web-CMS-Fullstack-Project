import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export const Layout = (prop) => {
  return (
    <>
      <Nav />
      {prop.children}
      <Footer />
    </>
  );
};
