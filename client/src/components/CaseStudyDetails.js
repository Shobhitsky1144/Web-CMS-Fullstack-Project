import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Axios from "axios";
import { API_BASE_URL } from "../constants/ApiBaseUrl";

const CaseStudyDetails = () => {
  const [getData, setGetData] = useState([]);
  const location = useLocation();
  const [id, setId] = useState("");

  useEffect(() => {
    setId(location.state.id);
    getFullDetails();
  }, [location.state.id]);

  const getFullDetails = async () => {
    try {
      const res = await Axios.post(`${API_BASE_URL}/caseStudyDetails`, {
        casestudyId: location.state.id,
      });
      console.log("casestudydetails", res.data);
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
            <h3 style={{ color: "white" }}>Case Study Details</h3>
            <ul>
              <li>
                <a href="/" style={{ color: "white" }}>
                  Home
                </a>
                <i class="bx bx-chevron-right" style={{ color: "white" }}></i>
              </li>
              <li style={{ color: "white" }}>Case Study Details</li>
            </ul>
          </div>
        </div>
        {/* <div class="inner-line">
          <div class="line1"></div>
          <div class="line2"></div>
        </div> */}
      </div>

      <div class="blog-details-area pt-100 pb-70">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="">
                <div class="">
                  <img
                    src={getData.image}
                    alt="Case Details Image"
                    height={600}
                    className="casestudy-image"
                    style={{ width: "100%", borderRadius: "32px" }}
                  />
                </div>
                <div class="blog-article-title">
                  <h2>{getData.heading}</h2>
                </div>
                <div class="article-content">
                  <p>{getData.description}</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="side-bar-area mr-20">
                <div class="side-bar-widget">
                  <h3 class="title">Tags</h3>
                  <ul class="side-bar-widget-tag">
                    <li>
                      <span className="text-white">Mobile App Development</span>
                    </li>
                    <li>
                      <span className="text-white">React Native</span>
                    </li>
                    <li>
                      <span className="text-white">Ecommerce App </span>
                    </li>
                    <li>
                      <span className="text-white">
                        Blockchain Development{" "}
                      </span>
                    </li>
                    <li>
                      <span className="text-white">Community</span>
                    </li>
                    <li>
                      <span className="text-white">UI/UX</span>
                    </li>
                    <li>
                      <span className="text-white">Design</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudyDetails;
