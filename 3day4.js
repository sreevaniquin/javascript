/*console.log(this);//gives empty set of paranthesis can be undefined sometimes in different compilers
var game="basketball";
function sayName(){
    var name1="java script";
    console.log(this);
}
sayName();*/ 

console.log(this);
var user={
    firstName: "Javascript",
    courseCount:4,
    getCourseCount:function(){
        console.log("line 14",this);
    }
};
user.getCourseCount();

function sayHello(){
    console.log("Hello");
}
sayHello();//regular function call

/*var countries=["India","USA","Japan","Russia"];
var states=new Array("Rajasthan","Delhi","Mumbai","Assam")
console.log(states[1]);
console.log(states.length);
states[0]="punjab";
console.log(states);
var user=["abc","abc@xyz.com",3,34,true];
console.log(user);
user.pop();
user.pop();
console.log(user);
user.unshift("New value");
console.log(user);
user.shift();
console.log(user.indexOf(3));
console.log(Array.from("abc")); //array of characters
*/

//var isEven=(element)=>{//arrow function{
    /*if(element %2===0){
        return true;
    }
    return false;
    return element%2===0;
}
//console.log(isEven(2));
var res=[2,4,6,8].every(isEven);
console.log(res);*/
/*var result=[2,3,6,8].every((e)=>{
    return e%2===0;
});
console.log(result);
var result=[2,4,6,8].every((e)=>(e%2===0));
console.log(result);*/

//fill and filter
/*var testArray=[2,4,6,3,1,5,9,8];
console.log(testArray.fill("h",2));//h will be filled from index 2

const myNum=[23,24,25,55,66,77,87,98];
const result=myNum.filter((num)=>num!=55); //except 55 all elements in the array gets printed.
console.log(result);*/

//slice and splice
/*var users=["Ted","Tim","Tom","Sam","Sor","Sod"];
console.log(users.slice(1,3));
console.log(users.slice(1));
users.splice(1,3,"hi");
console.log(users);*/


