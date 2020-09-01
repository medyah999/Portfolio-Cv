// Type Writer Effect

new Typewriter("#typewriter", {
  strings: ["Hello,I'm Yahyaoui Mohamed Alaa", "Web Designer", "Web Developer"],
  autoStart: true,
  loop: true,
});

// Handle The Arrow Landing Page Click

$(".show_more").click(function() {
  $("body,html").animate(
    {
      scrollTop: $(".header").height(),
    },
    1000
  );
});

// Progress Bar Animation

$(window).scroll(function() {
  if ($(this).scrollTop() > $(".skills").offset().top - 500) {
    $(".progress_bar .progress_bar_inner .progress_count").each(function(
      index,
      item
    ) {
      $(this).animate(
        {
          width: $(this)
            .find(".value")
            .html(),
        },
        1500
      );
    });
  }
});

// Navbar link click

$(
  ".header .navbar-light .navbar-nav button,.header .navbar-light .navbar-nav .nav-link"
).click(function(e) {
  e.preventDefault();
});

$(".header .navbar-light .navbar-nav button").click(function() {
  $(".contact-form").fadeIn();
});

$(".contact-form i").click(function() {
  $(".contact-form").fadeOut();
});

// Add Fixed Class On Navbar On Scroll

$(window).scroll(function() {
  if ($(this).scrollTop() > 500) {
    $(".navbar-light").addClass("fixed");
  } else {
    $(".navbar-light").removeClass("fixed");
  }
});

// Add Fixed Class On Mobile Menu Click
$(".navbar-toggler").click(function() {
  if (!$(".navbar-light").hasClass("fixed")) {
    $(".navbar-light").addClass("fixed");
  }
});
