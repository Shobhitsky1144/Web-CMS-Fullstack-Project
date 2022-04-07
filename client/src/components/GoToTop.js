import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GoToTop = () => {
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
    var url = [
      "/js/jquery-min.js",
      "/js/bootstrap.bundle.min.js",
      "/js/owl.carousel.min.js",
      "/js/carousel-thumbs.js",
      "/js/jquery.nice-select.min.js",
      "/js/wow.min.js",
      "/js/meanmenu.js",
      "/js/jquery-ui.min.js",
      "/js/jquery.magnific-popup.min.js",
      "/js/mixitup.min.js",
      "/js/jquery.ajaxchimp.min.js",
      "/js/form-validator.min.js",
      "/js/contact-form-script.js",
      "/js/custom.js",
    ];
    url.map((url) => addScriptJS(url));
  };
  useEffect(() => {
    onTop();
  }, [routePath]);
  const addScriptJS = (url) => {
    var newScript = document.createElement("script");
    newScript.src = url;

    document.body.appendChild(newScript);
  };

  return null;

  return <></>;
};

export default GoToTop;
