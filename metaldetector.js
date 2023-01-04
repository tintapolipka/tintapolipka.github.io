/* the position type function:
Based on the current position this function gives back
the code of position type:
8: (middle row, middle column) - inside  
7: (last row, first column) - bottom-left corner
6: (first row, last column) - top-right corner
5: (first row, first column) - top-left corner
4: (middle row, first column) - left side edge
3: (last row, middle column) - bottom edge
2: (middle row, last column) - right edge
1: (first row, middle column) - top edge
*/
const MTCaseR1 = (currentTile) => {
if(
    currentTile%rowLengthInTile==0
    || 
    currentTile-rowLengthInTile<1
    || 
    currentTile+rowLengthInTile>tileNumber 
    ||
    currentTile%rowLengthInTile==1)
    {
        if(currentTile-rowLengthInTile<1){
            if( 
                currentTile-rowLengthInTile<1 
                &&
                currentTile%rowLengthInTile==1)
                {
                    return 5;
            }
            else{
                if(currentTile%rowLengthInTile==0){
                    return 6;
                }
                else{return 1;}
            }
        }
        else {
            if (currentTile+rowLengthInTile>tileNumber){
                if(currentTile%rowLengthInTile==1)
                     {return 7;}
                    else {return 3;}
                    
                } 
            else {
                if(currentTile%rowLengthInTile==0)
                    {return 2;} 
            
                else {return 4;}
            }
        }    
        
    }
else {return 8;};};

/*PseudoCode:
Fémdtektor készítése:
Változók készen: fémdetektor szám, ár és aktív-e?
   ./extracted.js-be áthelyezve
shouldIBeep() lesz a funkció neve!
-Matek a szomszédos mezőkhöz:
      *hol van bomba?: ugyanaz, mint a lépéseknél:
         jobb: (currentTile%rowLengthInTile==0 ? console.log("Jobbra nem lehet bomba."):  if (bombArray[currentTile+1]==true){beep()});
         fent: (currentTile-rowLengthInTile<1 ? console.log("Felül nem lehet bomba.") :  if (bombArray[currentTile - rowLengthInTile]==true){beep()});
         lent: (currentTile+rowLengthInTile>tileNumber ? console.log("Alul nem lehet bomba.") : if (bombArray[currentTile + rowLengthInTile]==true){beep()};
         bal:  (currentTile%rowLengthInTile==1 ? console.log("Bal oldalon nem lehet bomba.") : if (bombArray[currentTile-1]==true){beep()});
   -Ha bármelyik igaz, akkor Beepeljen.
      A beep() metódust hívja meg.
      
*/

const beep = ()=>{
    if(metalDetectorActive){
       console.log("Aktív.");
       document.querySelector('.metaldetector').classList.add('beep');
    }
    else{ console.log("Nem aktív a fémkereső!")}
 }

 // a deBeeper szedi le a step() elején az esetleg aktív .beep -et 
const deBeeper =()=>{
   if(metalDetectorActive){
    document.querySelector('.metaldetector').classList.remove('beep'); 
}
}
 /*
    -kitalálni a beepet. 
    const beep = ()=>{  KIDOLGOZNI  }
       Hozzáadandó  CSS classok:
          .item-active  -  eddigre már be kell legyen kapcsolva 
          .beep  - ez addig kell bekapcsolva legyen, 
             amíg a következő mezőre nem lép, de remove/add-al lehet 
             csak megoldani, mert a toggle túl bonyolúlt.
 
 
 */
 
 


const shouldIBeep = (MTCaseR1)=>{
  if(metalDetectorActive){
    switch (MTCaseR1) {

        case 8:
    // nowhere blocked (middle row, middle column)
    if (bombArray[currentTile+1]==true){beep()};
    if (bombArray[currentTile - rowLengthInTile]==true){beep()};
    if (bombArray[currentTile + rowLengthInTile]==true){beep()}; 
    if (bombArray[currentTile-1]==true){beep()};  
            break;

        case 7:
    // left and down blocked (last row, first column)
    if (bombArray[currentTile - rowLengthInTile]==true){beep()};
    if (bombArray[currentTile+1]==true){beep()};
            break;

        case 6:
    // up and right blocked (first row, last column)
    if (bombArray[currentTile-1]==true){beep()};  
    if (bombArray[currentTile + rowLengthInTile]==true){beep()};    
            break;

        case 5:
    // up and left blocked (first row, first column)
    if (bombArray[currentTile + rowLengthInTile]==true){beep()};
    if (bombArray[currentTile + rowLengthInTile]==true){beep()};
            break;

        case 4:
    // only left blocked (middle row, first column)
        if (bombArray[currentTile - rowLengthInTile]==true){beep()};
        if (bombArray[currentTile + rowLengthInTile]==true){beep()};
        if (bombArray[currentTile+1]==true){beep()};
            break;

        case 3:
    // only down blocked (last row, middle column)
    if (bombArray[currentTile - rowLengthInTile]==true){beep()};
    if (bombArray[currentTile-1]==true){beep()};
    if (bombArray[currentTile+1]==true){beep()};
            break;

        case 2:
    // only right blocked (middle row, last column)
    if (bombArray[currentTile-1]==true){beep()};
    if (bombArray[currentTile + rowLengthInTile]==true){beep()};
    if (bombArray[currentTile - rowLengthInTile]==true){beep()};
            break;

        case 1:
    // only up blocked (first row, middle column)
    if (bombArray[currentTile-1]==true){beep()};
    if (bombArray[currentTile + rowLengthInTile]==true){beep()};
    if (bombArray[currentTile+1]==true){beep()};
            break;
    
        default:
        console.error("Hiba a shouldIBeep swich-ében. Ismereretlen eset!")
            break;
    }
  }  
}
  
// Function for onclick="" to activate metaldetector 
const activateMT = ()=>{
  if(amIDead || metalDetectorActive){
    console.warn('Csak újjáéledve lehet bekapcsolni, és ha nem aktív eleve!');
  }
  else if(metalDetectorNumber>0){
    metalDetectorActive = true;
    document.querySelector('.metaldetector').classList.add('item-active');
    metalDetectorNumber--;
    // a piacon is megjenik az inventory tartalmának változása
    document.getElementById('market-MT-Num').textContent = metalDetectorNumber + ' ';
  }
  else{console.warn('Hiba! Elfogyott a MetalDetector!')};
}

const deActivateMT = ()=>{
// TODO Megírni! Beilleszteni a pálykezdés kódjába!
  if (metalDetectorActive){
        document.querySelector('.metaldetector').classList.remove('beep');
        document.querySelector('.metaldetector').classList.remove('item-active');
    metalDetectorActive = false;
    if (metalDetectorNumber === 0){ 
       
        document.querySelector('.metaldetector').classList.add('not_owned');
    }
  }
}

/// Klónozva a Vodkára a Metaldetector, meglátjuk, mi sül ki belőle

const activateVodka = ()=>{
    if(amIDead || vodkaActive){
      console.warn('Csak újjáéledve lehet meginni, és ha nem aktív eleve!');
    }
    else if(vodkaNumber>0){
      vodkaActive = true;
      document.querySelector('.vodkaIndex').classList.add('item-active');
      vodkaNumber--;
      // a piacon is megjenik az inventory tartalmának változása
      document.getElementById('market-vodka-Num').textContent = vodkaNumber + ' ';
        lifeNumber +=100;
        lifeCounter();
    }
    else{console.warn('Hiba! Elfogyott a Vodka!')};
  }
  
  const deActivateVodka = ()=>{
  // TODO Megírni! Beilleszteni a pálykezdés kódjába!
    if (vodkaActive){
          //document.querySelector('.vodkaIndex').classList.remove('beep');
          document.querySelector('.vodkaIndex').classList.remove('item-active');
      vodkaActive = false;
      lifeNumber -=100;
        lifeCounter();
      if (vodkaNumber === 0){ 
         
          document.querySelector('.vodkaIndex').classList.add('not_owned');
      }
    }
  }