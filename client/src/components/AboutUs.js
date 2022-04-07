import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const AboutUs = () => {
  return (
    <div>
      <div class="inner-banner">
        <div class="container">
          <div class="inner-title text-center">
            <h3 style={{ color: "white" }}>About Us</h3>
            <ul>
              <li>
                <a href="/" style={{ color: "white" }}>
                  Home
                </a>
                <i class="bx bx-chevron-right" style={{ color: "white" }}></i>
              </li>
              <li style={{ color: "white" }}>About Us</li>
            </ul>
          </div>
        </div>
        {/* <div class="inner-line">
          <div class="line1"></div>
          <div class="line2" style={{ background: "#1abc9c" }}></div>
        </div> */}
      </div>

      <div className="about-area-three pt-100 pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="about-img-4"
                // style={{ width: "647px", height: "526px" }}
              >
                {/* <img src="/images/about/about-img4.png" alt="Images" /> */}
                {/* <img
                  src="/images/about/About us2.png"
                  alt="Images"
                  style={{ height: "100%" }}
                /> */}
                <img src="/images/about/about-img4.png" alt="Images" />
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
                {/* <NavLink to="/about-us" className="default-btn-two border-radius-5">
                  Read more
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="choose-area-two pb-70">
        <div class="container">
          <div class="section-title text-center">
            <span class="sp-color2">WHY YOU CHOOSE US</span>
            <h2>How we deal with the aspects of IT services</h2>
          </div>
          <div class="row pt-45">
            <div class="col-lg-4 col-md-6">
              <div class="choose-item" style={{ background: "#f3f3f3" }}>
                <i class="flaticon-setting"></i>
                <h3>Maintain all data</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  mattis aliquam augue, eget vehicula leo accumsan at. Phasellus
                  id nibh at sem consequat tincidunt a ut velit vivamus et neque
                  ut nisi.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="choose-item" style={{ background: "#f3f3f3" }}>
                <i class="flaticon-cloud-computing"></i>
                <h3>Large data & analytics</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  mattis aliquam augue, eget vehicula leo accumsan at. Phasellus
                  id nibh at sem consequat tincidunt a ut velit vivamus et neque
                  ut nisi.
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
              <div class="choose-item" style={{ background: "#f3f3f3" }}>
                <i class="flaticon-settings"></i>
                <h3>Product designs</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  mattis aliquam augue, eget vehicula leo accumsan at. Phasellus
                  id nibh at sem consequat tincidunt a ut velit vivamus et neque
                  ut nisi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="testimonial-area testimonial-area-bg ptb-100">
        <div class="container">
          <div class="section-title text-center">
            <span class="sp-color2">OUR TESTIMONIAL</span>
            <h2>We help you to grow the business easily</h2>
          </div>
          <div class="testimonial-slider owl-carousel owl-theme pt-45">
            <div class="testimonial-item">
              <i class="bx bxs-quote-alt-left"></i>
              <p>
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod anta tempor invidunt ut labore et dolore
                magna aliquyam erat, sed diam voluptua. At verovo eos et accusam
                et justo duo dolores et ea rebum. Stet clita".
              </p>
              <div class="testimonial-avatar">
                <h3>Ryan gutierrez</h3>
                <span>Manager</span>
                <img
                  src="/images/testimonial/testimonial-img4.jpg"
                  alt="Images"
                />
              </div>
            </div>
            <div class="testimonial-item">
              <i class="bx bxs-quote-alt-left"></i>
              <p>
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod anta tempor invidunt ut labore et dolore
                magna aliquyam erat, sed diam voluptua. At verovo eos et accusam
                et justo duo dolores et ea rebum. Stet clita".
              </p>
              <div class="testimonial-avatar">
                <h3>Jermin Jekson</h3>
                <span>CEO</span>
                <img
                  src="/images/testimonial/testimonial-img3.jpg"
                  alt="Images"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="testimonial-shape-img">
          <div class="img-shape1">
            <img src="/images/testimonial/testimonial-img1.jpg" alt="Images" />
          </div>
          <div class="img-shape2">
            <img src="/images/testimonial/testimonial-img2.jpg" alt="Images" />
          </div>
          <div class="img-shape3">
            <img src="/images/testimonial/testimonial-img3.jpg" alt="Images" />
          </div>
          <div class="img-shape4">
            <img src="/images/testimonial/testimonial-img4.jpg" alt="Images" />
          </div>
        </div>
      </div>

      <div class="faq-area pt-100 pb-70">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="faq-content">
                <div class="section-title">
                  <span class="sp-color2">FREE OF QUESTION</span>
                  <h2>
                    Let's get the free of question to get the best support
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod ant tempor invidunt ut labore et dolore
                    magna aliquyam erat, sed diam voluptua. At verov tempor
                    invidun t ut labore et dolore magna aliquyam erat,
                  </p>
                </div>
                <div class="faq-accordion" style={{ background: "#f3f3f3" }}>
                  <ul class="accordion" style={{ background: "#f3f3f3" }}>
                    <li class="accordion-item">
                      <a
                        class="accordion-title active"
                        href="javascript:void(0)"
                      >
                        <i class="bx bx-down-arrow-alt"></i>
                        How will you get support?
                      </a>
                      <div class="accordion-content show">
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod invidunt ut labore et
                          dolore magna aliquyam erat.
                        </p>
                      </div>
                    </li>
                    <li class="accordion-item">
                      <a class="accordion-title" href="javascript:void(0)">
                        <i class="bx bx-down-arrow-alt"></i>
                        How you will make IT support from us?
                      </a>
                      <div class="accordion-content">
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod invidunt ut labore et
                          dolore magna aliquyam erat.
                        </p>
                      </div>
                    </li>
                    <li class="accordion-item">
                      <a class="accordion-title" href="javascript:void(0)">
                        <i class="bx bx-down-arrow-alt"></i>
                        Do you have any domain support on websites?
                      </a>
                      <div class="accordion-content">
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod invidunt ut labore et
                          dolore magna aliquyam erat.
                        </p>
                      </div>
                    </li>
                    <li class="accordion-item">
                      <a class="accordion-title" href="javascript:void(0)">
                        <i class="bx bx-down-arrow-alt"></i>
                        How we can get the UI/UX design support from us?
                      </a>
                      <div class="accordion-content">
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod invidunt ut labore et
                          dolore magna aliquyam erat.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* <NavLink
                  to="/contact-us"
                  class="default-btn-two border-radius-5"
                >
                  Read more
                </NavLink> */}
              </div>
            </div>
            <div class="col-lg-6">
              <div class="faq-img">
                <img src="/images/faq-img.png" alt="Images" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="what-did-area-two pb-70">
        <div class="container">
          <div class="section-title text-center">
            <span class="sp-color2">WHAT WE DO</span>
            <h2>Check out our work process and our way of work</h2>
          </div>
          <div class="row align-items-center pt-45">
            <div class="col-lg-4">
              <div class="row">
                <div class="col-lg-12">
                  <div class="what-did-list">
                    <div class="number">1</div>
                    <h3>Find new ideas</h3>
                    <p>
                      Lorem ipsum dolor sit amet, conseai sadipscing elitr, sed
                      diam.
                    </p>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="what-did-list">
                    <div class="number">2</div>
                    <h3>Digital analysis</h3>
                    <p>
                      Lorem ipsum dolor sit amet, conseai sadipscing elitr, sed
                      diam.
                    </p>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="what-did-list">
                    <div class="number">3</div>
                    <h3>Marketing research</h3>
                    <p>
                      Lorem ipsum dolor sit amet, conseai sadipscing elitr, sed
                      diam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="what-did-list-img">
                <img src="/images/work-img.png" alt="Images" />
              </div>
            </div>
            <div class="col-lg-4">
              <div class="row">
                <div class="col-lg-12">
                  <div class="what-did-list2">
                    <div class="number">4</div>
                    <h3>Product creative</h3>
                    <p>
                      Lorem ipsum dolor sit amet, conseai sadipscing elitr, sed
                      diam.
                    </p>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="what-did-list2">
                    <div class="number">5</div>
                    <h3>Product analyzing</h3>
                    <p>
                      Lorem ipsum dolor sit amet, conseai sadipscing elitr, sed
                      diam.
                    </p>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="what-did-list2">
                    <div class="number">6</div>
                    <h3>Get the output</h3>
                    <p>
                      Lorem ipsum dolor sit amet, conseai sadipscing elitr, sed
                      diam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 
      <div class="newsletter-area-section mb-1">
        <div class="container-fluid">
          <div
            class="container-max newsletter-area-bg pt-100 pb-70"
            style={{ background: "#f3f3f3" }}
          >
            <div class="section-title text-center">
              <span class="sp-color2">NEWSLETTER</span>
              <h2>Get started with us today</h2>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod antatempor invidunt.
              </p>
            </div>
            <div class="newsletter-area">
              <form
                class="newsletter-form"
                data-toggle="validator"
                method="POST"
                style={{ display: "inherit" }}
              >
                <input
                  type="email"
                  class="form-control"
                  placeholder="Enter your email"
                  name="EMAIL"
                  required
                  autocomplete="off"
                  style={{ marginRight: "auto" }}
                />
                <button class="subscribe-btn" type="submit">
                  Subscribe now
                </button>
                <div id="validator-newsletter" class="form-result"></div>
              </form>
            </div>
            <div class="newsletter-line">
              <div class="line1"></div>
              <div class="line2"></div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default AboutUs;
