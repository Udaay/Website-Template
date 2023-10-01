$(document).ready(function () {
  // For Sticky navigation
  const waypointNavigation = new Waypoint({
    element: document.getElementsByClassName("section-features"),
    handler: function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    offset: "5%",
  });

  // Scroll on Buttons
  $(".scroll-to-plans").click(function () {
    $("html, body").animate(
      { scrollTop: $(".section-subscriptionPlans").offset().top - 40 },
      2500
    );
  });

  $(".scroll-to-more-info").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".section-features").offset().top,
      },
      1000
    );
  });

  /* Navigation scroll */

  $('a[href^="#]:not([href=#]').on("click", function (e) {
    e.preventDefault();
    var target = this.hash;
    $target = $(target);
    $("html, body").stop().animate(
      {
        scrollTop: $target.offset().top,
      },
      900
    );
  });

  /* Animations on scroll */

  const wayPointFeatures = new Waypoint({
    element: $(".jq-wp-1"),
    handler: function (direction) {
      if (direction == "down") {
        $(".jq-wp-1").addClass("animated fadeIn");
      }
    },
    offset: "50%",
  });
  const wayPointPhone = new Waypoint({
    element: $(".jq-wp-2"),
    handler: function (direction) {
      if (direction == "down") {
        $(".jq-wp-2").addClass("animated fadeInUp");
      }
    },
    offset: "40%",
  });

  const wayPointCity = new Waypoint({
    element: $(".jq-wp-3"),
    handler: function (direction) {
      if (direction == "down") {
        $(".jq-wp-3").addClass("animated zoomIn");
      }
    },
    offset: "50%",
  });

  const wayPointPlan = new Waypoint({
    element: $(".jq-wp-4"),
    handler: function (direction) {
      if (direction == "down") {
        $(".jq-wp-4").addClass("animated pulse");
      }
    },
    offset: "50%",
  });

  //Mobile Navigation

  $(".mobile-nav-icon").click(function () {
    const nav = $(".js-main-nav");
    const closeBtnClsName = "close-circle";
    const menuBtnClsName = "menu";
    const icon = document.querySelector(".js-nav-icon ion-icon");
    const iconName = icon.getAttribute("name");
    nav.slideToggle(200);
    if (iconName == menuBtnClsName) icon.setAttribute("name", closeBtnClsName);
    else if (iconName == closeBtnClsName)
      icon.setAttribute("name", menuBtnClsName);
  });
});
