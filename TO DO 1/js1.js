// create an array
var myArr = [];
let i=0,k=0,rem=0;

//FUNKCIJA PUSH DATA
function pushData()
{
    var inputText = document.getElementById('inputText').value;
    myArr.push(inputText); 
    createButton();
    print(myArr); 
}
// BUTTON
function createButton(inputText) {
    //index();
        let btn = document.createElement("BUTTON");
        btn.innerHTML = "x";
        btn.index =i;
        console.log(btn.index);
        i++;
    document.body.appendChild(btn);
    //if (btn.onclick=true){ koga ke se klikne button da se izvrshi sledno 
    //let rem=btn.id  DA SE ZEME INDEKSOT NA BUTTON
    //btn.removeChild();  ISTIOT BUTTON STO E CLICK SE BRISHE
    //a.splice(rem,1); I BRISHE OD ARRAY ELEMENTOT STO GO IMA INDEXOT NA ARRAY
    
 }
/*
 function inex(){ DA SE NAPRAVI REFRESH NA INDEX NA BUTTON
     for(btn.index=0;btn.index<a.lenght;bth.index++)  SE PROVERUVAAT SITE BUTT
     if(btn.id=<rem){ SEKOJ BUTON STO IMA POGOLEM INDEKS OD IZBRISHANIOT BUTTON IDEKSOT NEGOV DA SE NAMALI ZA 1
        btn.id--; SE NAMALI ZA 1
     }
 }
*/
   //FUNKCIJA PRINT
function print(myArr)
{
     document.getElementById('pText').innerHTML = myArr;
}
//if btn.onclick=true
function del(){
   

}