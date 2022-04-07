import React, { useState, useEffect } from "react";

import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      {/* <div class="preloader">
        <div class="d-table">
          <div class="d-table-cell">
            <div class="spinner">
              <div class="circle1"></div>
              <div class="circle2"></div>
              <div class="circle3"></div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="navbar-area">
        <div className="mobile-nav">
          <div className="">
            <NavLink to="/" className="logo">
              <img
                src="/images/nsspl images/NSS logo 1.png"
                className="logo-one"
                alt="Logo"
              />
              <img
                src="/images/nsspl images/NSS logo 1.png"
                className="logo-two"
                alt="Logo"
              />
            </NavLink>
          </div>
        </div>

        <div className="main-nav main-nav-bottom">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <div className="">
                <NavLink className="navbar-brand" to="/">
                  <img
                    src="/images/nsspl images/NSS logo 1.png"
                    className="logo-one"
                    alt="Logo"
                  />
                  <img
                    src="/images/nsspl images/NSS logo 1.png"
                    className="logo-two"
                    alt="Logo"
                  />
                </NavLink>
              </div>
              <div
                className="collapse navbar-collapse mean-menu"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav m-auto">
                  <li className="nav-item">
                    <NavLink to="/">
                      Home
                      {/* <i className="bx bx-chevron-down"></i> */}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/about-us">About Us</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/portfolio">
                      Portfolio
                      {/* <i className="bx bx-chevron-down"></i> */}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/service-details">
                      Services
                      {/* <i className="bx bx-chevron-down"></i> */}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/case-study">
                      Case Study
                      {/* <i className="bx bx-chevron-down"></i> */}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/contact-us">Contact Us</NavLink>
                  </li>
                </ul>
                <div className="nav-bar-side">
                  <div className="nav-btn">
                    <NavLink
                      to="/contact-us"
                      className="default-btn-two border-radius-5"
                    >
                      Get A Quote
                    </NavLink>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="side-nav-responsive">
          <div className="container-max">
            <div className="dot-menu">
              <div className="circle-inner">
                <div className="circle circle-one"></div>
                <div className="circle circle-two"></div>
                <div className="circle circle-three"></div>
              </div>
            </div>
            <div className="container">
              <div className="side-nav-inner">
                <div className="side-nav justify-content-center align-items-center">
                  <div className="side-nav-item">
                    <NavLink to="/contact-us" className="side-nav-btn">
                      Free quote
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
