// CREATING THE BOARD ********************************************
const rowLengthInTile = 5;
//because the board is a square:
const columnLengthInTile = rowLengthInTile;
//counting the tiles
const tileNumber = columnLengthInTile*rowLengthInTile;
// constructing the frame for tiles
const tileDivSection = document.getElementById('mineFieldBox');
tileDivSection.style.width = ((rowLengthInTile*40)+"px");
tileDivSection.style.height = ((columnLengthInTile*40)+"px");

//creating random number generator function to randomize tileset:
function rng(integer){return Math.floor(Math.random() * integer) + 1;}

// creating an array to make place for mines
let bombArray =['BOOM'];


// POPUPS ******************************************************** 
//BOOM
const felugroToggle = () => {
   document.getElementById("felugro").classList.toggle("up");
   
}
// You WIN popUp
const youWinToggle = () => {
   document.getElementById("youWin").classList.toggle("up");
   
}



// STARTING A NEW LIFE after a mine exploded *********************

//How Many life the player have (starts this many):
let lifeNumber = 3;
//Is the player currently dead?
let amIDead = false;

// starting a new life:
const newLifeStart = ()=>{
   
   currentTile=1;
   TileMarkSwich();
   avatarsPosition();
   lifeNumber--;
   lifeCounter();
   amIDead = false; 
} 
//LIFE COUNTER DIVISION app

const lifeCounter = ()=>{
document.getElementById('lifeCounterDiv').textContent =`${lifeNumber} life is left`
}
//write the lives in the first time
lifeCounter();

//function for RETRY button
const retry = ()=>{
felugroToggle();
newLifeStart();
}

// Function for BOOM
const doesItBOOM = () => {if(bombArray[currentTile]){
   console.log("BOOM!");
   document.getElementById(`tile${currentTile}`).style.backgroundImage = 'url(./img/tiles/crater.png)';
   TileMarkSwich();
   bombArray[currentTile] = false;
   amIDead = true;
   //Popup BOOM sign 
   felugroToggle();
}
}

// Checking, if you win
const levelFinished = ()=>{
   if(currentTile==tileNumber){
      console.log('YOU WIN!')
      youWinToggle()
      amIDead = true;
   }
}

// for cycle to create given number of tiles
  for(i=1; i<(tileNumber+1); i++){
    tileDivSection.innerHTML+=`<div id="tile${i}" class="tileBasicClass">
    <style> .tileBasicClass{width: 39px; height:39px;} #tile${i} {background-image: url(./img/tiles/gras0${rng(4)}.png);}</style>
    ${i}
    </div>`;
 bombArray[i]= false;
}

// MOVING THE PLAYER'S AVATAR************************************
// Imported CODE section from: https://www.tutorialspoint.com/detecting-arrow-key-presses-in-javascript
document.onkeydown = function (event) {
    switch (event.keyCode) {
       case 37:
          
          (amIDead == true ? console.log("Halott vagy!") : step('Left'));
          break;
       
       case 38:
         
         (amIDead == true ? console.log("Halott vagy!") : step('Up'));
      
          break;
       case 39:
         (amIDead == true ? console.log("Halott vagy!") : step('Right'));
          
          break;
       case 40:
         (amIDead == true ? console.log("Halott vagy!") : step('Down'));
      
          break;
    }
 };
// Identify the tile of Player's location & Set the starting tile:
let currentTile =1;
// Show or hide the active tile
const TileMarkSwich = () => {document.getElementById(`tile${currentTile}`).classList.toggle('activeTile');}
TileMarkSwich();
// Locate avatar's position 
const avatarDiv = document.getElementById('avatar')
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
   TileMarkSwich();
   switch(expression) {
 case 'Right':
   (currentTile%rowLengthInTile==0 ? console.log("Falba ütköztél jobb oldalon"): currentTile++);
     break;
  
 case 'Down':
   (currentTile+rowLengthInTile>tileNumber ? console.log("Falba ütköztél alul") : currentTile += rowLengthInTile);
     break;
 case 'Left':
   (currentTile%columnLengthInTile==1 ? console.log("Falba ütköztél a bal oldalon")
   : currentTile--);
   break;
 case 'Up':
   (currentTile-rowLengthInTile<1 ? console.log("Falba ütköztél felül") : currentTile -= rowLengthInTile);
   break;
   
 default:
   console.log("Nem irány!");
   }
   
   console.log("Jeleleg itt állsz: "+currentTile);
   
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
   doesItBOOM();
   levelFinished();
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
