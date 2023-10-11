var cards = [
  {
    title: "My Portfolio",
    description: "My webapps portfolio",
    technologies: "HTML, CSS, Javascript",
    links: ["https://www.lucile.dev", "https://github.com/luluvann/portfolio-website"]
  },
  {
    title: "React Project with TypeScript and Redux",
    description: "A React Project developped in TypeScript using Redux",
    technologies: "HTML, Sass, TypeScript, Redux",
    links: ["https://luluvann.github.io/react-typescript-redux/", "https://github.com/luluvann/react-typescript-redux"]
  },
  {
    title: "Weather Web App",
    description: "A simple web app to see the current weather in a city",
    technologies: "React, Open Weather Map API",
    links: ["https://github.com/luluvann/react-weather-app", "https://luluvann.github.io/react-weather-app/website/?city=Montreal"]
  },
  {
    title: "Github Repos Lister",
    description: "List all the public repos of a given user",
    technologies: "React, Github API",
    links: ["https://github.com/luluvann/github-api", "https://luluvann.github.io/github-api"]
  },
  {
    title: "Password Generator",
    description: "Generate a random password based on criterias",
    technologies: "Vanilla Javascript",
    links: ["https://github.com/luluvann/password-generator", "https://luluvann.github.io/password-generator"]
  },
  {
    title: "Mobile App Landing Page",
    description: "A landing page to promote a mobile app",
    technologies: "HTML, CSS",
    links: ["https://github.com/luluvann/po-contacts", "https://www.pocontacts.app"]
  },
  {
    title: "Javascript Code Quiz",
    description: "A quiz to test coding knowledge",
    technologies: "jQuery, Bootstrap 4",
    links: ["https://github.com/luluvann/code-quiz", "https://luluvann.github.io/code-quiz"]
  },
  {
    title: "Weather Forecast Dashboard",
    description: "A simple weather dashboard to see current and weather forecast ",
    technologies: "jQuery, Bootstrap 4, Open Weather Map API",
    links: ["https://github.com/luluvann/weather-dashboard", "https://luluvann.github.io/weather-dashboard"]
  },
  {
    title: "Pro-Trader Simulator",
    description: "An app to simulate stock exchange trading (collaborative project)",
    technologies: "jQuery, Bootstrap 4, Server side APIs",
    links: ["https://github.com/luluvann/Pro-Trader", "https://phonix375.github.io/Pro-Trader"]
  },
  {
    title: "Live The Outdoors",
    description: "Full Stack Plateform to favorite hiking trails (collaborative project)",
    technologies: "Express.js, Handlebars, Connect-Session, Sequelize, MySQL",
    links: ["https://github.com/luluvann/live-the-outdoors"]
  },
  {
    title: "The Community Gallery",
    description: "Full Stack Plateform to vote or sell artworks (collaborative project)",
    technologies: "React.js, Express.js, GraphQL, MongoDB/Mongoose",
    links: ["https://github.com/deepikabekal/TCG"]
  },
]

var languagesTechs = [
  "JavaScript ES6",
  "TypeScript",
  "C#",
  "Python",
  "HTML",
  "Sass (CSS with superpowers)",
  "CSS",
  "SQL",
  "VBA",
]

var frontEndTechs = [
  "ReactJS",
  "Blazor",
  "Angular",
  "jQuery",
  "Bootstrap 4",
  "Handlebars",
]

var backEndTechs = [
  "Node.js",
  "Express.js",
  "Sequelize",
  "MySQL",
]

var databaseTechs = [
  "GraphQL",
  "Sequelize",
  "MySQL",
  "NoSQL",
  "MongoDB",
]

var othersTechs = [
  "Git", "Insomnia", "Postman",
  "Debugging", "Unit tests",
  "Documentation", "Agile", "Figma",
  "HubSpot dev"
]

$(window).resize(function () {
  if ($(window).width() >= 1052) {
    $("nav").css("display", "flex")
    $(".nav-layer").css("display", "none");
    $("#navbar-toggler i").attr("class", "fas fa-bars")
  } else if ($(window).width() < 1052) {
    $("nav").css("display", "none")
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

$(".nav-layer").on("click", function () {
  $(".nav-layer").css("display", "none");
  $("#navbar-toggler i").attr("class", "fas fa-bars")
})

function cardGenerator(cards) {
  for (var i = 0; i < cards.length; i++) {
    var cardObj = cards[i];
    var externalLink = cardObj.links[1] ? `<a href="${cardObj.links[1]}"><i class="fas fa-external-link-alt"></i></a>` : '';

    $("#project-cards").append(`
      <div class="card">
        <h4><a href="${cardObj.links[1]}">${cardObj.title}</a></h4>
        <p>${cardObj.description}</p>
        <h5>${cardObj.technologies}</h5>
        <div class="links">
          <a href="${cardObj.links[0]}"><i class="fab fa-github"></i></a>
          ${externalLink}
        </div>
      </div>
    `);
  }
}

function listGenerator(list, idName) {
  for (var i = 0; i < list.length; i++) {
    $(`#${idName}`).append(`
     <li>${list[i]}</li>
    `);
  }
}


cardGenerator(cards)
listGenerator(languagesTechs, "languagesTechs")
listGenerator(frontEndTechs, "frontEndTechs")
listGenerator(backEndTechs, "backEndTechs")
listGenerator(databaseTechs, "databaseTechs")
listGenerator(othersTechs, "othersTechs")