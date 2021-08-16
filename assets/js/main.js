window.addEventListener("scroll", (e) => {
  const nav = document.querySelector(".navbar");
  if (window.pageYOffset > 100) {
    nav.classList.add("add-shadow");
  } else {
    nav.classList.remove("add-shadow");
  }
})

$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop : $($(this).attr('href')).offset().top,
    },500, 'linear')
})

document.onkeydown = function (e) {
  if (e.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    return false;
  }
};

function clickIE() {
  if (document.all) {
    alert(message);
    return false;
  }
}
function clickNS(e) {
  if (document.layers || (document.getElementById && !document.all)) {
    if (e.which == 2 || e.which == 3) {
      return false;
    }
  }
}
if (document.layers) {
  document.captureEvents(Event.MOUSEDOWN);
  document.onmousedown = clickNS;
} else {
  document.onmouseup = clickNS;
  document.oncontextmenu = clickIE;
}

document.oncontextmenu = new Function("return false");

var addClassOnScroll = function () {
  var windowTop = $(window).scrollTop();
  $("section[id]").each(function (index, elem) {
    var offsetTop = $(elem).offset().top;
    var outerHeight = $(this).outerHeight(true);

    if (windowTop > offsetTop - 50 && windowTop < offsetTop + outerHeight) {
      var elemId = $(elem).attr("id");
      $("nav ul li a.active").removeClass("active");
      $("nav ul li a[href='#" + elemId + "']").addClass("active");
    }
  });
};

$(function () {
  $(window).on("scroll", function () {
    addClassOnScroll();
  });
});

$(document).scroll(function () {
  var scrollDistance = $(this).scrollTop();
  if (scrollDistance > 100) {
    $("#button").fadeIn();
    $("#btn-mode").fadeIn();
  } else {
    $("#button").fadeOut();
    $("#btn-mode").fadeOut();
  }
});

var btn = $("#button");
var btn1 = $("#btn-mode");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
    btn1.addClass("show");
  } else {
    btn.removeClass("show");
    btn1.removeClass("show");
  }
});

btn1.click(function () {
  if ($("body").hasClass("dark-mode")) {
    $("body").removeClass("dark-mode");
    $(".cpp").attr("src", "assets/images/cpp.svg");
    $(".rt").removeClass("flip");
  } else {
    $("body").addClass("dark-mode");
    $(".cpp").attr("src", "assets/images/cpp-2.svg");
    $(".rt").addClass("flip");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "200");
});
