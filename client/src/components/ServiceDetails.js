import React, { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import Axios from "axios";
import { API_BASE_URL } from "../constants/ApiBaseUrl";
import { toast } from "react-toastify";

const ServiceDetails = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState(null);
  const [subject, setSubject] = useState(null);

  const validateForm = (e) => {
    e.preventDefault();
    if (!email || !fullName || !mobile) {
      toast.error("please fill the fields");
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      toast.error("invalid email");
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    try {
      const res = await Axios.post(`${API_BASE_URL}/sendMail`, {
        email,
        fullName,
        mobile,
        message,
        subject,
      });
      console.log("home form", res.data.message);
      setEmail("");
      setFullName("");
      setMobile("");
      setMessage("");
      setSubject("");
      if (res.status === 422) {
        toast.error("Form submit failed");
      } else {
        toast.success(res.data.message);
      }
      //  setGetData(res.data);
    } catch (error) {
      toast.error(error);
    }
    // }
  };
  return (
    <div>
      <div className="banner-area-two mb-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="banner-img-two "
                style={{ paddingTop: "4rem" }}
                // style={{ width: "550px", height: "548px" }}
              >
                {/* <img src="/images/home-three.png" alt="Images" /> */}
                <img
                  src="/images/about/about-img4.png"
                  alt="Images"
                  //   style={{ height: "100%" }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-content-two">
                {/* <span>INTRODUCTION TO US</span> */}
                <h1 style={{ fontSize: "47px" }}>
                  Web & Mobile Application Development Services
                </h1>
                <p>
                  NSSPL offers on-demand application development services to a
                  wide array of industry verticals catering to all kinds of
                  start-ups and mid-large scale businesses. Be it a simple
                  portal or a complex business solution, we are there to help
                  you with all of your development business needs for web &
                  mobile platforms.
                </p>
                <NavLink
                  to="/contact-us"
                  className="default-btn-two border-radius-5 "
                >
                  Get an Estimate
                </NavLink>
                <NavLink
                  to="/portfolio"
                  className="default-btn-two border-radius-5 "
                  style={{ marginLeft: "14px" }}
                >
                  View our portfolio
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="shape-circle">
          <img src="/images/shape/shape-circle.png" alt="" />
        </div> */}
      </div>
      {/* form */}
      <div className="newsletter-area-section">
        <div className="container">
          <div
            className="container newsletter-area-bg pt-4"
            style={{ background: "#f3f3f3" }}
          >
            <div className="section-title text-center">
              <span className="sp-color2">NEWSLETTER</span>
              <h2>Talk with Experts</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod antatempor invidunt.
              </p>
            </div>
            <div className="newsletter-area">
              <form
                className="newsletter-form"
                data-toggle="validator"
                method="POST"
              >
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your Name"
                  name="fullname"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  autocomplete="off"
                  style={{ borderRadius: "5px" }}
                />
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your Email"
                  name="EMAIL"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autocomplete="off"
                  style={{ borderRadius: "5px" }}
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your Mobile No"
                  name="phone"
                  required
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  autocomplete="off"
                  style={{ borderRadius: "5px" }}
                />
                <button
                  className="subscribe-btn "
                  type="submit"
                  onClick={validateForm}
                  style={{ borderRadius: "5px" }}
                >
                  Submit
                </button>
                <div id="validator-newsletter" className="form-result"></div>
              </form>
            </div>
            {/* <div className="newsletter-line">
              <div className="line1"></div>
              <div className="line2"></div>
           </div> */}
          </div>
        </div>
      </div>
      {/* service */}

      <div class="choose-area-two pt-100">
        <div class="container">
          <div class="section-title text-center">
            <span className="sp-color2">OUR SERVICES</span>
            <h2 style={{ fontSize: "37px" }}>
              Provide you all kinds of services of information technology
            </h2>
          </div>
          <div class="row pt-45">
            <div class="col-lg-3 col-md-6">
              <div class="choose-item" style={{ background: "#f3f3f3" }}>
                <div
                  className="nsspl-service-icon"
                  style={{
                    height: "100px",
                    width: "100px",
                    padding: "13px",
                    color: "#1abc9c",
                    borderRadius: "50%",
                    background: "#ffffff",
                  }}
                >
                  <img
                    src="/images/nsspl images/OUR SERVICES ICON/Mobile App Development.png"
                    alt=""
                  />
                </div>

                <h3 style={{ fontSize: "18px" }}>Mobile App Development</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  mattis aliquam augue.
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="choose-item" style={{ background: "#f3f3f3" }}>
                <div
                  className="nsspl-service-icon"
                  style={{
                    height: "100px",
                    width: "100px",
                    padding: "20px",
                    color: "#1abc9c",
                    borderRadius: "50%",
                    background: "#ffffff",
                  }}
                >
                  <img
                    src="/images/nsspl images/OUR SERVICES ICON/UI & UX DESIGN.png"
                    alt=""
                  />
                </div>
                <h3 style={{ fontSize: "18px" }}>UI/UX Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  mattis aliquam augue.
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 offset-lg-0 offset-md-3">
              <div class="choose-item" style={{ background: "#f3f3f3" }}>
                <div
                  className="nsspl-service-icon"
                  style={{
                    height: "100px",
                    width: "100px",
                    padding: "20px",
                    color: "#1abc9c",
                    borderRadius: "50%",
                    background: "#ffffff",
                  }}
                >
                  <img
                    src="/images/nsspl images/OUR SERVICES ICON/Web App Development.png"
                    alt=""
                  />
                </div>
                <h3 style={{ fontSize: "18px" }}>Web Development</h3>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  mattis aliquam augue.
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 offset-lg-0 offset-md-3">
              <div class="choose-item" style={{ background: "#f3f3f3" }}>
                <div
                  className="nsspl-service-icon"
                  style={{
                    height: "100px",
                    width: "100px",
                    padding: "20px",
                    color: "#1abc9c",
                    borderRadius: "50%",
                    background: "#ffffff",
                  }}
                >
                  <img
                    src="/images/nsspl images/OUR SERVICES ICON/Cross platform mobile app.png"
                    alt=""
                  />
                </div>
                <h3 style={{ fontSize: "16px" }}>Cross Platform Mobile App</h3>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  mattis aliquam augue.
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 offset-lg-0 offset-md-3">
              <div class="choose-item" style={{ background: "#f3f3f3" }}>
                <div
                  className="nsspl-service-icon"
                  style={{
                    height: "100px",
                    width: "100px",
                    padding: "20px",
                    color: "#1abc9c",
                    borderRadius: "50%",
                    background: "#ffffff",
                  }}
                >
                  <img
                    src="/images/nsspl images/OUR SERVICES ICON/E commerce platform.png"
                    alt=""
                  />
                </div>
                <h3 style={{ fontSize: "16px" }}>E-Commerce Development</h3>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  mattis aliquam augue.
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 offset-lg-0 offset-md-3">
              <div class="choose-item" style={{ background: "#f3f3f3" }}>
                <div
                  className="nsspl-service-icon"
                  style={{
                    height: "100px",
                    width: "100px",
                    padding: "20px",
                    color: "#1abc9c",
                    borderRadius: "50%",
                    background: "#ffffff",
                  }}
                >
                  <img
                    src="/images/nsspl images/OUR SERVICES ICON/Digital transformation.png"
                    alt=""
                  />
                </div>
                <h3 style={{ fontSize: "18px" }}>Digital Transformation</h3>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  mattis aliquam augue.
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 offset-lg-0 offset-md-3">
              <div class="choose-item" style={{ background: "#f3f3f3" }}>
                <div
                  className="nsspl-service-icon"
                  style={{
                    height: "100px",
                    width: "100px",
                    padding: "20px",
                    color: "#1abc9c",
                    borderRadius: "50%",
                    background: "#ffffff",
                  }}
                >
                  <img
                    src="/images/nsspl images/OUR SERVICES ICON/AI-ML Solution.png"
                    alt=""
                  />
                </div>
                <h3 style={{ fontSize: "18px" }}>AI / ML Solution</h3>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  mattis aliquam augue.
                </p>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 offset-lg-0 offset-md-3">
              <div class="choose-item" style={{ background: "#f3f3f3" }}>
                <div
                  className="nsspl-service-icon"
                  style={{
                    height: "100px",
                    width: "100px",
                    padding: "20px",
                    color: "#1abc9c",
                    borderRadius: "50%",
                    background: "#ffffff",
                  }}
                >
                  <img
                    src="/images/nsspl images/OUR SERVICES ICON/Web App Development.png"
                    alt=""
                  />
                </div>
                <h3 style={{ fontSize: "18px" }}>AR/VR Solution</h3>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  mattis aliquam augue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* way of work */}

      <div
        className="work-area pt-100 pb-70 "
        style={{ background: "#f3f3f3" }}
      >
        <div className="container">
          <div className="section-title text-center">
            <span className="sp-color1">WAY OF WORK</span>
            <h2>Check out our work process and our way of work</h2>
          </div>
          <div className="row pt-45">
            <div className="col-lg-3 col-sm-6">
              <div className="work-card">
                <div className="number">1</div>
                <h3>Choose a service</h3>
                <p>
                  Lorem ipsum dolor sit amet, conse sadipscing elitr, sed diam
                </p>
                <div className="line-shape1">
                  {/* <img src="/images/shape/line-shape1.png" alt="Images" /> */}
                  <img src="/images/shape/line-shapensspl1.png" alt="Images" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="work-card">
                <div className="number">2</div>
                <h3>Request a meeting</h3>
                <p>
                  Lorem ipsum dolor sit amet, conse sadipscing elitr, sed diam
                </p>
                <div className="line-shape2">
                  <img src="/images/shape/line-shapensspl2.png" alt="Images" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="work-card">
                <div className="number">3</div>
                <h3>Receive custom plan</h3>
                <p>
                  Lorem ipsum dolor sit amet, conse sadipscing elitr, sed diam
                </p>
                <div className="line-shape1">
                  {/* <img src="/images/shape/line-shape1.png" alt="Images" /> */}
                  <img src="/images/shape/line-shapensspl1.png" alt="Images" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="work-card">
                <div className="number">4</div>
                <h3>Let’s make it happen</h3>
                <p>
                  Lorem ipsum dolor sit amet, conse sadipscing elitr, sed diam
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* brand value */}
      <div
        className="brand-area brand-bg ptb-100"
        // style={{ background: "#f3f3f3" }}
      >
        <div className="container">
          <div className="section-title text-center">
            <span className="sp-color2" style={{ color: "white" }}>
              BRAND VALUE
            </span>
            <h2 style={{ color: "white" }}>
              Trusted by 5,000+ happy customers and beloved brands
            </h2>
          </div>
          <div className="brand-slider-two owl-carousel owl-theme pt-45">
            <div className="brand-item">
              <img
                src="/images/brand-img/brand-logo1.png"
                className="brand-logo-one"
                alt="Images"
              />
              <img
                src="/images/brand-img/brand-style1.png"
                className="brand-logo-two"
                alt="Images"
              />
            </div>
            <div className="brand-item">
              <img
                src="/images/brand-img/brand-logo2.png"
                className="brand-logo-one"
                alt="Images"
              />
              <img
                src="/images/brand-img/brand-style2.png"
                className="brand-logo-two"
                alt="Images"
              />
            </div>
            <div className="brand-item">
              <img
                src="/images/brand-img/brand-logo3.png"
                className="brand-logo-one"
                alt="Images"
              />
              <img
                src="/images/brand-img/brand-style3.png"
                className="brand-logo-two"
                alt="Images"
              />
            </div>
            <div className="brand-item">
              <img
                src="/images/brand-img/brand-logo4.png"
                className="brand-logo-one"
                alt="Images"
              />
              <img
                src="/images/brand-img/brand-style4.png"
                className="brand-logo-two"
                alt="Images"
              />
            </div>
            <div className="brand-item">
              <img
                src="/images/brand-img/brand-logo5.png"
                className="brand-logo-one"
                alt="Images"
              />
              <img
                src="/images/brand-img/brand-style5.png"
                className="brand-logo-two"
                alt="Images"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
