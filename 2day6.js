/*var a;
console.log(a);
a=10;
console.log(a);
a="hello";
console.log(a);*///javascript is loosely typed language

/*const arr=[5,1,3,2,6];
function double(x){
    return x*2;
}
function triple(x){
    return x*3;
}
function binary(x){
    return x.toString(2);
}
const output=arr.map(double);
const output1=arr.map(triple);
const output2=arr.map(binary);
console.log(output);
console.log(output1);
console.log(output2);*/

/*const arr=[5,1,3,2,6];
function isOdd(x){
    return x%2;
}
function isEven(x){
    return x%2===0;
}
const output=arr.filter(isOdd);
console.log(output);
console.log(arr.filter(isEven));
const o=arr.filter((x)=>x>4);
console.log(o);*/

/*const arr=[5,1,3,2,6];
function findSum(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    return sum;
}
console.log(findSum(arr));
const output=arr.reduce(function(acc,curr){
    acc=acc+curr;
    return acc;

},0);//0 is the initial value for accumulator(acc)
console.log(output);*/

const arr=[5,1,3,2,6];
function findMax(arr){
    var max=0;
    for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
    return max;
}
console.log(findMax(arr));
const output=arr.reduce(function(acc,curr){
    if(curr>acc){
        acc=curr;
    }
    return acc;

},0);
console.log(output);
