/*tip("5") //global context allows us to call the function first.
function tip(a){
    //var bill=a;
    var bill=parseInt(a);
    console.log(bill+5);
}
//tip(5);
//tip("5");
bigTip("200");
var bigTip=function(a){ //variable declaration are scanned and made undefined this is code hoisting`
    var bill=parseInt(a);
    console.log(bill+15);
}*/
console.log(name1);  //proof that variable declaration are made undefined.
var name1="java script"; //undefined as output

function sayName(){
    var name1="java script";
    console.log(name1);
}
console.log(name1);
