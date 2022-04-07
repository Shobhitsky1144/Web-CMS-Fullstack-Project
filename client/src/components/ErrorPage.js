import React from "react";

const ErrorPage = () => {
  return (
    <div>
      <div class="inner-banner">
        <div class="container">
          <div class="inner-title text-center">
            <h3 style={{ color: "white" }}> 404 Error Page! </h3>
            <ul>
              <li>
                <a href="/" style={{ color: "white" }}>
                  Home
                </a>
                <i class="bx bx-chevron-right" style={{ color: "white" }}></i>
              </li>
              <li style={{ color: "white" }}> 404 Error Page! </li>
            </ul>
          </div>
        </div>
        {/* <div class="inner-line">
          <div class="line1"></div>
          <div class="line2"></div>
        </div> */}
      </div>

      <div class="error-area">
        <div class="d-table">
          <div class="d-table-cell">
            <div class="error-content">
              <h1>
                4 <span>0</span> 4
              </h1>
              <h3>Oops! Page Not Found</h3>
              <p>
                The page you are looking for might have been removed had its
                name changed or is temporarily unavailable.
              </p>
              <a href="/" class="default-btn-two">
                Return To Home Page
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
