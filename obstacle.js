

// Útvonal készítő funkció:

let wayArr = ['This is the way!'];    // 'This is the way!'
const wayMaker = ()=>{
    wayArr=[1];
    while (pathTile< rowLengthInTile*columnLengthInTile){
        //console.log('pathTile előtte: '+ pathTile);
        aI(MTCaseR1(pathTile));
    //console.log('pathTile AI után: '+ pathTile);
    
    
    wayArr[pathCounter] = pathTile;
    pathCounter++;
}
}
const aI = (MTCaseR1)=>{
switch (MTCaseR1) {
    /*
    8: (middle row, middle column) - inside  
7: (last row, first column) - bottom-left corner
6: (first row, last column) - top-right corner
5: (first row, first column) - top-left corner
4: (middle row, first column) - left side edge
3: (last row, middle column) - bottom edge
2: (middle row, last column) - right edge
1: (first row, middle column) - top edge
    */
 
case 8:
        switch(rng(3)){
            //8: (middle row, middle column) - inside
            case 1:
                //console.log('8-as első esete: jobbra egyet!');
                pathTile++;
            break;    
            case 2:
                //console.log('8-as második esete: le egyet!')
                pathTile += rowLengthInTile;
            break;
            case 3:
                //console.log('8-as harmadik esete: balra egyet!')
                pathTile--;
            break;
            default:
                //console.warn('Hiba az aI switch case: 8-ben!');    
            break;
        }    
        

        break;


    case 7:
        pathTile++;
        break;
    
    case 6:
        pathTile += rowLengthInTile;
        break;

    case 5:
        switch(rng(3)){
            //5: (first row, first column) - top-left corner
            case 1:
                pathTile++;
            break;    
            case 2:
                pathTile += rowLengthInTile;
            break;
            case 3:
                pathTile++;
            break;
            default:
                console.warn('Hiba az aI switch case: 5-ben!');    
            break;
        }    
        

        break;
    case 4:
            switch(rng(2)){
                //(middle row, first column) - left side edge
                case 1:
                    pathTile++;
                break;    
                case 2:
                    pathTile += rowLengthInTile;
                break;
                default:
                    console.warn('Hiba az aI switch case: 4-ben!');    
                break;
            }    
            
    
            break;
    
    case 3:
    if(!(rowLengthInTile*columnLengthInTile>tileNumber))    
    {switch(rng(2)){
        //(middle row, first column) - left side edge
        case 1:
            pathTile++;
        break;    
        case 2:
            pathTile -= rowLengthInTile;
        break;
        default:
            console.warn('Hiba az aI switch case: 3-ben!');    
        break;
    }};
    break;
            
    case 2:
 
        pathTile += rowLengthInTile;
        break;
        
case 1:
            switch(rng(2)){
                //1: (first row, middle column) - top edge
                case 1:
                    pathTile += rowLengthInTile;
                break;    
                case 2:
                    pathTile--;
                break;
                default:
                    console.warn('Hiba az aI switch case: 1-ben!');    
                break;
            }    
            
    
            break;
    
        default:
        console.warn('Hiba az aI bemenetében')
        break;
}
}

// Az akadályok helyét tartalmazó tömböt visszaadó funkció
const obstacleArrCreator = (rowLengthInTile,columnLengthInTile)=>{
    let obstArr=['You can','not pass!'];
    //alapból randomra akadályt rak le:
    for(let i=2;i<rowLengthInTile*columnLengthInTile;i++){
    if(rng(5)>3){obstArr[i]=true;} else {obstArr[i]=false;}
    }

    // Kitölti azokat a lyukakat, amikhez nem fér hozzá a player:
let up=0;
let down=0;
let left=0;
let right=0;
for(let g=2;g<columnLengthInTile*rowLengthInTile;g++){
up = obstArr[g-rowLengthInTile] ? 1:0;   
down = obstArr[g+rowLengthInTile]? 1:0;
left= obstArr[g-1]? 1:0;
right = obstArr[g+1]? 1:0;

console.log(g+' . iterációban az (up+down+left+right) összege : '+(up+down+left+right))

switch (MTCaseR1(g)) {
    case 8:
        if(up+down+left+right>2){
            obstArr[g]=true;
            console.log('case 8- obstacleesítve.')
        }
        break;
    case 7:
        if(up+right>1){
            obstArr[g]=true;
            console.log('case 7- obstacleesítve.')
        }
            
    break;
    case 6:
        if(down+left>1){
            obstArr[g]=true;
            console.log('case 6- obstacleesítve.')
        }   
    break;
    case 4:
        if(up+down+right>1){
            obstArr[g]=true;
            console.log('case 4- obstacleesítve.')
        }     
    break;    

    case 3:
        if(up+left+right>1){
            obstArr[g]=true;
            console.log('case 3- obstacleesítve.')
        }     
    break; 
    
    case 2:
        if(up+left+down>1){
            obstArr[g]=true;
            console.log('case 2- obstacleesítve.')
        }     
    break;
    case 1:
        if(left+down+right>1){
            obstArr[g]=true;
            console.log('case 1- obstacleesítve.')
        }     
        break;
    default:
        break;
}
}

console.log('obstArr a bomba sor/oszolp törlés előtt:'+  obstArr)

pathTile = 1;
pathCounter = 1;
wayMaker();
wayArr.forEach(item=>obstArr[item]=false);




// Törölni azt az obstacle-t, ami a bombát elszeparálja
for(let j=1; j<bombArray.length;j++){
        if(bombArray[j]){
            obstArr[j]=false;
            if(rng(2)==1){
                console.log(`A ${j}. tile-ban bomba van, ezért az oszlopot akadálymenetesítettük!`);
                for(let k=1; k<columnLengthInTile;k++){
                    if((j+(k*rowLengthInTile))<(rowLengthInTile*columnLengthInTile)){
                        obstArr[j+(k*rowLengthInTile)]=0;
                    }
                }
                for(let n=columnLengthInTile;n>0;n--){
                    if(j-rowLengthInTile>0){obstArr[j-rowLengthInTile*n]=0}
                }
            } 
            else {
                console.log(`A ${j}. tile-ban bomba van, ezért a sort akadálymenetesítettük!`);
            if(j%rowLengthInTile===0){
                for(let o=0;o<rowLengthInTile;o++){
                   obstArr[j-(rowLengthInTile-1)+o]='';
                }
            } else{
                for(let p=0; p<rowLengthInTile;p++){
                obstArr[j-j%rowLengthInTile+1+p]=-0;}
            };           
            
            };
                
        }
    };
    
    
    return obstArr;
}

// akadály kép elhelyező alkalmazás. Argumentuma: false/true, és a tile száma
const obstImgPlanter = (semmi,num)=>{
if(num>0){if(semmi){
    let obstImg = document.createElement('img');
obstImg.classList.add('obstImg');
obstImg.src = `./img/obstacles/obst_1x1_0${rng(8)}.svg`
document.getElementById(`tile${num}`).appendChild(obstImg)
}};
}

//2x2-es méretű akadályok beillesztéséhez:
const bigObstImgPaste = ()=>{
    for(let s=2; s<(obstacleArr.length-rowLengthInTile);s++){
     if(MTCaseR1(s) !=2 &&
        obstacleArr[s]&&
        obstacleArr[s+1]&&
        obstacleArr[s+rowLengthInTile]
        &&obstacleArr[s+rowLengthInTile+1])
        {
            // eltávolítjuk az eddigi képeket
            document.querySelector(`#tile${s} img`).remove();
            document.querySelector(`#tile${s+1} img`).remove();
            document.querySelector(`#tile${s+rowLengthInTile} img`).remove();
            document.querySelector(`#tile${s+rowLengthInTile+1} img`).remove();

            // beillesztjük az új nagyképet
            let obstImg = document.createElement('img');
            obstImg.classList.add('obstImg2x2');
            obstImg.src = `./img/obstacles/obst_2x2_0${rng(2)}.svg`
            document.getElementById(`tile${s}`).appendChild(obstImg)
        
            s+=rowLengthInTile+1;
        }
    }
}

// akadály beillesztő
let obstacleArr=[];
const obstArrToImg = ()=>{
    obstacleArr = obstacleArrCreator(rowLengthInTile,columnLengthInTile);
    obstacleArr.forEach(obstImgPlanter);
    bigObstImgPaste();
}