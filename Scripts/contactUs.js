$(document).ready(function () {
  // Start loading animations
  startLoadingAnimations();

  // Hide loading screen when page is fully loaded
  $(window).on("load", function () {
    setTimeout(function () {
      $("#loading").fadeOut(800, function () {
        // Initialize AOS after loading screen disappears
        if (typeof AOS !== "undefined") {
          AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
          });
        }
      });
    }, 500); // Short delay to show completion
  });

  /* Show && hide menu */
  $(".showMenu").click(function () {
    $(this).addClass("d-none");
    $(".hideMenu").removeClass("d-none");
    $(".menuMobil").addClass("active");
  });
  /* ######### */
  $(".hideMenu").click(function () {
    $(this).addClass("d-none");
    $(".showMenu").removeClass("d-none");
    $(".menuMobil").removeClass("active");
  });

  /* Close menu when clicking on a link */
  $(".menuMobil li a").click(function () {
    $(".hideMenu").addClass("d-none");
    $(".showMenu").removeClass("d-none");
    $(".menuMobil").removeClass("active");
  });

  /* Close menu when clicking on backdrop */
  $(".menuMobil").click(function (e) {
    if (e.target === this) {
      $(".hideMenu").addClass("d-none");
      $(".showMenu").removeClass("d-none");
      $(".menuMobil").removeClass("active");
    }
  });
  /* INITIALIZE AOS */
  AOS.init({
    duration: 900,
  });
});

function startLoadingAnimations() {
  // Progress bar animation
  let progress = 0;
  const progressFill = document.querySelector(".progress-fill");
  const progressInterval = setInterval(function () {
    progress += Math.random() * 15;
    if (progress > 100) progress = 100;

    if (progressFill) {
      progressFill.style.width = progress + "%";
    }

    if (progress >= 100) {
      clearInterval(progressInterval);
    }
  }, 200);

  // Clear interval when page loads
  $(window).on("load", function () {
    setTimeout(function () {
      clearInterval(progressInterval);
    }, 500);
  });
}
