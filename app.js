// CREATING THE BOARD ********************************************
let rowLengthInTile = 8;
//because the board is a square:
let columnLengthInTile = rowLengthInTile;
//counting the tiles
let tileNumber = columnLengthInTile*rowLengthInTile;
// constructing the frame for tiles
const tileDivSection = document.getElementById('mineFieldBox');

//random number generator function to randomize tileset:
function rng(integer){return Math.floor(Math.random() * integer) + 1;}

// creating an array to make place for mines
let bombArray =['BOOM'];


// POPUPS ******************************************************** 

const toggleIt = (wichWindow) => {
  document.getElementById(wichWindow).classList.toggle("up"); 
}

// Inventory activator function
const marketActivator = ()=>{
   amIDead? amIDead=false: amIDead=true;
   toggleIt('market');
   
   document.querySelector('.productInfo').classList.add('hidden');
   document.querySelector('.allProducts').classList.add('hidden');
   if(currentTile===(rowLengthInTile*columnLengthInTile)){
      document.querySelector('.allProducts').classList.remove('hidden');
      document.querySelector('.productInfo').classList.remove('hidden');
   };  
}


// STARTING A NEW LIFE after a mine exploded *********************

//How Many life the player have (starts this many):
let lifeNumber = 3;
//Is the player currently dead?
let amIDead;

function avatarChanger(){
   let avatarImg = document.createElement('img');
   avatarImg.src = "./img/avatar_01.svg"
   avatarImg.classList.add('avatar-img');
   let avatarImgClass = document.querySelector('.avatar-img');
   avatarImgClass.remove();
   document.querySelector('.avatarClass').appendChild(avatarImg);
}

// starting a new life:
const newLifeStart = ()=>{
   
   currentTile=1;
   TileMarkSwich();
   avatarsPosition();
   
   lifeNumber--;
   lifeCounter();
   amIDead = false;
   avatarChanger(); 
} 
// SCORE COUNTER DIVISION app
let score = 0;
const scoreCounter = ()=>{
   if(pointArray[currentTile]){
      score+=pointfor1Tile;
      pointArray[currentTile] = false;
   }; 
   
   document.getElementById('scoreDiv').textContent =`${score} points`
   document.getElementById('market-pts').textContent = score+ ' ';   
}
   


//LIFE COUNTER DIVISION app

const lifeCounter = ()=>{
document.querySelector('#lifeCounterDiv p').textContent =`: ${lifeNumber}`
document.getElementById('market-life-Num').textContent = lifeNumber;
}
//write the lives in the first time
lifeCounter();


//function for RETRY button
const retry = ()=>{
toggleIt("felugro");
newLifeStart();
}

// Function for BOOM
const doesItBOOM = () => {if(bombArray[currentTile]){
   console.log("BOOM!");
   document.getElementById(`tile${currentTile}`).style.backgroundImage = 'url(./img/tiles/crater.png)';
   TileMarkSwich();
   bombArray[currentTile] = false;
   amIDead = true;
   //change avatar to skull
   document.querySelector('.avatar-img').src="./img/skull.svg";

   
   //Popup BOOM sign 
   toggleIt("felugro");
   if(lifeNumber<1){
      // TODO!!!! FAPADOS MEGOLDÁS!
      document.querySelector('#felugro p').textContent= `YOUR SCORE: ${score}`;
      document.querySelector('#felugro img').src='../img/game_over.svg';
      document.querySelector('#felugro button').innerText = 'New';
      document.querySelector('#felugro button').onclick =function(event){newLevel()}
      score = 0;
      levelNumber = 1;
      lifeNumber = 3;

   }
}
}

// Checking, if you win
const levelFinished = ()=>{
   if(currentTile==tileNumber){
      console.log('YOU WIN!')
      toggleIt("youWin");
      amIDead = true;
   }
}

/*
// for cycle to create given number of tiles
  for(i=1; i<(tileNumber+1); i++){
    tileDivSection.innerHTML+=`<div id="tile${i}" class="tileBasicClass">
    <style> .tileBasicClass{width: 39px; height:39px;} #tile${i} {background-image: url(./img/tiles/gras0${rng(4)}.png);}</style>
    ${i}
    </div>`;
 bombArray[i]= false;
}
*/

// MOVING THE PLAYER'S AVATAR************************************
// Imported CODE section from: https://www.tutorialspoint.com/detecting-arrow-key-presses-in-javascript
document.onkeydown = function (event) {
    switch (event.keyCode) {
      case 13: 
         
         break;

      case 37:
          
          step('Left');
          break;
       
       case 38:
         
          step('Up');
      
          break;
       case 39:
         step('Right');
          
          break;
       case 40:
          step('Down');
      
          break;
    }
 };
// Identify the tile of Player's location & Set the starting tile:
let currentTile =1;
// Show or hide the active tile
const TileMarkSwich = () => {document.getElementById(`tile${currentTile}`).classList.toggle('activeTile');}

//TileMarkSwich();
// Locate avatar's position 
let avatarDiv = document.getElementById('avatar')
// avatar positioning function
const avatarsPosition = () =>{
   avatarDiv.style.transform = "translateX(" + (
      (currentTile%rowLengthInTile==0 ? ((rowLengthInTile-1)*40)  :(currentTile%rowLengthInTile-1)*40)
      ) + "px) translateY(" + (
         currentTile%rowLengthInTile==0 ? ((currentTile-currentTile%rowLengthInTile)/rowLengthInTile-1)*40 : ((currentTile-currentTile%rowLengthInTile)/rowLengthInTile)*40
      ) + "px)";   
}


//The STEP'S code
const step = (expression)=>{
   if(amIDead == true){console.log("Halott vagy!")}
   else{  
         let prevStep = currentTile;
         document.querySelector('.avatar-img').classList.toggle('reflected-avatar');
         deBeeper();
         TileMarkSwich();
   switch(expression) {
      case 'Right':
         (currentTile%rowLengthInTile==0 ? console.log("Falba ütköztél jobb oldalon"): currentTile++);
         break;
      
      case 'Down':
         (currentTile+rowLengthInTile>tileNumber ? console.log("Falba ütköztél alul") : currentTile += rowLengthInTile);
         break;
      case 'Left':
         (currentTile%rowLengthInTile==1 ? console.log("Falba ütköztél a bal oldalon")
         : currentTile--);
         break;
      case 'Up':
         (currentTile-rowLengthInTile<1 ? console.log("Falba ütköztél felül") : currentTile -= rowLengthInTile);
         break;
         
      default:
         console.log("Nem irány!");
         }
         
         console.log("Jeleleg itt állsz: "+currentTile);
         
        if(obstacleArr[currentTile]){currentTile=prevStep
      console.log('Akadályba ütköztél!')};
         TileMarkSwich();
      
         avatarsPosition();
      
       switch(expression) {
         case 'Right':
            avatarDiv.style.transform += "rotate(0deg)";
            break;
         
         case 'Down':
            avatarDiv.style.transform += "rotate(90deg)";
            break;
         case 'Left':
            avatarDiv.style.transform += "rotate(180deg)";
         break;
         case 'Up':
            avatarDiv.style.transform += "rotate(270deg)";
         break;
         
         default:
            console.log('Nem megfelelő argumentum!');
         }
         document.querySelector(`#tile${currentTile} p`).innerText='';
         scoreCounter();
         shouldIBeep(MTCaseR1(currentTile));
         doesItBOOM();
         levelFinished();

         
   };
}

//DEPLOYING MINES*************************************************
//Function: how many mines should be deployed?
const deployMine = (howManyMine) =>{
for(i=0; i<howManyMine; i++){
   bombArray[rng(tileNumber-2)+1] = true;
   }
 // Last tile exceptions   
 if(bombArray[tileNumber-1]==true && bombArray[tileNumber-rowLengthInTile]==true){
      bombArray[tileNumber-1]=false;
   bombArray[rng(tileNumber-3)+1] = true;}
 
 // First tile exceptions
   if(bombArray[2]==true && bombArray[1+rowLengthInTile]==true){
      bombArray[2]=false;
   bombArray[rng(tileNumber-3)+2] = true;}   

// count the mines on the field, to prevent 0 mines!
 let countMines = 0;
 for(j=0; j<bombArray.length;j++){
   if(bombArray[j]==true){countMines++}
 } 
   if(countMines==0){
      deployMine(1);  
   }
}
// Time to deploy these mines!
deployMine(3);





//NEW LEVEL maker

// set the number of level, let the first one 1:
let levelNumber =1;


function newLevel(){
   switch(levelNumber){
     case 1:
        rowLengthInTile = 8;
        columnLengthInTile = 8;
        pointfor1Tile = 5;
      break;

     case 2:
        rowLengthInTile = 7;
        columnLengthInTile = 7;
        pointfor1Tile = 10;
      break;

     case 3: 
       rowLengthInTile = 6;
       columnLengthInTile = 6;
       pointfor1Tile = 15;
     break;

     case 4: 
       rowLengthInTile = 5;
       columnLengthInTile = 5;
       pointfor1Tile = 20;
     break;


     default:
      rowLengthInTile = rng(4)+4;
      columnLengthInTile = rng(4)+4;
      console.warn('ERROR, NO VALID LEVEL NUMBER!');
      pointfor1Tile++;
      emoji = '8-(';
   }

   
   tileNumber = columnLengthInTile*rowLengthInTile;
   tileDivSection.style.width = ((rowLengthInTile*40)+"px");
   tileDivSection.style.height = ((columnLengthInTile*40)+"px");
   bombArray =['BOOM'];
   pointArray =['MONEY!'];
   
   // for cycle to create given number of tiles
   tileDivSection.innerHTML = "";
   tileDivSection.innerHTML = `<div id="avatar${levelNumber}" class="avatarClass">:-|</div>
   <div  id="felugro"><p>BOOM!</p><img class="pic128pixel" src="./img/skull.svg"> <br><button onclick="retry()">Retry!</button></div>
   <div class="popUp" id="youWin"><p>YOU WIN!</p><br><button  onclick="newLevel()">Next Level</button><div id="tradeImg">Trade<img src="./img/trade.svg" class="trade_img" onclick="marketActivator()" alt="trade button"></div></div>`;
   document.getElementById(`avatar${levelNumber}`).innerHTML =`<img class="avatar-img" src="./img/avatar_01.svg"><style></style>`;
   for(i=1; i<(tileNumber+1); i++){
      tileDivSection.innerHTML+=`<div id="tile${i}" class="tileBasicClass">
      <style>#tile${i} {background-image: url(./img/tiles/gras0${rng(4)}.png);}</style>
      <p>${i}</p>
      </div>`;
      bombArray[i]= false;
      pointArray[i]=true;
   }
   document.querySelector(`#tile1 p`).innerText='';
   document.querySelector(`#tile${rowLengthInTile*columnLengthInTile} p`).innerText='Goal';
   avatarDiv = document.getElementById('avatar'+levelNumber);

   
   deployMine(3); 
   obstArrToImg();

   currentTile = 1;
   TileMarkSwich();
   avatarsPosition();
   pointArray[1]=false;
   scoreCounter();
   document.getElementById('levelDiv').textContent = "Lvl: "+ levelNumber;
   levelNumber++;
   deActivateVodka();
   deActivateMT();
   productsEventListeners();
   

   // give back mobility to the player's avatar
   amIDead = false;
}

// FIRST LEVEL START
//newLevel();
document.getElementById('instructions-dialog').showModal();
let nextInstrNr = -3;
function nextInstr(){
document.getElementById('next-sheet-button').href=`#instr-${nextInstrNr}`;
//document.getElementById('next-sheet-button').click();
if (nextInstrNr===6) {
  document.querySelectorAll('.bubble')[0].innerText = 'Click on the\n Start new game\n button Soldier!\n\nDon\'t stall!';
  document.getElementById('next-sheet-button').classList.remove('buttonGlow');
  document.getElementById('start-game').classList.add('buttonGlow');
} else if(nextInstrNr===-3){
   document.querySelectorAll('.bubble')[0].innerText = 'Your new\n comission is\n mineseeker!'; 
} else if(nextInstrNr=== -2){
   document.querySelectorAll('.bubble')[0].innerText = 'What?\n Defuse-kit?'; 
} else if(nextInstrNr=== -1){
   document.querySelectorAll('.bubble')[0].innerText = `You've got\n boots, aren't\n ya?`; 
   nextInstrNr++;
}

nextInstrNr>5? nextInstrNr = 0 : nextInstrNr++;
}


