//MARKET TO BUY LIFE, VODKA, METALDETECTOR
//How much is a life? (Be same as the description!)
const priceOfLife = 100;
//How much is the Vodka? (Be same as the description!)
const priceOfVodka = 300;
let vodkaNumber = 0;
let vodkaActive= false;
//How much is the Metaldetector? (Be same as the description!)
const priceOfMetalDetector =500;
let metalDetectorNumber = 0;
let metalDetectorActive = false;

//Not enough money app
const notEnoughMoney = ()=>{document.getElementById('productInfo').textContent =`You don't have enough money!`;
}

// Item successfully bought app
let colorChange = 1;

const itemBought = (Item)=>{document.getElementById('productInfo').textContent =` ${Item} bought.`;
// a neat solution to restart animation: have two of the same but different names
// source: https://css-tricks.com/restart-css-animation/
colorChange *= -1;
if(colorChange>0){  
document.getElementById('productInfo').style.animation ="justBought 1s 1"
                 }
else {
document.getElementById('productInfo').style.animation ="justBought2 1s 1"
     }
}

//product info app


function pInfo(){
   let key=this.id;
   
   switch (key) {
         case 'bonusLifeButtonDiv':
            document.getElementById('productInfo').textContent = 'Bonus Life: You can survive the BOOM once more!';
         break;
      
         case 'vodkaButtonDiv':
            document.getElementById('productInfo').textContent = 'Cheap Vodka: You get 100 life. At start of the next level, you loose 100 life. ';
         break;
      
         case 'metalDetectorButtonDiv':
            document.getElementById('productInfo').textContent = 'Metal detector: If there is an active mine a step away, it beeps. Has battery for only one level.';
         break;
   }
}


const productsEventListeners =()=>{
let tagList = document.querySelector('.product-container').children;

for(let i=0; i<tagList.length; i++){
   
   tagList[i].addEventListener('mouseover',pInfo);
   }

}


const buy = (item) =>{
   switch (item) {
      case 'life':
         if(priceOfLife<=score){
         score-=priceOfLife;
            lifeNumber++;
         lifeCounter();
         scoreCounter();
         itemBought('Bonus life ');
       }
         else{
            notEnoughMoney();
         }
         break;
         
         case 'vodka':
            if(priceOfVodka<=score){
            score-=priceOfVodka;
               vodkaNumber++;
            
               document.querySelector('.vodkaIndex').classList.remove('not_owned');
               //TODO Valamit kezdeni a vodka által adott plusz életekkel
            scoreCounter();
            itemBought('Cheap vodka ');
            document.getElementById('market-vodka-Num').textContent= vodkaNumber +' ';
         }
            else{
               notEnoughMoney();
            }
            break;
         
            case 'metalDetector':
               if(priceOfMetalDetector<=score){
               score-=priceOfMetalDetector;
                  metalDetectorNumber++;
               
               document.querySelector('.metaldetector').classList.remove('not_owned');
               scoreCounter();
               itemBought('Metal detector ');
               document.getElementById('market-MT-Num').textContent = metalDetectorNumber + ' ';
             }
               else{
                  notEnoughMoney();
               }
               break;

      default:
         console.warn("Hibás árunév lett megadva a vásárlás során.");
         break;
   }
}
