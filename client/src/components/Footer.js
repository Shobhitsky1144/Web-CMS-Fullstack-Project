import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const [aboutPage, setAboutPage] = useState(false);
  const [contactPage, setContactPage] = useState(false);
  const [servicesPage, setServicesPage] = useState(false);

  if (aboutPage === true) {
    window.location.href = "/about-us";
  }
  if (servicesPage === true) {
    window.location.href = "/service-details";
  }
  return (
    <div>
      <footer
        className="footer-area footer-bg pt-100 pb-70 "
        style={{ background: "#f3f3f3" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget">
                <div className="footer-logo">
                  <NavLink to="/">
                    <img
                      src="/images/nsspl images/NSS logo 1.png"
                      className="footer-logo1"
                      alt="Images"
                    />
                    <img
                      src="/images/nsspl images/NSS logo 1.png"
                      className="footer-logo2"
                      alt="Images"
                    />
                  </NavLink>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, conse tempor invidunt ut labore et
                  dolore eos et accusam et justo.
                </p>
                <ul className="social-footer-link">
                  <li>
                    <NavLink to="https://www.facebook.com/syphersystems">
                      <i className="bx bxl-facebook"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="https://www.linkedin.com/company/2676312/">
                      <i className="bx bxl-linkedin"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="https://twitter.com/NSSPLindia">
                      <i className="bx bxl-twitter"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="https://www.instagram.com/nssplind/?hl=en">
                      <i className="bx bxl-instagram"></i>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer-widget ps-2">
                <h3>Quick Links</h3>
                <ul className="footer-list">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <NavLink to="#" onClick={(e) => setServicesPage(true)}>
                      Services
                    </NavLink>
                  </li>
                  {/* <li>
                    <NavLink to="shop.html" >
                      Our shop
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="blog-details.html" >
                      Blog details
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="cart.html" >
                      Add to cart
                    </NavLink>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer-widget ps-2">
                <h3>More</h3>
                <ul className="footer-list">
                  <li>
                    <NavLink to="/contact-us">Contact us</NavLink>
                  </li>
                  <li>
                    <NavLink to="#" onClick={(e) => setAboutPage(true)}>
                      About us
                    </NavLink>
                  </li>
                  {/* <li>
                    <NavLink to="#">Privacy policy</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Terms & condition</NavLink>
                  </li> */}
                  {/* <li>
                    <NavLink to="login.html" >
                      Log in
                    </NavLink>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer-widget ps-2">
                <h3>Services</h3>
                <ul className="footer-list">
                  <li>
                    <NavLink
                      to="#"
                      onClick={(e) => setServicesPage(true)}
                      style={{ fontSize: "15px" }}
                    >
                      Mobile App Development
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="#"
                      onClick={(e) => setServicesPage(true)}
                      style={{ fontSize: "15px" }}
                    >
                      UI/UX Design
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="#"
                      onClick={(e) => setServicesPage(true)}
                      style={{ fontSize: "15px" }}
                    >
                      Web Development
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="#"
                      onClick={(e) => setServicesPage(true)}
                      style={{ fontSize: "14px" }}
                    >
                      Cross Platform Mobile App
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="#"
                      onClick={(e) => setServicesPage(true)}
                      style={{ fontSize: "14px" }}
                    >
                      E-Commerce Development
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="#"
                      onClick={(e) => setServicesPage(true)}
                      style={{ fontSize: "15px" }}
                    >
                      Digital Transformation
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="#"
                      onClick={(e) => setServicesPage(true)}
                      style={{ fontSize: "15px" }}
                    >
                      AI / ML Solution
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="#"
                      onClick={(e) => setServicesPage(true)}
                      style={{ fontSize: "15px" }}
                    >
                      AR/VR Solution
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-12">
              <div className="footer-widget ps-2">
                <h3>Company Address</h3>
                <p>
                  G4 , C Block, Naraina Vihar, New Delhi, Delhi 110028 Delhi
                  India
                </p>
                {/* <ul className="footer-gallery">
                  <li>
                    <NavLink to="/images/footer-gallery/footer-gallery1.jpg">
                      <img
                        src="/images/footer-gallery/footer-gallery1.jpg"
                        alt="image"
                      />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/images/footer-gallery/footer-gallery2.jpg">
                      <img
                        src="/images/footer-gallery/footer-gallery2.jpg"
                        alt="image"
                      />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/images/footer-gallery/footer-gallery3.jpg">
                      <img
                        src="/images/footer-gallery/footer-gallery3.jpg"
                        alt="image"
                      />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/images/footer-gallery/footer-gallery4.jpg">
                      <img
                        src="/images/footer-gallery/footer-gallery4.jpg"
                        alt="image"
                      />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/images/footer-gallery/footer-gallery5.jpg">
                      <img
                        src="/images/footer-gallery/footer-gallery5.jpg"
                        alt="image"
                      />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/images/footer-gallery/footer-gallery6.jpg">
                      <img
                        src="/images/footer-gallery/footer-gallery6.jpg"
                        alt="image"
                      />
                    </NavLink>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div
        className="copy-right-area copy-right-bg copy-right-border"
        style={{ background: "#f3f3f3" }}
      >
        <div className="container">
          <div className="copy-right-text">
            <p>
              Copyright ©{" "}
              <script>document.write(new Date().getFullYear())</script> Neo
              Sypher System PVT. LTD. All Rights Reserved
            </p>
          </div>
        </div>
      </div>

      {/* <div className="switch-box">
        <label id="switch" className="switch">
          <input type="checkbox" onchange="toggleTheme()" id="slider" />
          <span className="slider round"></span>
        </label>
      </div> */}
    </div>
  );
};

export default Footer;
