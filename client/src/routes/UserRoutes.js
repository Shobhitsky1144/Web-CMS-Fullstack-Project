import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Home from "../components/Home";
import AboutUs from "../components/AboutUs";
import ServiceDetails from "../components/ServiceDetails";
import ContactUs from "../components/ContactUs";
import CaseStudy from "../components/CaseStudy";
import CaseStudyDetails from "../components/CaseStudyDetails";
import Portfolio from "../components/Portfolio";
import ErrorPage from "../components/ErrorPage";
import { Layout } from "../Layout/Layout";
import AdminLogin from "../components/admin panel/AdminLogin";
import AdminPortfolio from "../components/admin panel/AdminPortfolio";
import AdminCaseStudy from "../components/admin panel/AdminCaseStudy";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GoToTop from "../components/GoToTop";
import { AdminLayout } from "../Layout/AdminLayout";

function UserRoutes() {
  return (
    <>
      <ToastContainer />
      <GoToTop />

      <Routes>
        <Route path="/" element={<Layout children={<Home />} />}></Route>
        <Route
          path="/about-us"
          element={<Layout children={<AboutUs />} />}
        ></Route>
        <Route
          path="/portfolio"
          element={<Layout children={<Portfolio />} />}
        ></Route>
        <Route
          path="/case-study"
          element={<Layout children={<CaseStudy />} />}
        ></Route>
        <Route
          path="/casestudy-details"
          element={<Layout children={<CaseStudyDetails />} />}
        ></Route>
        <Route
          path="/service-details"
          element={<Layout children={<ServiceDetails />} />}
        ></Route>
        <Route
          path="/contact-us"
          element={<Layout children={<ContactUs />} />}
        ></Route>
        <Route
          path="*"
          element={<Layout children={<Layout children={<ErrorPage />} />} />}
        ></Route>
        <Route
          path="/admin-login"
          element={<AdminLayout children={<AdminLogin />} />}
        ></Route>
        <Route
          path="/admin-portfolio"
          element={<AdminLayout children={<AdminPortfolio />} />}
        ></Route>
        <Route
          path="/admin-casestudy"
          element={<AdminLayout children={<AdminCaseStudy />} />}
        ></Route>
      </Routes>
    </>
  );
}

export default UserRoutes;
