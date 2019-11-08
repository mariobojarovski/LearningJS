 // create an array
 var myArr = [];

 function createButton() {
    let btn = document.createElement("BUTTON");
    btn.innerHTML = "DELETE";
    document.body.appendChild(btn);  
}
function del(){

        myArr.splice(i,1);
        let pval = "";
     
     for(let i = 0; i < myArr.length; i++)
     {
         pval = pval + (i+1) +". " + myArr[i] + "<br/>";// na promenliva pval i dodeluvme si te podatoci na niazata
     }
    print(pval);
    }

 function print(pval)
 {
      // pecatenje
      document.getElementById('pText').innerHTML = pval;
      createButton();
 }
            
 function pushData()
 {
     // zemanje na podatokot od text box
     var inputText = document.getElementById('inputText').value;
     // pushanje na podatoci  niza
     myArr.push(inputText); 
     var pval = "";
     for(let i = 0; i < myArr.length; i++)
     {
         pval = pval + (i+1) +". " + myArr[i] + "<br/>";// na promenliva pval i dodeluvme si te podatoci na niazata
     }
     print(pval); 
 }


