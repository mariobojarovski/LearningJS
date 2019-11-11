let a=[];

function button(){
    let btn = document.createElement("BUTTON");
    btn.innerHTML = "x";
    document.body.appendChild(btn);
    if (btn.onclick){
        del();
    }
}


    function pushData(){
    var inputText = document.getElementById('inputText').value;
    a.push(inputText); 
    document.getElementById('pText').innerHTML = a;
    Button();   
    }


function del(){

}
