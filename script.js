$(window).resize(function(){
    if ($(window).width() > 1052) {
        $("nav").css("display","flex")
        $(".nav-layer").css("display", "none");
        $("#navbar-toggler i").attr("class", "fas fa-bars")
      } else if ($(window).width() <= 1052) {
        $("nav").css("display","none")
      }
  });


$("#navbar-toggler").on("click", "i", function () {
  if ($(this).attr("class") == "fas fa-bars") {
    $(this).attr("class", "fas fa-times");
    $(".nav-layer").css("display", "flex");
  } else if ($(this).attr("class") == "fas fa-times") {
    $(this).attr("class", "fas fa-bars");
    $(".nav-layer").css("display", "none");
  }
});

$(".nav-layer").on("click", function(){
  $(".nav-layer").css("display", "none");
  $("#navbar-toggler i").attr("class", "fas fa-bars")
})