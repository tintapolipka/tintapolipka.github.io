// Minden kecske összes adata felsorolva:
var goat0 ={photo:"./images/goat00.webp",title:"Egy lavór kecske",description:"Íme a kecske!"}
var goat1 ={photo:"./images/goat01.jpg",title:"Sivatagi kecske",description:"Ö sivatagosította el a helyet."}
var goat2 ={photo:"./images/goat02.jpg",title:"Selfie kecske",description:"Órákon át állította be a füleit."}
var goat3 ={photo:"./images/goat03.jpg",title:"Füles kecske",description:"Példaképe: Dumbo."}
var goat4 ={photo:"./images/goat04.jpg",title:"Oreamnos americanus",description:"Semmi beheecézgetés, ha kérhetem!"}
var goat5 ={photo:"./images/goat05.jpg",title: "Ölkecske",description:"A gazdája Gyilkosnak nevezte el"}
var goat6 ={photo:"./images/goat06.webp",title:"Szarvas kecske",description:"Vajon mire utalhat a neve?"}
var goat7 ={photo:"./images/goat07.jpg",title:"Több kecske",description:"Sokan vagyunk..., Sokan vagyunk, de még mindig nem elegen!"}

//lista az összes kecske adatObjektumainak .photo részéről:
var imagesData = [goat0.photo,goat1.photo,goat2.photo,goat3.photo,goat4.photo,goat5.photo,goat6.photo,goat7.photo]
//lista az összes kecske adatObjektumainak .title részéről:
var titlesData = [goat0.title,goat1.title,goat2.title,goat3.title,goat4.title,goat5.title,goat6.title,goat7.title]
//lista az összes kecske adatObjektumainak .description részéről:
var descriptionsData = [goat0.description,goat1.description,goat2.description,goat3.description,goat4.description,goat5.description,goat6.description,goat7.description]


// segédváltozó a kecskék számolásához
var currentGoat =0;

// letörli a kiemelést az összes kiskép befogadó div-jéről
function kiemelesTorlo() {
    for(i=0;i<imagesData.length;i++){
        document.getElementById('KisKepdiv'+i).classList.remove('thumbnailKiemeles'); 
    }
} 

// Álatalános kép + cím + leírás +kisképkeret frissítő function
function frissito(index){
    document.getElementById('photo').setAttribute('src', imagesData[index]);
    document.getElementById('photo-title').textContent =titlesData[index];
    document.getElementById('photo-description').textContent =descriptionsData[index];   
    kiemelesTorlo();
// Itt adjuk hozzá a kiskép kiemelését leíró class-t az elemhez
    document.getElementById('KisKepdiv'+index).classList.add('thumbnailKiemeles','thumbnail');

}



// A parancs, amivel currentGoat-adik kép lesz megjeleníthető
//document.getElementById('photo').setAttribute('src', imagesData[currentGoat]);
// A parancs, amivel a currentGoat-adik cím lesz megjeleníthető
//document.getElementById('photo-title').textContent =titlesData[currentGoat];
// A parancs, amivel a currentGoat-adik LEÍRÁS lesz megjeleníthető
//document.getElementById('photo-description').textContent =descriptionsData[currentGoat];

// nyíllal következőre váltás
function nextkep(){
    currentGoat++;
    if(imagesData.length<(currentGoat+1)){currentGoat=0};
    frissito(currentGoat);
}

// nyíllal előzőre váltás
function prevkep(){
    currentGoat--;
    if(currentGoat<0){currentGoat=(imagesData.length-1)};
    frissito(currentGoat);
    
}



function thumbnailMaker(elem,index){
    // 1. lépés: új div:
    var ujdiv = document.createElement('div');
    // 2.lépés: class és egyedi ID hozzáadása
    ujdiv.setAttribute('class','thumbnail');
    ujdiv.setAttribute('id','KisKepdiv'+index);
    // 3. lépés: adunk egy új divet a kisképekhez (amibe még nincs kép)
    document.getElementById('kiskep').appendChild(ujdiv);
    // II/1. lépés: új img
    var ujkep = document.createElement('img');
    // II/2. lépés: adjunk hozzá linket a képhez, és altot: kecske.
    ujkep.setAttribute('src',elem);
    ujkep.setAttribute('alt','kecske');
    ujkep.setAttribute('onclick','frissito('+index+')');
    
    // II.3. lépés: a legutóbbi thumbail classú divbe tegye az újképet bele.
    document.querySelector('.thumbnail:last-of-type').appendChild(ujkep);
    // jöhetnek a képleírások a kisképekhez:
    var kepLeIrasDiv = document.createElement('p');
    kepLeIrasDiv.setAttribute('class','kisKepLeiras');
    kepLeIrasDiv.innerText = titlesData[index];
    document.querySelector('.thumbnail:last-of-type').appendChild(kepLeIrasDiv);
}
// ITT HÍVOM MEG A thumbnailMaker funkciót    
imagesData.forEach(thumbnailMaker);

//használjuk a frissítőt a currentGoatnak megfelelően:
frissito(currentGoat);


function Kiemeles(index) {document.getElementById('KisKepdiv'+index).classList.add('thumbnailKiemeles','thumbnail');}
