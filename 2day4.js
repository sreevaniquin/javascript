//scope chain
var name1="java script";
console.log("line 3",name1);

function sayName(){
    var name1="script";
    console.log("line 5",name1);
    sayNameTwo();
    function sayNameTwo(){
        var name1="java1";
        console.log("line 8",name1);

    }
}
/*function abc(){ //this is considered as scope
}*/
sayName();