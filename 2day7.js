/*function a(){
    var a=10;
    console.log(b);
    c();
    function  c(){
        console.log(b);
    }
}
var b=10;
console.log(a);//cant be accessed (scope)
a();*/

/*console.log(b);//undefined
console.log(a);//gives REFERENCE ERROR
let a=10;//not stored in global 
var b=100;//stored in global*/

/*if(true) console.log("javascript");//for one statement
if(true){
    var a=10;
    console.log(10);
}//block to combine multiple statements
*/

/*var a=100; //concept of shadowing
let b=200;
const c=300;
{
    var a=10;//shadowing (a is now 10 and not 100)
    let b=20;
    const c=30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
console.log(b);//block scope
console.log(c);//block scope */

/*function x(){
    var a=10;
    function y(){
        console.log(a);
    }
    //y();
    a=100;
    return y;
}
var z=x();//function with its lexical scope will be now stored in z(i.e) closure
console.log(z);
z();*/

function z(){
    var b=900;
    function x(){
        var a=10;
        function y(){
            console.log(a,b);
        }
        y();
    }
    x();
}
z();


