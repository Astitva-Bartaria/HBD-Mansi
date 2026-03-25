$(window).load(function () {
  $(".loading").fadeOut("fast");
  $(".container").fadeIn("fast");
});

$("document").ready(function () {
  var vw;

  // Helper function to handle balloon alignment
  function alignBalloons() {
    var vw = $(window).width() / 2;
    var isMobile = $(window).width() < 500;

    // Spacing: 45px for mobile, 100px for desktop
    var spacing = isMobile ? 45 : 100;

    // Offset: 25px for mobile, 50px for desktop (Half of balloon width)
    var balloonWidthOffset = isMobile ? 25 : 50;

    // Vertical Position: Increase this to move them lower (e.g., 250 or 300)
    var topPos = isMobile ? 220 : 300;

    // Left Side (Negative Spacing)
    $("#b11")
      .stop()
      .animate(
        { top: topPos, left: vw - spacing * 3 - balloonWidthOffset },
        500
      );
    $("#b22")
      .stop()
      .animate(
        { top: topPos, left: vw - spacing * 2 - balloonWidthOffset },
        500
      );
    $("#b33")
      .stop()
      .animate(
        { top: topPos, left: vw - spacing * 1 - balloonWidthOffset },
        500
      );

    // Center Balloon (The 'N' or middle element)
    $("#b44")
      .stop()
      .animate({ top: topPos, left: vw - balloonWidthOffset }, 500);

    // Right Side (Positive Spacing)
    $("#b55")
      .stop()
      .animate(
        { top: topPos, left: vw + spacing * 1 - balloonWidthOffset },
        500
      );
    $("#b66")
      .stop()
      .animate(
        { top: topPos, left: vw + spacing * 2 - balloonWidthOffset },
        500
      );
    $("#b77")
      .stop()
      .animate(
        { top: topPos, left: vw + spacing * 3 - balloonWidthOffset },
        500
      );
  }

  $(window).resize(function () {
    if ($("#b11").length) {
      alignBalloons();
    }
  });

  $("#turn_on").click(function () {
    $("#bulb_yellow").addClass("bulb-glow-yellow");
    $("#bulb_red").addClass("bulb-glow-red");
    $("#bulb_blue").addClass("bulb-glow-blue");
    $("#bulb_green").addClass("bulb-glow-green");
    $("#bulb_pink").addClass("bulb-glow-pink");
    $("#bulb_orange").addClass("bulb-glow-orange");
    $("body").addClass("peach");
    $(this)
      .fadeOut("slow")
      .delay(5000)
      .promise()
      .done(function () {
        $("#play").fadeIn("slow");
      });
  });

  $("#play").click(function () {
    var audio = $(".song")[0];
    audio.play();
    $("#bulb_yellow").addClass("bulb-glow-yellow-after");
    $("#bulb_red").addClass("bulb-glow-red-after");
    $("#bulb_blue").addClass("bulb-glow-blue-after");
    $("#bulb_green").addClass("bulb-glow-green-after");
    $("#bulb_pink").addClass("bulb-glow-pink-after");
    $("#bulb_orange").addClass("bulb-glow-orange-after");
    $("body").css("background-color", "#FFF");
    $("body").addClass("peach-after");
    $(this)
      .fadeOut("slow")
      .delay(6000)
      .promise()
      .done(function () {
        $("#bannar_coming").fadeIn("slow");
      });
  });

  $("#bannar_coming").click(function () {
    $(".bannar").addClass("bannar-come");
    $(this)
      .fadeOut("slow")
      .delay(6000)
      .promise()
      .done(function () {
        $("#balloons_flying").fadeIn("slow");
      });
  });

  // Refactored Balloon Loop Logic
  function loopBalloon(id) {
    var winWidth = $(window).width();
    var winHeight = $(window).height();

    // Ensure balloons stay inside the screen (subtract balloon width/height)
    var randleft = (winWidth - 70) * Math.random();
    var randbottom = (winHeight / 1.5) * Math.random();

    $(id).animate({ left: randleft, bottom: randbottom }, 10000, function () {
      loopBalloon(id);
    });
  }

  $("#balloons_flying").click(function () {
    $(".balloon-border").animate({ top: -500 }, 8000);
    $("#b1,#b4,#b5,#b7").addClass("balloons-rotate-behaviour-one");
    $("#b2,#b3,#b6").addClass("balloons-rotate-behaviour-two");

    // Start loops for all balloons
    loopBalloon("#b1");
    loopBalloon("#b2");
    loopBalloon("#b3");
    loopBalloon("#b4");
    loopBalloon("#b5");
    loopBalloon("#b6");
    loopBalloon("#b7");

    $(this)
      .fadeOut("slow")
      .delay(5000)
      .promise()
      .done(function () {
        $("#cake_fadein").fadeIn("slow");
      });
  });

  $("#cake_fadein").click(function () {
    $(".cake").fadeIn("slow");
    $(this)
      .fadeOut("slow")
      .delay(3000)
      .promise()
      .done(function () {
        $("#light_candle").fadeIn("slow");
      });
  });

  $("#light_candle").click(function () {
    $(".fuego").fadeIn("slow");
    $(this)
      .fadeOut("slow")
      .promise()
      .done(function () {
        $("#wish_message").fadeIn("slow");
      });
  });

  $("#wish_message").click(function () {
    // Stop current flying animations
    $("#b1,#b2,#b3,#b4,#b5,#b6,#b7").stop();

    // Update IDs to the "aligned" versions
    $("#b1").attr("id", "b11");
    $("#b2").attr("id", "b22");
    $("#b3").attr("id", "b33");
    $("#b4").attr("id", "b44");
    $("#b5").attr("id", "b55");
    $("#b6").attr("id", "b66");
    $("#b7").attr("id", "b77");

    alignBalloons();

    $(".balloons").css("opacity", "0.9");
    $(".balloons h2").fadeIn(3000);
    $(this)
      .fadeOut("slow")
      .delay(3000)
      .promise()
      .done(function () {
        $("#story").fadeIn("slow");
      });
  });

  $("#story").click(function () {
    $(this).fadeOut("slow");
    $(".cake")
      .fadeOut("fast")
      .promise()
      .done(function () {
        $(".message").fadeIn("slow");
      });

    function msgLoop(i) {
      $("p:nth-child(" + i + ")")
        .fadeOut("slow")
        .delay(800)
        .promise()
        .done(function () {
          i = i + 1;
          $("p:nth-child(" + i + ")")
            .fadeIn("slow")
            .delay(2000);
          if (i == 50) {
            $("p:nth-child(49)")
              .fadeOut("slow")
              .promise()
              .done(function () {
                $(".cake").fadeIn("fast");
              });
          } else {
            msgLoop(i);
          }
        });
    }
    msgLoop(0);
  });
});
