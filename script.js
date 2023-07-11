function add(){
    
    var a=parseInt(document.getElementById("n1").value);
    var b=parseInt(document.getElementById("n2").value);
    var z=a+b;
    document.getElementById("ans").innerHTML=z;
}
function sub(){
    
    var a=parseInt(document.getElementById("n1").value);
    var b=parseInt(document.getElementById("n2").value);
    var z=a-b;
    document.getElementById("sub_ans").innerHTML=z;
}
function mul(){
   
    var a=parseInt(document.getElementById("n1").value);
    var b=parseInt(document.getElementById("n2").value);
    var z=a*b;
    document.getElementById("mul_ans").innerHTML=z;
}
function div(){
    
    var a=parseInt(document.getElementById("n1").value);
    var b=parseInt(document.getElementById("n2").value);
    var z=a/b;
    document.getElementById("div_ans").innerHTML=z;
}