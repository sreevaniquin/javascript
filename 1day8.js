//primitive values
let myString="JavaScript"
myString.toLowerCase();//returns new string 

//object
let myObject={name:"java script"}
myObject.name="not javascript"
myObject.lastName="course"//mutable

//arrays
let heroScore=[2,4,5,6,1]
heroScore[1]=5;//mutable

let arrayRef=[1,2]
let anotherArrayRef=arrayRef//total reference of the array
anotherArrayRef[0]=5;
console.log(arrayRef);
console.log(arrayRef===anotherArrayRef);

let anotherArray1=Array.from(arrayRef)//just copy the array elements
console.log(anotherArray1===arrayRef);

//type conversion
console.log(10+"object");//10object
console.log("7"*"4");//28
let num=1-"x"
console.log(num);//NaN
console.log(num+"objects");//NaNobjects

//forcefull conversion
Number("3");
let a=1600.4343
a.toFixed(2);
console.log(Boolean(""));//false
console.log(Boolean([]));//true

let color=14
let binarycolor=color.toString(2)
console.log(binarycolor);
console.log({1:"one"}.toString());
let newDate=new Date(2022,1,1)
console.log(newDate);
let datestring=newDate.toString()
console.log(datestring.valueOf())
console.log(newDate.valueOf());










