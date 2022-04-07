import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Axios from "axios";
import { API_BASE_URL } from "../constants/ApiBaseUrl";

const CaseStudy = () => {
  const [getData, setGetData] = useState([]);

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

  return (
    <>
      <div class="inner-banner">
        <div class="container">
          <div class="inner-title text-center">
            <h3 style={{ color: "white" }}> Case Study</h3>
            <ul>
              <li>
                <a href="/" style={{ color: "white" }}>
                  Home
                </a>
                <i class="bx bx-chevron-right" style={{ color: "white" }}></i>
              </li>
              <li style={{ color: "white" }}> Case Study</li>
            </ul>
          </div>
        </div>
        {/* <div class="inner-line">
          <div class="line1"></div>
          <div class="line2"></div>
        </div> */}
      </div>

      <div
        className="blog-area pt-100 pb-70 mb-2"
        style={{ background: "#f3f3f3" }}
      >
        <div className="container">
          <div className="section-title text-center">
            <span className="sp-color2">Case Study</span>
            <h2 style={{ fontSize: "35px" }}>
              We shed a light on our work and what goes behind the Development.
            </h2>
          </div>
          <div className="row pt-45 ">
            {getData.map((data) => (
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
    </>
  );
};

export default CaseStudy;
