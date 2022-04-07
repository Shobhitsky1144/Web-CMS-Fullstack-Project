import React from "react";
import Header from "../components/admin panel/Header";
import TopBar from "../components/admin panel/TopBar";

export const AdminLayout = (prop) => {
  return (
    <>
      <Header />
      <div
        className="d-flex justify-content-center "
        style={{ marginTop: "4rem" }}
      >
        {prop.children}
      </div>
    </>
  );
};
