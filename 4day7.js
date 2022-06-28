/*function counter(){
    var count=0;
return function incrementCounter(){
    count++;
    console.log(count);
}
}
//console.log(count);//gives error (data hiding)
var counter1=counter();
counter1();*/

/*function counter(){
    var count=0;
    this.incrementCounter=function(){//constructor functions
        count++;
        console.log(count);
    }
    this.decrementCounter=function(){
        count--;
        console.log(count);
    }
}
var counter1=new counter();
counter1.incrementCounter();
counter1.decrementCounter();*/

/*function a(){
    var x=0;
    return function b(){
        console.log(x);
    }
}
var y=a();  
y(); //closure accumulates lot of memory and will not be garbage collected
*/

//Function statement
a();
function a(){
    console.log("a called");
}
//a();
b();//throws an error as it is treated as variable
//Function Expression
var b=function(){
    console.log("b called");
}
//b();
//anonymous function
/*function(){//syntax error
}*/
//named function expression
var b=function xyz(){
    console.log("b is called");
}
xyz()//gives an error as its not a function and createda s local variable
//first class functions
var b=function(param1){
    return function(){

    }
}
console.log(b());