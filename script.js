//Variables
//node variables
const project1 = document.getElementById("project1");
const project2 = document.getElementById("project2");
const project3 = document.getElementById("project3");

const project1_dialog = document.getElementById('project1-dialog');
const project2_dialog = document.getElementById('project2-dialog');
const project3_dialog = document.getElementById('project3-dialog');

const aside = document.getElementsByTagName("aside")[0];
const navbar = document.querySelector("nav ul");

const body = document.body;

//navbar nodes
const aboutMe = document.getElementById("about-me");
const home = document.getElementById("home");
const contact = document.getElementById("contact");
const projects = document.getElementById("projects");

// left-aside nodes
const imageContainer = document.querySelector(".image-container");

const knowledgeList = document.getElementById("knowledge-list");

const blueShape = document.getElementById("blue-shape");
const redShape = document.getElementById("red-shape");
const yellowShape = document.getElementById("yellow-shape");

const cssBadge = document.getElementById("css");

//about-me nodes
const aboutMeKnoledgeList = document.getElementById('about-me-knowledge-list');
const aboutMeCSS = document.querySelector('.about-me-knowledge-list a .css');

// Text objects

const allTextContent = {
  about_me: {
    id: 'about_me',
    color: "#87cefa",
    title: "Me and the IT world",
    article:
      "I want to change careers. I am interested in all IT jobs where there is an opportunity to develop and learn. I want a job related to programming, so that I can later get a job as a junior programmer.",
  },
  home: {
    id: 'home',
    color: "#a9e362",
    title: "Welcome to my page!",
    article:
      "My name is Zoltán Géza Máté. I learn programming to become a web-developer. Let's explore together my custom pjojects! let me show you what I already know and what I plan to learn, and a little about who I am.",
  },
  contact: {
    id: 'contact',
    color: "#a9e362",
    title: "Welcome to my page!",
    article:
      "My name is Zoltán Géza Máté. I learn programming to become a web-developer. Let's explore together my custom projects! let me show you what I already know and what I plan to learn, and a little about who I am.",
  },
  projects: {
    id: 'projects',
    color: "#a9e362",
    title: "My custom projects",
    article:
      "These are my custom projects. No toDo lists, no wheater apps, only my own ideas.",
  },
};


//animation variables
var timingLogoAnimation; // contains setInterval to animate CSS-logo
var isCycle; // Boolean checking if project cycle is needed

//Styling functions

function logoShapeClearer() {
  setIsCycleFalse();
  blueShape.classList = "";
  yellowShape.classList = "";
  redShape.classList = "";
}

function startingLogo() {
  blueShape.classList.add("shapes", "starting_blue");
  yellowShape.classList.add("shapes", "starting_yellow");
  redShape.classList.add("shapes", "starting_red");
}

function circlesLogo() {
  blueShape.classList.add("circle", "circle_blue");
  yellowShape.classList.add("circle", "circle_yellow");
  redShape.classList.add("circle", "circle_red");
}

function homeLogo() {
  blueShape.classList.add("shapes", "home_blue");
  yellowShape.classList.add("shapes", "home_yellow");
  redShape.classList.add("shapes", "home_red");
}

function projectLogo() {
  blueShape.classList.add("project_blue", "shapes");
  yellowShape.classList.add("project_yellow", "shapes");
  redShape.classList.add("project_red", "shapes");
}

function reactLogo() {
  blueShape.classList.add("shapes", "react_shape", "react_shape__blue");
  yellowShape.classList.add("shapes", "react_shape", "react_shape__yellow");
  redShape.classList.add("shapes", "react_shape", "react_shape__red");
}

function jsLogo() {
  blueShape.classList.add("Js_shape__blue", "shapes");
  yellowShape.classList.add("Js_shape__yellow", "shapes");
  redShape.classList.add("Js_shape__red", "shapes");
}

function htmlLogo() {
  blueShape.classList.add("Html_shape__blue", "shapes");
  yellowShape.classList.add("Html_shape__yellow", "shapes");
  redShape.classList.add("Html_shape__red", "shapes");
}

function diceLogo() {
  logoShapeClearer();
  blueShape.classList.add("dice_blue", "shapes");
  yellowShape.classList.add("dice_yellow", "shapes");
  redShape.classList.add("dice_red", "shapes");
}


function cssAnimation() {
  clearTimeout(timingLogoAnimation);
  logoShapeClearer();
  startingLogo();
}

function personLogo() {
  blueShape.classList.add("person_shape__blue", "shapes");
  yellowShape.classList.add("person_shape__yellow", "shapes");
  redShape.classList.add("person_shape__red", "shapes");
}

function contactLogo() {
  blueShape.classList.add("contact_shape__blue", "shapes");
  yellowShape.classList.add("contact_shape__yellow", "shapes");
  redShape.classList.add("contact_shape__red", "shapes");
}

function animateWholeLogo(ms) {
  let cycleCounter = 1;
  function animateLogoShape(shape, startingFrame) {
    let usedFrameNum = cycleCounter + startingFrame;

    const animator = (node) => {
      node.classList = "";
      node.classList.add(
        `animate-movie-picture_frame${(usedFrameNum % 4) + 1}`,
        "shapes"
      );
    };

    animator(shape);
  }

  const animateRepeat = () => {
    animateLogoShape(redShape, 0);
    animateLogoShape(yellowShape, 1);
    animateLogoShape(blueShape, 2);

    cycleCounter++;//project

    console.log(cycleCounter);
  };

  timingLogoAnimation = window.setInterval(animateRepeat, ms);
}

function focused(node) {
  node.style.width = "90%";
  node.style.height = "90%";
  node.style.opacity = 1;
  node.parentElement.style.width = "var(--project-container-focused-wdth)";
  node.parentElement.style.height = "var(--project-container-focused-ht)";
}

function unFocused(node) {
  node.style.width = "93%";
  node.style.height = "90%";
  node.style.opacity = 0.3;
  node.parentElement.style.width = "var(--project-container-unfocused-wdth)";
  node.parentElement.style.height = "var(--project-container-unfocused-ht)";
}
//EventListeners

aside.addEventListener("mouseover", function (event) {
  if (isCycle) {
    unFocused(project1);
    unFocused(project2);
    unFocused(project3);
    isCycle = false;
  }

  switch (event.target.parentElement.id) {
    case "project1":
      clearTimeout(timingLogoAnimation);
      logoShapeClearer();
      reactLogo();
      focused(project1);
      break;

    case "project2":
      clearTimeout(timingLogoAnimation);
      logoShapeClearer();
      jsLogo();
      focused(project2);
      break;

    case "project3":
      clearTimeout(timingLogoAnimation);
      logoShapeClearer();
      htmlLogo();
      focused(project3);
      break;

    default:
      break;
  }
});

imageContainer.addEventListener("mouseover", function (event) {
  console.log(event.target);
  logoShapeClearer();
  personLogo();
});

aside.addEventListener("mouseout", function (event) {
  switch (event.target.parentElement.id) {
    case "project1":
      unFocused(project1);
      break;

    case "project2":
      unFocused(project2);
      break;

    case "project3":
      unFocused(project3);
      break;

    default:
      break;
  }
});

// Animated CSS logo
cssBadge.addEventListener("mouseover", function () {
  animateWholeLogo(330);
});

cssBadge.addEventListener("mouseout", cssAnimation);

aboutMeCSS.addEventListener("mouseover", function () {
  animateWholeLogo(330);
});

aboutMeCSS.addEventListener("mouseout", cssAnimation);


knowledgeList.addEventListener("mouseover", mouseOverLogoListener); 

aboutMeKnoledgeList.addEventListener("mouseover",mouseOverLogoListener);

function mouseOverLogoListener (event) {
  switch (event.target.dataset.knowledge) {
    case "html5":
      logoShapeClearer();
      clearTimeout(timingLogoAnimation);
      htmlLogo();
      break;

    // A css-t a mouseOut event miatt külön csináltam meg egyelőre.

    case "Js":
      logoShapeClearer();
      clearTimeout(timingLogoAnimation);
      jsLogo();
      break;

    case "React":
      logoShapeClearer();
      clearTimeout(timingLogoAnimation);
      reactLogo();
      break;

    default:
      console.log("No event to trigger.");
      break;
  }
};

// Navbar event Listeners

navbar.addEventListener("mouseover", function (e) {
  switch (e.target.parentElement.id) {
    case "home":
      logoShapeClearer();
      clearTimeout(timingLogoAnimation);
      homeLogo();
      break;
    case "contact":
      logoShapeClearer();
      clearTimeout(timingLogoAnimation);
      contactLogo();
      break;
    case "about-me":
      logoShapeClearer();
      clearTimeout(timingLogoAnimation);
      personLogo();
      break;
    case "projects":
      logoShapeClearer();
      clearTimeout(timingLogoAnimation);
      projectLogo();
      break;

    default:
      console.log("nothing to show you.");
      break;
  }
});

//Project rotating

isCycle = true;

function setIsCycleFalse() {
  isCycle = false;
  unFocused(project1);
  unFocused(project2);
  unFocused(project3);
}

function projectCycle(delay) {
  const clearShapeKeepCycle = () => {
    blueShape.classList = "";
    yellowShape.classList = "";
    redShape.classList = "";
  };

  setTimeout(function () {
    if (isCycle) {
      clearShapeKeepCycle();
      reactLogo();
      focused(project1);
    }
  }, delay);
  setTimeout(function () {
    if (isCycle) {
      unFocused(project1);
      clearShapeKeepCycle();
      htmlLogo();
      focused(project2);
    }
  }, delay * 2);
  setTimeout(function () {
    if (isCycle) {
      unFocused(project2);
      clearShapeKeepCycle();
      jsLogo();
      focused(project3);
    }
  }, delay * 3);
  setTimeout(function () {
    unFocused(project3);
    if (isCycle) {
      projectCycle(delay);
    }
  }, delay * 4);
}

//random logo 
const allLogos = {
  1: startingLogo,
  2: circlesLogo,
  3: homeLogo,
  4: projectLogo,
  5: jsLogo,
  6: htmlLogo,
  7: reactLogo,
  8: personLogo,
  9: contactLogo,
  10: projectLogo,
  11: function () {animateWholeLogo(330);},
  12: diceLogo,
}

let logosLeft = [];

function randomLogo(){
  logoShapeClearer();
  cssAnimation();
  if(logosLeft.length==0){logosLeft = Object.keys(allLogos).map((_key,index)=>index+1)};
  let logoToshow = Math.floor(Math.random()*logosLeft.length);
  console.log('logoToshow: '+ logoToshow);
  allLogos[logosLeft[logoToshow]]();
  logosLeft.splice(logoToshow,1);
}


// Functions to run after the page is loaded
projectCycle(2500);



// Youtube API 

var player1, player2, player3;
var stopButtonVideo1 = document.getElementById("close-project1");
var stopButtonVideo2 = document.getElementById("close-project2");
var stopButtonVideo3 = document.getElementById("close-project3");

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
    // create the global player from the specific iframe (#video)
    player1 = new YT.Player('video', {
        events: {
            // call this function when player is ready to use
            'onReady': onPlayerReady1
        }
    });
    player2 = new YT.Player('video2', {
      events: {
          // call this function when player is ready to use
          'onReady': onPlayerReady2
      }
  });
    player3 = new YT.Player('video3',{events:{'onReady': onPlayerReady3}})
  
}

function testAlert(){alert('Test!')}
function onPlayerReady1(event) {
  stopButtonVideo1.addEventListener("click", function() {
      player1.stopVideo();
  });
}
function onPlayerReady2(event) {
  stopButtonVideo2.addEventListener("click", function() {
      player2.stopVideo();
  });
}
function onPlayerReady3(event) {
  stopButtonVideo3.addEventListener("click", function() {
      player3.stopVideo();
  });
}


// Copy email to clipboard
function myEmail() {
  const email = ['m', 'a', 't', 'e', '.', 'z', 'o', 'l', 't', 'a', 'n', '.', 'g', 'e', 'z', 'a', '+', 'I', 'T', '@', 'g', 'm', 'a', 'i', 'l', '.', 'c', 'o', 'm'];
  return email.join('');
  }

function copyEmailToClipboard(){
navigator.clipboard.writeText(myEmail()).then(() => {
  document.getElementById('copy-to-clipboard').innerText ='Copied to clipboard.';
  
},() => {
  document.getElementById('copy-to-clipboard').innerText = 'Failed to copy.';
  
});}

function resetText(){
  document.getElementById('copy-to-clipboard').innerText ='Copy to clipboard.';
}