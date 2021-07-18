window.addEventListener("scroll", (e) => {
  const nav = document.querySelector(".navbar");
  if (window.pageYOffset > 100) {
    nav.classList.add("add-shadow");
  } else {
    nav.classList.remove("add-shadow");
  }
})

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