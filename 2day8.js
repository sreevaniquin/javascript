/*let name1={
    firstname:"javascript",
    lastName:"course",
}
let printfullName= function(hometown,state){
    console.log(this.firstname+" "+this.lastName+"from"+hometown+" state"+state);
}
printfullName.call(name1,"Mumbai","Maharashtra");

let name2={
    firstname:"abc",
    lastName:"xyz",
}
printfullName.call(name2,"Mumbai","Maharashtra")
printfullName.apply(name2,["Mumbai","Maharashtra"]);
let printmyName=printfullName.bind(name2,"Mumbai","Maharashtra")
console.log(printmyName);
printmyName();*/

/*let multiply=function(x,y){
   console.log(x*y);
}
let multiplyByTwo=multiply.bind(this,2);//currying using bind
multiplyByTwo(5);
let multiplyByThree=multiply.bind(this,5);
multiplyByThree(3);*/

let multiply=function(x){
    return function(y){
        console.log(x*y);
    }
}
let multiplyByTwo=multiply(2);
multiplyByTwo(3);//currying using closure
