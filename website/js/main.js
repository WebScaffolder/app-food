(function ($) {
  "use strict";
  jQuery(document).ready(function () {
    // mobile-menu
    $("#mobile-menu").meanmenu({
      meanMenuContainer: ".mobile-menu",
      meanScreenWidth: "991.99",
    });

    // ToTop [Hand-Code].
    $(".scrollup").on("click", function () {
      $("html").animate(
        {
          scrollTop: "0",
        },
        1200
      );
    });
    $(window).on("scroll", function () {
      var toTopVisible = $("html").scrollTop();
      if (toTopVisible > 500) {
        $(".scrollup").fadeIn();
      } else {
        $(".scrollup").fadeOut();
      }
    });

    // MouseHover Animation home 1
    var hoverLayer = $(".banner-area");
    var heroImgOne = $(".p-shape-1");
    var heroImgTwo = $(".p-shape-2");
    var heroImgThree = $(".p-shape-3");
    var heroImgFour = $(".p-shape-4");
    hoverLayer.mousemove(function (e) {
      var valueX = (e.pageX * -1) / 100;
      var valueY = (e.pageY * -1) / 120;
      heroImgOne.css({
        transform: "translate3d(" + valueX + "px," + valueY + "px, 0)",
      });
    });
    hoverLayer.mousemove(function (e) {
      var valueX = (e.pageX * -1) / 60;
      var valueY = (e.pageY * -1) / 80;
      heroImgTwo.css({
        transform: "translate3d(" + valueX + "px," + valueY + "px, 0)",
      });
    });
    hoverLayer.mousemove(function (e) {
      var valueX = (e.pageX * -1) / 40;
      var valueY = (e.pageY * -1) / 60;
      heroImgThree.css({
        transform: "translate3d(" + valueX + "px," + valueY + "px, 0)",
      });
    });
    hoverLayer.mousemove(function (e) {
      var valueX = (e.pageX * -1) / 80;
      var valueY = (e.pageY * -1) / 100;
      heroImgFour.css({
        transform: "translate3d(" + valueX + "px," + valueY + "px, 0)",
      });
    });

    // MouseHover Animation home 2
    var hoverLayer2 = $(".burger-promo-area");
    var heroImgfive = $(".bs1");
    var heroImgsix = $(".bs2");
    var heroImgseven = $(".bs5");
    var heroImgeight = $(".bs6");
    hoverLayer2.mousemove(function (e) {
      var valueX = (e.pageX * -1) / 100;
      var valueY = (e.pageY * -1) / 120;
      heroImgfive.css({
        transform: "translate3d(" + valueX + "px," + valueY + "px, 0)",
      });
    });
    hoverLayer2.mousemove(function (e) {
      var valueX = (e.pageX * -1) / 60;
      var valueY = (e.pageY * -1) / 80;
      heroImgsix.css({
        transform: "translate3d(" + valueX + "px," + valueY + "px, 0)",
      });
    });
    hoverLayer2.mousemove(function (e) {
      var valueX = (e.pageX * -1) / 40;
      var valueY = (e.pageY * -1) / 60;
      heroImgseven.css({
        transform: "translate3d(" + valueX + "px," + valueY + "px, 0)",
      });
    });
    hoverLayer2.mousemove(function (e) {
      var valueX = (e.pageX * -1) / 80;
      var valueY = (e.pageY * -1) / 100;
      heroImgeight.css({
        transform: "translate3d(" + valueX + "px," + valueY + "px, 0)",
      });
    });

    // MouseHover Animation home 3
    var hoverLayer3 = $(".snack-section");
    var heroImgnine = $(".ss1");
    var heroImgten = $(".ss2");
    var heroImgeleven = $(".ss3");
    var heroImgtweleve = $(".mss2");
    hoverLayer3.mousemove(function (e) {
      var valueX = (e.pageX * -1) / 100;
      var valueY = (e.pageY * -1) / 120;
      heroImgtweleve.css({
        transform: "translate3d(" + valueX + "px," + valueY + "px, 0)",
      });
    });
    hoverLayer3.mousemove(function (e) {
      var valueX = (e.pageX * -1) / 60;
      var valueY = (e.pageY * -1) / 80;
      heroImgnine.css({
        transform: "translate3d(" + valueX + "px," + valueY + "px, 0)",
      });
    });
    hoverLayer3.mousemove(function (e) {
      var valueX = (e.pageX * -1) / 40;
      var valueY = (e.pageY * -1) / 60;
      heroImgten.css({
        transform: "translate3d(" + valueX + "px," + valueY + "px, 0)",
      });
    });
    hoverLayer3.mousemove(function (e) {
      var valueX = (e.pageX * -1) / 80;
      var valueY = (e.pageY * -1) / 100;
      heroImgeleven.css({
        transform: "translate3d(" + valueX + "px," + valueY + "px, 0)",
      });
    });

    // youtube popup
    // $(".popup-youtube").magnificPopup({
    //   disableOn: 700,
    //   type: "iframe",
    //   mainClass: "mfp-fade",
    //   removalDelay: 160,
    //   preloader: false,
    //   fixedContentPos: false,
    // });

    // init Isotope
    var $grid = $(".gallery-wrapper").isotope({
      // options
    });

    // filter items on button click
    $(".filter-button-group").on("click", "button", function () {
      var filterValue = $(this).attr("data-filter");
      $grid.isotope({ filter: filterValue });
    });

    $(".grid").isotope({
      // set itemSelector so .grid-sizer is not used in layout
      itemSelector: ".grid-item",
      percentPosition: true,
      masonry: {
        // use element for option
        columnWidth: 1,
      },
    });
    $(".gallery-btn button").each(function () {
      $(this).click(function () {
        $(this)
          .parent(".gallery-btn")
          .find("button.active")
          .removeClass("active");
        $(this).addClass("active");
      });
    });

    // team-active
    $(".team-slider-active").slick({
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

    // food-price range-slider
    $(function () {
      $("#slider-range").slider({
        range: true,
        min: 0,
        max: 500,
        values: [75, 300],
        slide: function (event, ui) {
          $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        },
      });
      $("#amount").val(
        "$" +
        $("#slider-range").slider("values", 0) +
        " - $" +
        $("#slider-range").slider("values", 1)
      );
    });

    // Countdown
    $(".countdown").downCount(
      {
        date: "06/28/2021 12:00:00",
        offset: +6,
      },
      function () {
        // alert('Countdown done!');
      }
    );

    // food counter
    $(".counter").counterUp({
      delay: 10,
      time: 1000,
    });

    // dbl product gallery
    $(".slider-for").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: ".slider-nav",
    });
    $(".slider-nav").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: ".slider-for",
      dots: false,
      centerMode: true,
      focusOnSelect: true,
      arrows: false,
    });
  });

  jQuery(window).on("load", function () {
    // WOW JS
    new WOW().init();

    // Preloader
    var preLoder = $("#preloader");
    preLoder.fadeOut(0);
  });
})(jQuery);
