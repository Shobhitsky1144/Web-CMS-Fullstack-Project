(function ($) {
  "use strict";

  // Mean Menu JS
  jQuery(".mean-menu").meanmenu({
    meanScreenWidth: "991",
  });

  // Navbar Area
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 150) {
      $(".navbar-area").addClass("sticky-nav");
    } else {
      $(".navbar-area").removeClass("sticky-nav");
    }
  });

  // Others Option For Responsive JS
  $(".side-nav-responsive .dot-menu").on("click", function () {
    $(".side-nav-responsive .container-max .container").toggleClass("active");
  });

  // Banner Slider
  $(".banner-slider").owlCarousel({
    loop: true,
    margin: 30,
    items: 1,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
  });

  // Brand Slider
  $(".brand-slider").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  });

  // Brand Slider Two
  $(".brand-slider-two").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1200: {
        items: 5,
      },
    },
  });

  // Testimonials Slider
  $(".testimonial-slider").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    mouseDrag: true,
    items: 1,
    dots: false,
    autoHeight: true,
    autoplay: false,
    smartSpeed: 1500,
    autoplayHoverPause: true,
    navText: [
      "<i class='bx bx-chevron-left'></i>",
      "<i class='bx bx-chevron-right'></i>",
    ],
  });

  // Testimonials Slider Two
  $(".testimonial-slider-two").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    mouseDrag: true,
    items: 1,
    dots: true,
    autoHeight: true,
    autoplay: true,
    smartSpeed: 1500,
    autoplayHoverPause: true,
  });

  // Testimonials Slider Two
  $(".testimonial-slider-three").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    mouseDrag: true,
    items: 1,
    dots: true,
    autoHeight: true,
    autoplay: true,
    smartSpeed: 1500,
    autoplayHoverPause: true,
  });

  // Services Slider
  $(".services-slider").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1200: {
        items: 4,
      },
    },
  });

  // Services Slider Two
  $(".services-slider-two").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1200: {
        items: 4,
      },
    },
  });

  // Popup Gallery
  $(".footer-gallery").magnificPopup({
    delegate: "a",
    type: "image",
    tLoading: "Loading image #%curr%...",
    mainClass: "mfp-img-mobile",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1],
    },
  });

  // FAQ Accordion JS
  $(".accordion")
    .find(".accordion-title")
    .on("click", function () {
      // Adds Active Class
      $(this).toggleClass("active");
      // Expand or Collapse This Panel
      $(this).next().slideToggle("fast");
      // Hide The Other Panels
      $(".accordion-content").not($(this).next()).slideUp("fast");
      // Removes Active Class From Other Titles
      $(".accordion-title").not($(this)).removeClass("active");
    });

  // Tabs Single Page
  $(".tab ul.tabs").addClass("active").find("> li:eq(0)").addClass("current");
  $(".tab ul.tabs li a").on("click", function (g) {
    var tab = $(this).closest(".tab"),
      index = $(this).closest("li").index();
    tab.find("ul.tabs > li").removeClass("current");
    $(this).closest("li").addClass("current");
    tab
      .find(".tab_content")
      .find("div.tabs_item")
      .not("div.tabs_item:eq(" + index + ")")
      .slideUp();
    tab
      .find(".tab_content")
      .find("div.tabs_item:eq(" + index + ")")
      .slideDown();
    g.preventDefault();
  });

  $(".skill-bar").each(function () {
    $(this)
      .find(".progress-content")
      .animate({ width: $(this).attr("data-percentage") }, 2000);
    $(this)
      .find(".progress-number-mark")
      .animate(
        { left: $(this).attr("data-percentage") },
        {
          duration: 2000,
          step: function (now, fx) {
            var data = Math.round(now);
            $(this)
              .find(".percent")
              .html(data + "%");
          },
        }
      );
  });

  // Range Slider
  $("#range-slider").slider({
    range: true,
    min: 50,
    max: 400,
    values: [50, 400],
    slide: function (event, ui) {
      $("#price-amount").val("$" + ui.values[0] + "-$" + ui.values[1]);
    },
  });
  $("#price-amount").val(
    "$" +
      $("#range-slider").slider("values", 0) +
      " - $" +
      $("#range-slider").slider("values", 1)
  );

  // Input Plus & Minus Number JS
  $(".input-counter").each(function () {
    var spinner = jQuery(this),
      input = spinner.find('input[type="text"]'),
      btnUp = spinner.find(".plus-btn"),
      btnDown = spinner.find(".minus-btn"),
      min = input.attr("min"),
      max = input.attr("max");

    btnUp.on("click", function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.on("click", function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
  });

  // Popup Video
  $(".play-btn").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });

  // Nice Select JS
  $("select").niceSelect();

  // MixItUp JS
  $("#Container").mixItUp();

  // WOW JS
  new WOW().init();

  // Preloader JS
  jQuery(window).on("load", function () {
    jQuery(".preloader").fadeOut(500);
  });

  // Back To Top
  $("body").append(
    "<div class='go-top'><i class='bx bx-chevrons-up'></i></div>"
  );
  $(window).on("scroll", function () {
    var scrolled = $(window).scrollTop();
    if (scrolled > 600) $(".go-top").addClass("active");
    if (scrolled < 600) $(".go-top").removeClass("active");
  });
  $(".go-top").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: "0",
      },
      500
    );
  });

  // Buy Now Btn
  $("body").append(
    "<a href='https://themeforest.net/checkout/from_item/31104445?license=regular&support=bundle_6month&_ga=2.111841666.721751676.1644836235-918236941.1644836235' target='_blank' class='buy-now-btn'><img src='assets/images/envato.png' alt='envato'/>Buy Now</a>"
  );

  // Count Time JS
  function makeTimer() {
    var endTime = new Date("December 30, 2022 17:00:00 PDT");
    var endTime = Date.parse(endTime) / 1000;
    var now = new Date();
    var now = Date.parse(now) / 1000;
    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(
      timeLeft - days * 86400 - hours * 3600 - minutes * 60
    );
    if (hours < "10") {
      hours = "0" + hours;
    }
    if (minutes < "10") {
      minutes = "0" + minutes;
    }
    if (seconds < "10") {
      seconds = "0" + seconds;
    }
    $("#days").html(days + "<span>Days</span>");
    $("#hours").html(hours + "<span>Hours</span>");
    $("#minutes").html(minutes + "<span>Minutes</span>");
    $("#seconds").html(seconds + "<span>Seconds</span>");
  }
  setInterval(function () {
    makeTimer();
  }, 300);

  // Subscribe form
  $(".newsletter-form")
    .validator()
    .on("submit", function (event) {
      if (event.isDefaultPrevented()) {
        // Handle The Invalid Form...
        formErrorSub();
        submitMSGSub(false, "Please enter your email correctly");
      } else {
        // Everything Looks Good!
        event.preventDefault();
      }
    });
  function callbackFunction(resp) {
    if (resp.result === "success") {
      formSuccessSub();
    } else {
      formErrorSub();
    }
  }
  function formSuccessSub() {
    $(".newsletter-form")[0].reset();
    submitMSGSub(true, "Thank you for subscribing!");
    setTimeout(function () {
      $("#validator-newsletter").addClass("hide");
    }, 4000);
  }
  function formErrorSub() {
    $(".newsletter-form").addClass("animated shake");
    setTimeout(function () {
      $(".newsletter-form").removeClass("animated shake");
    }, 1000);
  }
  function submitMSGSub(valid, msg) {
    if (valid) {
      var msgClasses = "validation-success";
    } else {
      var msgClasses = "validation-danger";
    }
    $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
  }

  // AJAX MailChimp
  $(".newsletter-form").ajaxChimp({
    url: "https://envyTheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", // Your url MailChimp
    callback: callbackFunction,
  });
})(jQuery);

// function to set a given theme/color-scheme
function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-light");
  } else {
    setTheme("theme-dark");
  }
}

// Immediately invoked function to set the theme on initial load
(function () {
  if (localStorage.getItem("theme") === "theme-dark") {
    setTheme("theme-dark");
    document.getElementById("slider").checked = false;
  } else {
    setTheme("theme-light");
    document.getElementById("slider").checked = true;
  }
})();
