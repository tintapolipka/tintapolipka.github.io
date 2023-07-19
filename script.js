//Variables
//node variables

const project1 = document.getElementById("project1");
const project2 = document.getElementById("project2");
const project3 = document.getElementById("project3");

const project1_dialog = document.getElementById('project1-dialog');
const project2_dialog = document.getElementById('project2-dialog');
const project3_dialog = document.getElementById('project3-dialog');

const aside = document.getElementsByTagName("aside")[0];

const navTag =  document.getElementsByTagName('nav')[0];
const navbar = document.querySelector("nav ul");

const body = document.body;
const mainTag =  document.getElementsByTagName('main')[0];

//navbar nodes
const aboutMe = document.getElementById("about-me");
const home = document.getElementById("home");
const contact = document.getElementById("contact");
const projects = document.getElementById("projects");

// left-aside nodes
const imageContainer = document.querySelector(".image-container");
const cssBadge = document.getElementById("css");
const knowledgeList = document.getElementById("knowledge-list");

// logo shape div nodes
const blueShape = document.getElementById("blue-shape");
const redShape = document.getElementById("red-shape");
const yellowShape = document.getElementById("yellow-shape");
// logo shape div -htmlcollection nodes
const allBlueShapes = document.querySelectorAll(".blue-shape");
const allRedShapes = document.querySelectorAll(".red-shape");
const allYellowShapes = document.querySelectorAll(".yellow-shape");

//about-me nodes
const aboutMeKnoledgeList = document.getElementById('about-me-knowledge-list');
const aboutMeCSS = document.querySelector('.about-me-knowledge-list a .css');

// project card nodes
const project1Card= document.getElementById('project1-card');
const project2Card= document.getElementById('link-to-project2-card');
const project3Card= document.getElementById('link-to-project3-card');

//animation variables
var timingLogoAnimation; // contains setInterval to animated logos
var isCycle; // Boolean checking if project cycle is needed

//Styling functions

function logoShapeClearer() {
  setIsCycleFalse();
  blueShape.classList = "";
  yellowShape.classList = "";
  redShape.classList = "";
}

function anyLogo(node,logotype,color) {
  node.classList = '';
  node.classList = `${logoStyles[logotype]}${color} ${color}-shape`;
}
function iterateLogoNodes(nodeList,logotype,color){
  for(let i = 0; i<nodeList.length; i++){
    anyLogo(nodeList[i],logotype,color);
  }
}

function startingLogo(){
  iterateLogoNodes(allBlueShapes,'startingLogo','blue');
  iterateLogoNodes(allRedShapes,'startingLogo','red');
  iterateLogoNodes(allYellowShapes,'startingLogo','yellow');
}

function circlesLogo(){
  iterateLogoNodes(allBlueShapes,'circlesLogo','blue');
  iterateLogoNodes(allRedShapes,'circlesLogo','red');
  iterateLogoNodes(allYellowShapes,'circlesLogo','yellow');
}

const logoStyles = {
  clear:'',
  startingLogo: "shapes starting_",
  circlesLogo: "shapes circle circle_", 
  homeLogo: "shapes home_",
  projectLogo:  "shapes project_",
  reactLogo: "shapes react_shape react_shape__",
  jsLogo: "shapes Js_shape__",
  htmlLogo: "shapes Html_shape__",
  diceLogo: "shapes dice_",
  personLogo: "shapes person_shape__",
  contactLogo: "shapes contact_shape__",
  cssLogo: "animate-movie-picture_frame",
}

function homeLogo(){
  iterateLogoNodes(allBlueShapes,'homeLogo','blue');
  iterateLogoNodes(allRedShapes,'homeLogo','red');
  iterateLogoNodes(allYellowShapes,'homeLogo','yellow');
}

function projectLogo() {
  iterateLogoNodes(allBlueShapes,'projectLogo','blue');
  iterateLogoNodes(allRedShapes,'projectLogo','red');
  iterateLogoNodes(allYellowShapes,'projectLogo','yellow');
}

function reactLogo() {
  iterateLogoNodes(allBlueShapes,'reactLogo','blue');
  iterateLogoNodes(allRedShapes,'reactLogo','red');
  iterateLogoNodes(allYellowShapes,'reactLogo','yellow');
}

function jsLogo() {
  iterateLogoNodes(allBlueShapes,'jsLogo','blue');
  iterateLogoNodes(allRedShapes,'jsLogo','red');
  iterateLogoNodes(allYellowShapes,'jsLogo','yellow');
}

function htmlLogo() {
  iterateLogoNodes(allBlueShapes,'htmlLogo','blue');
  iterateLogoNodes(allRedShapes,'htmlLogo','red');
  iterateLogoNodes(allYellowShapes,'htmlLogo','yellow');
}

function diceLogo() {
  iterateLogoNodes(allBlueShapes,'diceLogo','blue');
  iterateLogoNodes(allRedShapes,'diceLogo','red');
  iterateLogoNodes(allYellowShapes,'diceLogo','yellow');
}

function cssAnimation() {
  clearTimeout(timingLogoAnimation);
  logoShapeClearer();
  startingLogo();
}

function personLogo() {
  iterateLogoNodes(allBlueShapes,'personLogo','blue');
  iterateLogoNodes(allRedShapes,'personLogo','red');
  iterateLogoNodes(allYellowShapes,'personLogo','yellow');
}

function contactLogo() {
  iterateLogoNodes(allBlueShapes,'contactLogo','blue');
  iterateLogoNodes(allRedShapes,'contactLogo','red');
  iterateLogoNodes(allYellowShapes,'contactLogo','yellow');
}

function animateWholeLogo(ms) {
  let cycleCounter = 1;
  let classSet = "animate-movie-picture_frame"
  function animateLogoShape(shape, startingFrame, classSet, color) {
    let usedFrameNum = cycleCounter + startingFrame;

    const animator = (nodeList, classSet, color)=>{
      for(let i = 0; i<nodeList.length; i++){
        
        nodeList[i].classList = '';
        nodeList[i].classList = `${classSet}${(usedFrameNum % 4) + 1} ${color}-shape shapes`;
      }
    };

    animator(shape,classSet,color);
  }

  const animateRepeat = () => {
    animateLogoShape(allRedShapes, 0, classSet, 'red');
    animateLogoShape(allYellowShapes, 1, classSet, 'yellow');
    animateLogoShape(allBlueShapes, 2, classSet, 'blue');

    cycleCounter++;

    console.log(cycleCounter);
  };

  timingLogoAnimation = window.setInterval(animateRepeat, ms);
}


// PROJECTS Rotating

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
  document.getElementById('copy-to-clipboard').innerText = lang=='hu'? 'Copied to clipboard.': 'A vágólapra másolva.';
  
},() => {
  document.getElementById('copy-to-clipboard').innerText = lang=='hu'? 'Failed to copy.':'Másolás sikertelen.';
  
});}

function resetText(){
  document.getElementById('copy-to-clipboard').innerText = lang=='hu'? 'Copy to clipboard.': 'Vágólapra másolás.';
}

//Switching language
const recurringTxtToChange = {
  sourceCode: {en:'Source code on GitHub', hu: 'Forráskód a GitHub-on', node: 'span[class="source-code-on-github"]', type:'text'},
  toSeeCerificate: {en: "Click to see the certificate", hu: "A bizonyítvány megtekintéséhez kattints ide!", node:'div', type:'title' },
  reactTitle: {hu:'Folyamatban lévő képzés leírása', type: 'title', en:"Click here to see my course in progress", node: `div`},
  watchTheVideo: {en: "Watch a video on Youtube!", hu: "Nézz meg róla egy videót a Youtube-on!", node: `a`, type:'title'},
  diceTitle: {en: "Change to a random logo", hu: "Véletlenszerű logo megjelenítése", node:`div`, type:'title'},
  ClckThisDice: {en: "Click this Dice!", hu:"Kattints a kockára!", type:'title', node:`div`},
  playTheGame: {en:"Play the game!", hu: 'Játssz egyet!', type:'title',  node:`a`},
  tryPixbox: {en: "Try PixBox!", hu: "Próbáld ki a PixBox-ot!", type: "title", node:`a`},
  YTvideoPlayer: {en: "YouTube video player", hu:'YouTube videólejátszó', node:`iframe`, type:'title'},
  myProfile_GitHub: {en:"My profile on GitHub", hu: "Profilom a GitHub-on", node: `i`, type: 'title', },
  myProfile_Facebook: {en:"My profile on Facebook", hu: "Profilom a Facebook-on", node: `i`, type: 'title', },
  myProfile_YouTube: {en:"My channel on Youtube", hu: "YouTube csatornám", node: `i`, type: 'title', },
}

// Text objects

const allTextContent = {
  about_me: {
    navbar: {en:'ABOUT ME', hu:'RÓLAM', node:'#about-me > a',color: "#87cefa",},
    
    h1: {en:"Me and the IT world",hu: 'Az IT és én', node:"#article-h1-about-me"},
    article:
      {en:"I want to change careers. I am interested in all IT jobs where there is an opportunity to develop and learn. I want a job related to programming, so that I can later get a job as a junior programmer.",
       hu: "Pályaváltás előtt állok. Minden IT-val kapcsolatos munka érdekel, amelynek során tanulni és fejlődni lehet. A célom, hogy idővel kizárólag programozással foglalkozhassak.",
       node: '#article-text-about-me',
      },
    certificates:{en:'I now have the following certificates:', hu:'Jelenleg a következő bizonyítványaim vannak:', node: ".first-row"},
    check_social_media:{en: "Check out my social media:", hu:'Nézd meg a közösségi média oldalaimat', node:"#check-social-media"},
  },
  home: {
    navbar:{ en:'HOME', hu: 'KEZDŐLAP' , node: '#home > a', color: "#a9e362",},
    h1: {en:"Welcome to my page!", hu: 'Üdvözöllek az oldalmon!',node:"#article-h1",},
    article:
      {en: "My name is Zoltán Géza Máté. I learn programming to become a web-developer. Let's explore together my custom pjojects! Let me show you what I already know and what I plan to learn, and a little about who I am.",
      hu: "A nevem Máté Zoltán Géza. Programozást tanulok, hogy idővel web-fejlesztővé válhassak. Nézd meg az egyedi projektjeimet! Ismerd meg, hogy mi az amit már tudok, és mi az amit a közeljövőben fogok megtanulni!",
      node: "#article-text-home",
    },
    diceRoll: {en:'Click this Dice! Something AWSOME going to happen...', hu: 'Kattints a dobókockára! Valami érdekes fog történni...', node:'#click-the-dice'}
  },
  contact: {
    navbar:{ en:'CONTACT', hu: 'KAPCSOLAT' , node: '#contact > a', color: "#a9e362",},
    
    h1: {en: "Contact me NOW!", hu: "Keress fel most!", node: '#article-h1-contact'},
    article:
      {en: `If you need a person who is open to learning about any IT field, willing to learn and develop, and thinking about long-term commitment, then you are looking for me! Write an email and let's arrange an interview!`,
      hu: "Ha olyan emberre van szükséged, aki nyitott bármelyik IT terület megismerésére, szívesen tanul és fejlődik, és hosszú távú elköteleződésben gondolkodik, akkor engem keresel! Írj emailt és egyeztessünk egy interjút!",
      node: '#article-text-contacts',
    },
    clipboardPopUp: {en:'Copy to clipboard.', hu:'Vágólapra másolás.', node:'#copy-to-clipboard',},
    downloadCV: {en: 'Download my CV!', hu:' Töltsd le az önéletrajzom!', node:'#download-cv'}
  },
  projects: {
    navbar:{ en:'PROJECTS', hu: 'PROJEKTEK' , node: '#projects > a', color: "#a9e362",},
    
    h1: {en:"My custom projects",hu:'Egyedi projektjeim', node:'#article-h1-projects'},
    project1_h3:{en:'My Browser Based Game',hu:'A böngészős játékom',node:'#project1-card > h3'},
    project1_text:
      {en: "A JavaScript powered game on random-generated maps width oldschool pixel-like graphics.", 
      hu: "JavaScript alapú játék random generált pályákkal és oldschool pixel-szerű grafikával.", 
      node: '#project1-card > p'
    },
    githubPages_project1_link:{
      en:"Play it!", hu:"Játssz vele!", node:'#play-Human-mineseeker-text',
    },
    project2_h3:{en:'SVG pixel graphic creator app',hu:'SVG pixelgrafika készítő app',node:'#project2-card > h3'},
    project2_text:
      {en: "This app helps you draw small pixel-images in scaleable SVG format. You can use reference images from your device or external link, save and load your previous work.", 
      hu: "Az applikáció segítségével kis méretű pixelképeket készíthetsz SVG formátumban. Használhatsz referencia képeket, betöltheted és módosíthatod az előző munkáidat.", 
      node: '#project2-card > p'
    },
    githubPages_project2_link:{
      en:"Try it!", hu:"Próbáld ki!", node:'#try-Pixbox-text',
    },
    project3_h3:{en:'Form filling snippets',hu:'Űrlap kitöltő snippetek',node:'#project3-card > h3'},
    project3_text:
      {en: "I wrote a set of snippets to make digital administation easier and faster. The development process based on constant user-feedback.", 
      hu: "Az adminisztráció megkönnyítésére és felgyorsítására írtam ezeket a snippeteket. A fejlesztés a felhasználók állandó visszajelzésein alapult.", 
      node: '#project3-card > p'
    },

    },
};

let lang = 'hu';
function changeLanguage(){
  console.log(lang);
  //change between languages button:
  document.getElementById('en').classList.toggle('inactive');
  document.getElementById('hu').classList.toggle('inactive');

//Change texts: outer cycle  
for(let k =0; k<Object.keys(allTextContent).length;k++){
  const sectionTexts = Object.values(allTextContent)[k];

  //inner cycle
  for(let i = 0; i<Object.keys(sectionTexts).length;i++){
    const thisEntrie = Object.values(sectionTexts)[i];
    document.querySelector(thisEntrie['node']).innerText = thisEntrie[lang];
  }

//Change recurring text/title:
  for(key in recurringTxtToChange){
    if(recurringTxtToChange[key]['type']==='title'){
      document.querySelectorAll(`${recurringTxtToChange[key]['node']}[title="${recurringTxtToChange[key][lang==='hu'?'en':'hu']}"]`).forEach(node=>node.title=recurringTxtToChange[key][lang])
    } else if(recurringTxtToChange[key]['type']==='text'){
      document.querySelectorAll(recurringTxtToChange[key]['node']).forEach(node=>node.innerText=recurringTxtToChange[key][lang]);
    }
  }
}

lang = lang =='en'? 'hu':'en';
}


// Showing or hideing navbar:

let distanceFromTop =0;

//Show/Hide navbar on mobile device 
  //Show if scroll back, else hide it:
document.getElementsByTagName('html')[0].addEventListener("touchmove", (_event) => {
  if(distanceFromTop>window.scrollY){
  navTag.classList.add('show-nav');
} else if(distanceFromTop<window.scrollY){
navTag.classList.remove('show-nav');
}
distanceFromTop = window.scrollY;
});
  //hide navbar after taped 
navTag.addEventListener("touchend", (_event) => {
  navTag.classList.remove('show-nav');
});

