import React, { useEffect, useState } from "react";
import Axios from "axios";
import { API_BASE_URL } from "../constants/ApiBaseUrl";

const Portfolio = () => {
  const [getData, setGetData] = useState([]);

  useEffect(() => {
    allPortfolio();
  }, []);

  const allPortfolio = async () => {
    try {
      const res = await Axios.get(`${API_BASE_URL}/getAllPortfolio`);
      console.log(res.data);
      setGetData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div class="inner-banner">
        <div class="container">
          <div class="inner-title text-center">
            <h3 style={{ color: "white" }}>Portfolio Grid</h3>
            <ul>
              <li>
                <a href="/" style={{ color: "white" }}>
                  Home
                </a>
                <i class="bx bx-chevron-right" style={{ color: "white" }}></i>
              </li>
              <li style={{ color: "white" }}>Portfolio Grid</li>
            </ul>
          </div>
        </div>
        {/* <div class="inner-line">
          <div class="line1"></div>
          <div class="line2"></div>
        </div> */}
      </div>

      <div class="services-style-area pt-100 pb-70">
        <div class="container">
          <div class="section-title text-center">
            <span class="sp-color2">OUR PORTFOLIO</span>
            <h2 style={{ fontSize: "28px" }}>
              Check out some of our past work on complex projects for SMBs and
              enterprise-size businesses.
            </h2>
          </div>
          <div class="row pt-45">
            {getData.map((data) => (
              <div class="col-lg-6 col-sm-6 ">
                <div class="services-item">
                  {/* <i class="flaticon-advertising"></i> */}
                  <img
                    src={data.image}
                    alt="Portfolio Images"
                    height={300}
                    style={{ width: "100%", objectFit: "cover" }}
                  />
                  <h3>
                    <span className="">{data.heading}</span>
                  </h3>
                  <p>{data.description}</p>

                  <div className="">
                    <div className="">
                      <h5 style={{ fontSize: "15px" }}>EXPERTISE</h5>
                      <div className="d-flex flex-wrap">
                        {" "}
                        {data.expertise.map((expertise) => (
                          <p className="mr-20 portfolio-description">
                            {expertise}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div className="">
                      <h5 style={{ fontSize: "15px" }}>VERTICALS</h5>
                      <div className="d-flex flex-wrap">
                        {data.verticals.map((verticals) => (
                          <p className="mr-20 portfolio-description">
                            {verticals}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div className="">
                      <h5 style={{ fontSize: "15px" }}>TECHNOLOGIES</h5>
                      <div className="d-flex flex-wrap">
                        {data.technologies.map((technologies) => (
                          <p className="mr-20 portfolio-description">
                            {technologies}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* <span class="read-more">
                  Read more
                </a> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
