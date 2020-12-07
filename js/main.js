$(function () {
  'use strict';

  $("#cont").mixItUp();

  $(".shuffle li").click(function () {
    $(this).addClass("selected").siblings().removeClass("selected");
  });

  $(".navbar-nav li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
  $(".carousel").carousel({
    interval: 50000,
  });

  $(window).on("scroll", function (e) {
    var sc = $(window).scrollTop();
    sc >= 100
      ? $(".navbar").css("background-color", "rgba(0,0,0,0.7)")
      : $(".navbar").css("background-color", "transparent");
  });

  $(".skill-per").each(function () {
    var per = $(this).attr("per");
    $(this).css("width", per + "%");
    $({ animatedValue: 0 }).animate(
      { animatedValue: per },
      {
        duration: 1000,
        stop: function () {
          $(this).attr("per", Math.floor(this.animatedValue));
        },
      }
    );
  });

  $(".count").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 2000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });

  $(".clients-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 2,
      },
      768: {
        items: 4,
      },
      900: {
        items: 6,
      },
    },
  });

  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1,
  });

  var scrollBtn = $("#scroll-to-top");
  $(window).on("scroll", function () {
    if ($(this).scrollTop() >= 700) {
      scrollBtn.show();
    } else {
      scrollBtn.hide();
    }
  });

  scrollBtn.click(function () {
    $("html,body").animate({ scrollTop: 0 }, 600);
  });
  
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });
});
