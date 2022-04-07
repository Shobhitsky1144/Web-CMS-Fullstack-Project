import React, { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import Axios from "axios";
import { API_BASE_URL } from "../constants/ApiBaseUrl";
import { toast } from "react-toastify";

const Home = () => {
  const [page, setPage] = useState(false);

  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState(null);
  const [subject, setSubject] = useState(null);

  const [getData, setGetData] = useState([]);

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

  let navigate = useNavigate();

  useEffect(() => {
    allCaseStudy();
  }, []);

  const allCaseStudy = async () => {
    try {
      const res = await Axios.get(`${API_BASE_URL}/getAllCaseStudy`);
      console.log("casestudy", res.data);
      setGetData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (page === true) {
    window.location.href = "/about-us";
  }
  // const navigate = useNavigate();
  return (
    <div>
      <div className="banner-area-two">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner-content-two">
                <span>INTRODUCTION TO US</span>
                <h1>Give your customers best IT support</h1>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam ata nonumy eirmod tempor invidunt ut labore et dolore
                  magna aliquyaman antast erat, sed diam voluptua.
                </p>
                <NavLink
                  to="/contact-us"
                  className="default-btn-two border-radius-5"
                >
                  Get started
                </NavLink>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="banner-img-two"
                // style={{ height: "448px" }}
              >
                <img src="/images/home-three.png" alt="Images" />
                {/* <img
                  src="/images/home-nsspl.png"
                  alt="Images"
                  style={{ height: "100%" }}
                /> */}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="shape-circle">
          <img src="/images/shape/shape-circle.png" alt="" />
        </div> */}
      </div>

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

      <div className="about-area-three pt-100 pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="about-img-4"
                // style={{ width: "647px", height: "526px" }}
              >
                <img src="/images/about/about-img4.png" alt="Images" />
                {/* <img
                  src="/images/about/About us2.png"
                  alt="Images"
                  style={{ height: "100%" }}
                /> */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-skill-content">
                <div className="section-title">
                  <span className="sp-color2">ABOUT OUR AGENCY</span>
                  <h2>
                    We are here to IT solution with 10 years of experience
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod anta tempor invidunt ut labore et dolore
                    magna aliquyam erat, sed diam voluptua. At verovo eos et
                    accusam et justo duo dolores et ea rebum.
                  </p>
                </div>
                <div className="all-skill-bar">
                  <div className="skill-bar" data-percentage="99%">
                    <h4 className="progress-title-holder">
                      <span className="progress-title">
                        Mobile App Development
                      </span>
                      <span className="progress-number-wrapper">
                        <span className="progress-number-mark">
                          <span className="percent"></span>
                          <span className="down-arrow"></span>
                        </span>
                      </span>
                    </h4>
                    <div className="progress-content-outter">
                      <div className="progress-content"></div>
                    </div>
                  </div>
                  <div className="skill-bar" data-percentage="95%">
                    <h4 className="progress-title-holder clearfix">
                      <span className="progress-title">React Native</span>
                      <span className="progress-number-wrapper">
                        <span className="progress-number-mark">
                          <span className="percent"></span>
                          <span className="down-arrow"></span>
                        </span>
                      </span>
                    </h4>
                    <div className="progress-content-outter">
                      <div className="progress-content"></div>
                    </div>
                  </div>
                  <div className="skill-bar" data-percentage="97%">
                    <h4 className="progress-title-holder clearfix">
                      <span className="progress-title">Web Development</span>
                      <span className="progress-number-wrapper">
                        <span className="progress-number-mark">
                          <span className="percent"></span>
                          <span className="down-arrow"></span>
                        </span>
                      </span>
                    </h4>
                    <div className="progress-content-outter">
                      <div className="progress-content"></div>
                    </div>
                  </div>

                  <div className="skill-bar" data-percentage="95%">
                    <h4 className="progress-title-holder clearfix">
                      <span className="progress-title">AR/VR</span>
                      <span className="progress-number-wrapper">
                        <span className="progress-number-mark">
                          <span className="percent"></span>
                          <span className="down-arrow"></span>
                        </span>
                      </span>
                    </h4>
                    <div className="progress-content-outter">
                      <div className="progress-content"></div>
                    </div>
                  </div>

                  <div className="skill-bar" data-percentage="96%">
                    <h4 className="progress-title-holder clearfix">
                      <span className="progress-title">
                        Ecommerce App Development
                      </span>
                      <span className="progress-number-wrapper">
                        <span className="progress-number-mark">
                          <span className="percent"></span>
                          <span className="down-arrow"></span>
                        </span>
                      </span>
                    </h4>
                    <div className="progress-content-outter">
                      <div className="progress-content"></div>
                    </div>
                  </div>

                  <div className="skill-bar mb-0" data-percentage="92%">
                    <h4 className="progress-title-holder clearfix">
                      <span className="progress-title">
                        Blockchain Development
                      </span>
                      <span className="progress-number-wrapper">
                        <span className="progress-number-mark">
                          <span className="percent"></span>
                          <span className="down-arrow"></span>
                        </span>
                      </span>
                    </h4>
                    <div className="progress-content-outter">
                      <div className="progress-content"></div>
                    </div>
                  </div>
                </div>

                <NavLink
                  to="#"
                  onClick={(e) => setPage(true)}
                  className="default-btn-two border-radius-5"
                >
                  Read more
                </NavLink>
              </div>
            </div>
          </div>
        </div>
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
                // onSubmit={handleSubmit}
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
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autocomplete="off"
                  style={{ borderRadius: "5px" }}
                />
                <input
                  type="number"
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
                {/* <div id="validator-newsletter" className="form-result"></div> */}
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

      <div className="services-area-three pt-100 ">
        <div className="container">
          <div className="section-title text-center">
            <span className="sp-color2">OUR SERVICES</span>
            <h2>Provide you all kinds of services of information technology</h2>
          </div>
          <div className="services-slider-two owl-carousel owl-theme pt-45">
            <div className="services-item-two">
              {/* <i className="flaticon-advertising"></i> */}

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

              <h3>
                <NavLink to="/service-details"> Mobile App Development</NavLink>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, conseai sadipscing elitr, sed diam.
              </p>
              <NavLink to="/service-details" className="read-more">
                Read more
              </NavLink>
            </div>
            <div className="services-item-two">
              {/* <i className="flaticon-laptop"></i> */}
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
              <h3>
                <NavLink to="/service-details">UI/UX Design</NavLink>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, conseai sadipscing elitr, sed diam.
              </p>
              <NavLink to="/service-details" className="read-more">
                Read more
              </NavLink>
            </div>

            <div className="services-item-two">
              {/* <i className="flaticon-settings-1"></i> */}
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
              <h3>
                <NavLink to="/service-details">Web Development</NavLink>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, conseai sadipscing elitr, sed diam.
              </p>
              <NavLink to="/service-details" className="read-more">
                Read more
              </NavLink>
            </div>

            <div className="services-item-two">
              {/* <i className="flaticon-startup"></i> */}
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
              <h3>
                <NavLink to="/service-details">
                  Cross Platform Mobile App
                </NavLink>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, conseai sadipscing elitr, sed diam.
              </p>
              <NavLink to="/service-details" className="read-more">
                Read more
              </NavLink>
            </div>
            <div className="services-item-two">
              {/* <i className="flaticon-setting"></i> */}
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
              <h3>
                <NavLink to="/service-details">E-Commerce Development</NavLink>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, conseai sadipscing elitr, sed diam.
              </p>
              <NavLink to="/service-details" className="read-more">
                Read more
              </NavLink>
            </div>
            <div className="services-item-two">
              {/* <i className="flaticon-setting"></i> */}
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
              <h3>
                <NavLink to="/service-details">Digital Transformation</NavLink>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, conseai sadipscing elitr, sed diam.
              </p>
              <NavLink to="/service-details" className="read-more">
                Read more
              </NavLink>
            </div>
            <div className="services-item-two">
              {/* <i className="flaticon-setting"></i> */}
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
              <h3>
                <NavLink to="/service-details">AI / ML Solution</NavLink>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, conseai sadipscing elitr, sed diam.
              </p>
              <NavLink to="/service-details" className="read-more">
                Read more
              </NavLink>
            </div>

            <div className="services-item-two">
              {/* <i className="flaticon-setting"></i> */}
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
                  src="/images/nsspl images/OUR SERVICES ICON/AR-VR Solution.png"
                  alt=""
                />
              </div>
              <h3>
                <NavLink to="/service-details">AR/VR Solution</NavLink>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, conseai sadipscing elitr, sed diam.
              </p>
              <NavLink to="/service-details" className="read-more">
                Read more
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* why choose us */}

      <div
        className="choose-area-four pt-100 pb-70"
        style={{ background: "white" }}
      >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 ps-0">
              <div className="choose-img">
                <img src="/images/choose-img.jpg" alt="Images" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="choose-right-content">
                <div className="section-title">
                  <span className="sp-color2">WHY YOU CHOOSE US</span>
                  <h2>
                    How we deal with the aspect of IT services at a glance
                  </h2>
                </div>
                <div className="choose-right-item">
                  <i className="flaticon-setting"></i>
                  <h3>Maintain all data</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy tempor invidunt ut labore et dolore magna
                    aliquyam erat,
                  </p>
                </div>
                <div className="choose-right-item">
                  <i className="flaticon-cloud-computing"></i>
                  <h3>Large data & analytics</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy tempor invidunt ut labore et dolore magna
                    aliquyam erat,
                  </p>
                </div>
                <div className="choose-right-item">
                  <i className="flaticon-settings"></i>
                  <h3>Product designs</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy tempor invidunt ut labore et dolore magna
                    aliquyam erat,
                  </p>
                </div>
                <NavLink
                  to="/service-details"
                  className="default-btn-two border-radius-5"
                  // style={{ background: "black" }}
                >
                  Read more
                </NavLink>
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

      {/* Industry section */}
      <div className="services-area-three ptb-100 ">
        <div className="container">
          <div className="section-title text-center">
            {/* <span className="sp-color2">industry We Serve</span> */}
            <h2>Industry We Serve</h2>
          </div>
          <div className="services-slider-two owl-carousel owl-theme pt-45">
            <div className="services-item-two">
              {/* <i className="flaticon-advertising"></i> */}

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

              <h3>
                <NavLink to="/service-details"> Industry Name</NavLink>
              </h3>
              <p>Industry Details</p>
              <NavLink to="/service-details" className="read-more">
                Read more
              </NavLink>
            </div>
            <div className="services-item-two">
              {/* <i className="flaticon-laptop"></i> */}
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
              <h3>
                <NavLink to="/service-details">Industry Name</NavLink>
              </h3>
              <p>Industry Details</p>
              <NavLink to="/service-details" className="read-more">
                Read more
              </NavLink>
            </div>

            <div className="services-item-two">
              {/* <i className="flaticon-settings-1"></i> */}
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
              <h3>
                <NavLink to="/service-details">Industry Name</NavLink>
              </h3>
              <p>Industry Details</p>
              <NavLink to="/service-details" className="read-more">
                Read more
              </NavLink>
            </div>

            <div className="services-item-two">
              {/* <i className="flaticon-startup"></i> */}
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
              <h3>
                <NavLink to="/service-details">Industry Name</NavLink>
              </h3>
              <p>Industry Details</p>
              <NavLink to="/service-details" className="read-more">
                Read more
              </NavLink>
            </div>
            <div className="services-item-two">
              {/* <i className="flaticon-setting"></i> */}
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
              <h3>
                <NavLink to="/service-details">Industry Name</NavLink>
              </h3>
              <p>Industry Details</p>
              <NavLink to="/service-details" className="read-more">
                Read more
              </NavLink>
            </div>
            <div className="services-item-two">
              {/* <i className="flaticon-setting"></i> */}
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
              <h3>
                <NavLink to="/service-details">Industry Name</NavLink>
              </h3>
              <p>Industry Details</p>
              <NavLink to="/service-details" className="read-more">
                Read more
              </NavLink>
            </div>
            <div className="services-item-two">
              {/* <i className="flaticon-setting"></i> */}
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
              <h3>
                <NavLink to="/service-details">Industry Name</NavLink>
              </h3>
              <p>Industry Details</p>
              <NavLink to="/service-details" className="read-more">
                Read more
              </NavLink>
            </div>

            <div className="services-item-two">
              {/* <i className="flaticon-setting"></i> */}
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
                  src="/images/nsspl images/OUR SERVICES ICON/AR-VR Solution.png"
                  alt=""
                />
              </div>
              <h3>
                <NavLink to="/service-details">Industry Name</NavLink>
              </h3>
              <p>Industry Details</p>
              <NavLink to="/service-details" className="read-more">
                Read more
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* case study */}

      <div className="blog-area pt-100 pb-70" style={{ background: "#f3f3f3" }}>
        <div className="container">
          <div className="section-title text-center">
            <span className="sp-color2">Case Study</span>
            <h2 style={{ fontSize: "35px" }}>
              We shed a light on our work and what goes behind the Development.
            </h2>
          </div>
          <div className="row pt-45">
            {/* {console.log("length", getData.length)} */}

            {getData.slice(0, 3).map((data) => (
              <div className="col-lg-4 col-md-6">
                <div
                  className="blog-card"
                  onClick={(e) =>
                    navigate("/casestudy-details", {
                      state: {
                        id: data._id,
                      },
                    })
                  }
                >
                  <NavLink
                    to="#"
                    className="text-center"
                    // onClick={handleCaseDetails}
                  >
                    <img
                      src={data.image}
                      alt="Blog Images"
                      height={300}
                      style={{ width: "100%" }}
                    />
                  </NavLink>

                  <div className="content">
                    <h3
                      onClick={(e) =>
                        navigate("/casestudy-details", {
                          state: {
                            id: data._id,
                          },
                        })
                      }
                    >
                      {console.log(data._id)}
                      <NavLink to="#" className="text-center">
                        {data.heading}
                      </NavLink>
                    </h3>
                    <div
                      className="tech d-flex  flex-wrap"
                      style={{ fontSize: "14px" }}
                    >
                      {data.technologies.map((technologies) => (
                        <p className="casestudy-description ">{technologies}</p>
                      ))}
                    </div>
                    <div
                      className=""
                      onClick={(e) =>
                        navigate("/casestudy-details", {
                          state: {
                            id: data._id,
                          },
                        })
                      }
                    >
                      <NavLink
                        to="#"
                        className="read-more text-center"

                        // onClick={handleCaseDetails}
                      >
                        Read more
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Explore new projects */}
      <div className="project-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="section-title">
                <h2>Explore our new projects & benefited from us </h2>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="project-text">
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscingi tempor
                  invidunt ut labore et dolore magna aliquyam eos et accusam et
                  justo duo dolores et ea rebum. St takimata sanctus est.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="project-btn">
                <NavLink
                  to="/portfolio"
                  className="default-btn"
                  // style={{ borderRadius: "5px" }}
                >
                  See our projects
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* completed projects */}

      <div className="counter-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="counter-card">
                <i className="flaticon-earth"></i>
                <h3>20K+</h3>
                <span>Project completed</span>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="counter-card">
                <i className="flaticon-ufo"></i>
                <h3>122K+</h3>
                <span>Our beloved clients</span>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="counter-card">
                <i className="flaticon-ellipsis"></i>
                <h3>40K+</h3>
                <span>Running projects</span>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="counter-card">
                <i className="flaticon-star"></i>
                <h3>60K+</h3>
                <span>Creative customers</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* testimonal */}

      <div className="testimonial-area-three ">
        <div className="container">
          <div className="row align-items-center pt-3">
            <div className="col-lg-6">
              <div className="testimonial-slider-three owl-carousel owl-theme">
                <div className="testimonial-slider-card">
                  <div className="section-title">
                    <span className="sp-color2">OUR TESTIMONIAL</span>
                    <h2>
                      We help you to grow your global business easily and
                      quickly
                    </h2>
                  </div>
                  <p>
                    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod anta tempor invidunt ut labore et
                    dolore magna aliquyam erat, sed diam voluptua. At verovo eos
                    et accusam et justo duo dolores et ea rebum. Stet clita".
                  </p>
                  <i className="bx bxs-quote-alt-right"></i>
                  <div className="testimonial-avatar">
                    <h3>Ryan gutierrez</h3>
                    <span>Manager</span>
                    <img
                      src="/images/testimonial/testimonial-img4.jpg"
                      alt="Images"
                    />
                  </div>
                </div>
                <div className="testimonial-slider-card">
                  <div className="section-title">
                    <span className="sp-color2">OUR TESTIMONIAL</span>
                    <h2>
                      We help you to grow your global business easily and
                      quickly
                    </h2>
                  </div>
                  <p>
                    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod anta tempor invidunt ut labore et
                    dolore magna aliquyam erat, sed diam voluptua. At verovo eos
                    et accusam et justo duo dolores et ea rebum. Stet clita".
                  </p>
                  <i className="bx bxs-quote-alt-right"></i>
                  <div className="testimonial-avatar">
                    <h3>Jermin Jekson</h3>
                    <span>CEO</span>
                    <img
                      src="/images/testimonial/testimonial-img2.jpg"
                      alt="Images"
                    />
                  </div>
                </div>
                <div className="testimonial-slider-card">
                  <div className="section-title">
                    <span className="sp-color2">OUR TESTIMONIAL</span>
                    <h2>
                      We help you to grow your global business easily and
                      quickly
                    </h2>
                  </div>
                  <p>
                    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod anta tempor invidunt ut labore et
                    dolore magna aliquyam erat, sed diam voluptua. At verovo eos
                    et accusam et justo duo dolores et ea rebum. Stet clita".
                  </p>
                  <i className="bx bxs-quote-alt-right"></i>
                  <div className="testimonial-avatar">
                    <h3>Hobler Jeain</h3>
                    <span>General Manager</span>
                    <img
                      src="/images/testimonial/testimonial-img3.jpg"
                      alt="Images"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testimonial-slider-img">
                <img
                  src="/images/testimonial/testimonial-slider-img.jpg"
                  alt="Images"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
