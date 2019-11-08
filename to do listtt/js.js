let myArr=[[1,2][3,4]];
function PD()
 {
     // zemanje na podatokot od text box
     var inputText = document.getElementById('inputText').value;
     // pushanje na podatoci  niza
     for(let i=0;i<myArr.length;i++){
        for(let j=0;j<2;i++){
                a[i][1]=inputText   ;
                a[0][j]=createButton;
            
        }
     }
     
     
     print(myArr); 
 }
 function print(myArr)
 {
      // pecatenje
      document.getElementById('pText').innerHTML = myArr;
 }
 function createButton() {
    let btn = document.createElement("BUTTON");
    btn.innerHTML = "DELETE";
    document.body.appendChild(btn);  
}
         