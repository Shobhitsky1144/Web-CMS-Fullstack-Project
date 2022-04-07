import React, { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import Axios from "axios";
import { API_BASE_URL } from "../constants/ApiBaseUrl";
import { toast } from "react-toastify";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const validateForm = (e) => {
    e.preventDefault();
    if (!email || !fullName || !mobile || !message || !subject) {
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
      console.log("contact form", res.data.message);
      setEmail("");
      setFullName("");
      setMobile("");
      setMessage("");
      setSubject("");
      if (res.status === 422) {
        toast.error("Form Submit Failed");
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
      <div class="inner-banner">
        <div class="container">
          <div class="inner-title text-center">
            <h3 style={{ color: "white" }}>Contact Us</h3>
            <ul>
              <li>
                <a href="/" style={{ color: "white" }}>
                  Home
                </a>
                <i class="bx bx-chevron-right" style={{ color: "white" }}></i>
              </li>
              <li style={{ color: "white" }}>Contact Us</li>
            </ul>
          </div>
        </div>
        {/* <div class="inner-line">
          <div class="line1"></div>
          <div class="line2"></div>
        </div> */}
      </div>

      <div class="contact-area pt-100 pb-70">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="contact-form">
                <div class="section-title">
                  <span class="sp-color1">FREE QOUTE AND MESSAGE US</span>
                  <h2>
                    We are here to IT solution with 10 years of experience
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod anta tempor invidunt ut labore et dolore
                    magna aliquyam erat.
                  </p>
                </div>
                <form id="contactForm">
                  <div class="row">
                    <div class="col-lg-3 col-sm-3">
                      <div class="form-group">
                        <label>Name</label>
                      </div>
                    </div>
                    <div class="col-lg-9 col-sm-9">
                      <div class="form-group">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          class="form-control"
                          required
                          data-error="Please Enter Your Name"
                          style={{ background: "#f3f3f3", borderRadius: "5px" }}
                        />
                        <div class="help-block with-errors"></div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-sm-3">
                      <div class="form-group">
                        <label>Email</label>
                      </div>
                    </div>
                    <div class="col-lg-9 col-sm-9">
                      <div class="form-group">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          class="form-control"
                          required
                          data-error="Please Enter Your Email"
                          style={{ background: "#f3f3f3", borderRadius: "5px" }}
                        />
                        <div class="help-block with-errors"></div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-sm-3">
                      <div class="form-group">
                        <label>Mobile</label>
                      </div>
                    </div>
                    <div class="col-lg-9 col-sm-9">
                      <div class="form-group">
                        <input
                          type="text"
                          name="phone_number"
                          id="phone_number"
                          required
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                          data-error="Please Enter Your number"
                          style={{ background: "#f3f3f3", borderRadius: "5px" }}
                          class="form-control"
                        />
                        <div class="help-block with-errors"></div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-sm-3">
                      <div class="form-group">
                        <label>Subject</label>
                      </div>
                    </div>
                    <div class="col-lg-9 col-sm-9">
                      <div class="form-group">
                        <input
                          type="text"
                          name="msg_subject"
                          id="msg_subject"
                          class="form-control"
                          required
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          data-error="Please Enter Your Subject"
                          style={{ background: "#f3f3f3", borderRadius: "5px" }}
                        />
                        <div class="help-block with-errors"></div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-sm-3">
                      <div class="form-group">
                        <label>Message</label>
                      </div>
                    </div>
                    <div class="col-lg-9 col-sm-9">
                      <div class="form-group">
                        <textarea
                          name="message"
                          class="form-control"
                          id="message"
                          cols="30"
                          rows="5"
                          required
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          data-error="Write your message"
                          style={{ background: "#f3f3f3", borderRadius: "5px" }}
                        ></textarea>
                        <div class="help-block with-errors"></div>
                      </div>
                    </div>
                    {/* <div class="col-lg-12 col-md-12">
                      <div class="agree-label">
                        <input type="checkbox" id="chb1" />
                        <label for="chb1">
                          Accept{" "}
                          <NavLink to="terms-condition.html">
                            Terms & Conditions
                          </NavLink>{" "}
                          And{" "}
                          <NavLink to="privacy-policy.html">
                            Privacy Policy.
                          </NavLink>
                        </label>
                      </div>
                    </div> */}
                    <div class="col-lg-12 col-md-12 text-center">
                      <button
                        type="submit"
                        class="default-btn-three "
                        onClick={validateForm}
                      >
                        Send Message
                      </button>
                      <div id="msgSubmit" class="h3 text-center hidden"></div>
                      <div class="clearfix"></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="contact-img ml-20">
                <img src="/images/contact-img.png" alt="Images" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="map-area mb-2">
        <div class="container-fluid m-0 p-0">
          <div class="contact-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14008.60507611485!2d77.1431607!3d28.6252281!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3954e7e8282b52ee!2sNeo%20Sypher%20Systems%20Pvt.%20Ltd.%20(NSSPL)!5e0!3m2!1sen!2sin!4v1646829433123!5m2!1sen!2sin"></iframe>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3230.094464535291!2d-78.89699858538667!3d35.944659023088136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ace5a32cdf859f%3A0x10292b079a16c8!2s3252%20Rockford%20Rd%2C%20Durham%2C%20NC%2027713%2C%20USA!5e0!3m2!1sen!2sbd!4v1612954383890!5m2!1sen!2sbd"></iframe> */}
          </div>
          <div class="contact-address">
            <ul>
              <li>
                <i class="bx bx-home-alt"></i>
                <div class="content">
                  <h3>Main office</h3>
                  <span>3252 Rockford Mountain Lane</span>
                  <span>Durham, North Carolina.</span>
                </div>
              </li>
              <li>
                <i class="bx bx-envelope"></i>
                <div class="content">
                  <h3>Email address</h3>
                  <span>
                    Email (01) :{" "}
                    <a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#90f8f5fcfcffd0fffee6f9bef3fffd">
                      <span
                        class="__cf_email__"
                        data-cfemail="1179747d7d7e517e7f67783f727e7c"
                      >
                        [email&#160;protected]
                      </span>
                    </a>
                  </span>
                  <span>
                    Email (02) :{" "}
                    <a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#f69f989099b69998809fd895999b">
                      <span
                        class="__cf_email__"
                        data-cfemail="40292e262f002f2e36296e232f2d"
                      >
                        [email&#160;protected]
                      </span>
                    </a>
                  </span>
                </div>
              </li>
              <li>
                <i class="bx bx-phone-call"></i>
                <div class="content">
                  <h3>Our phone</h3>
                  <span>
                    Call (01) :{" "}
                    <a href="tel:+(1)-814-482-2296"> +(1) 814 482 2296</a>
                  </span>
                  <span>
                    Call (02) :{" "}
                    <a href="tel:+(1)-814-482-2296">+(1) 814 481 3386</a>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
