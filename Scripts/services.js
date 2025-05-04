$(document).ready(function () {
  /* Splide Liberary */
  var splideReviews = new Splide(".rightReviewSec .splide", {
    autoplay: true,
    arrows: false,
    interval: 2000,
    speed: 2000,
    type: "loop",
    perPage: 3,
    breakpoints: {
      990: {
        perPage: 1,
      },
      1200: {
        perPage: 3,
      },
      // 1024: {
      //   perPage: 3,
      // },
    },
    focus: 0,
    gap: "2em",
    omitEnd: true,
  });

  splideReviews.mount();
  /* Show && hide menu */
  $(".showMenu").click(function () {
    $(this).addClass("d-none");
    $(".hideMenu").removeClass("d-none");
    $(".menuMobil").css("right", "0%");
  });
  /* ######### */
  $(".hideMenu").click(function () {
    $(this).addClass("d-none");
    $(".showMenu").removeClass("d-none");
    $(".menuMobil").css("right", "100%");
  });
  /* INITIALIZE AOS */
  AOS.init({
    duration: 900,
  });
});
