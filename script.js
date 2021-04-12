var cards = [
  {
    title: "Weather Web App",
    description: "A simple web app to see the current weather in a city",
    technologies: "HTML, CSS, React, Node.js",
    links: ["github","deployed"]
  },
  {
    title: "Title",
    description: "Description",
    technologies: "Technologies",
    links: ["github","deployed"]
  },
  {
    title: "Title",
    description: "Description",
    technologies: "Technologies",
    links: ["github","deployed"]
  },
  {
    title: "Title",
    description: "Description",
    technologies: "Technologies",
    links: ["github","deployed"]
  },
]

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

function cardGenerator(cards){
  for(var i = 0; i < cards.length ; i++){
    console.log(cards)
    var cardObj = cards[i]
    $("#project-cards").append(`
      <div class="card">
        <h4><a>${cardObj.title}</a></h4>
        <p>${cardObj.description}</p>
        <h5>${cardObj.technologies}</h5>
        <div class="links">
          <i class="fab fa-github"><a href=${cardObj.links[1]}></a></i> 
          <i class="fas fa-external-link-alt"><a href=${cardObj.links[2]}></a></i>
        </div>
      </div>
  `)
  }
}

cardGenerator(cards)
console.log(cards)