 // create an array
 var myArr = [];

 function print(pval)
 {
      // pecatenje
      document.getElementById('pText').innerHTML = pval;
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
 function del(){
    let ind = document.getElementById('index').value
    let con= ind-1;
    myArr.splice(con,1)
    console.log(con);
    let pval = "";
     
     for(let i = 0; i < myArr.length; i++)
     {
         pval = pval + (i+1) +". " + myArr[i] + "<br/>";// na promenliva pval i dodeluvme si te podatoci na niazata
     }
    print(pval);
    }
