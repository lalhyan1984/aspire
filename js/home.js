$(document).ready(function () {

        /* Start Nice Scroll */

        $("body").niceScroll();

        $("body").niceScroll({

          cursorcolor:"aquamarine",

          cursorwidth:"16px"

        });

        /* End Nice Scroll */

      /* Start Nav Bar */

      $(window).on("scroll", function() {

          if ($(this).scrollTop() > 50) {

              $('header').addClass("sticky");

              $(".navbar").css("padding", "0px");

          } else {

              $('header').removeClass("sticky");

              $(".navbar").css("padding", "8px");

          }

      });

     /* Start Nav Bar */

      /* Start Change Colour From Option Box */

      $(".icon").click(function () {

                $(".option-box").toggleClass("option-box-class-one");

      });

      var colors = $(".option-box .colors ul li");

      colors.eq(0).css("backgroundColor", "#1ABC9C");

      colors.eq(1).css("backgroundColor", "#FF8A00");

      colors.eq(2).css("backgroundColor", "#B4DE50");

      colors.eq(3).css("backgroundColor", "#E54E53");

      colors.eq(4).css("backgroundColor", "#1ABAC8");

      colors.eq(5).css("backgroundColor", "#159EEE");

      colors.click(function () {

            $("link[href*='color']").attr("href", $(this).attr("data-value"));

      });

       /* End Change Colour From Option Box */

       /* Start Create The Loading Screen */

       $(window).on("load", function () {

            $(".loading .load").delay(1000).fadeOut(1000, function () {

                  $("body").css("overflow", "auto");

                  $(this).parent().fadeOut(1000, function () {

                        $(this).remove();

                  });

            });

       });

        /* End Create The Loading Screen */

});
