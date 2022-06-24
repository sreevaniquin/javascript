/*var value=Math.max(2,5,7,4,2,9,8)
console.log(value);
var myObj={}
Object.assign(myObj,{a:1,b:2,c:3},{z:9,y:8,x:7});
console.log(myObj);*/

function sumOne(a,b){
    return a+b;
}
var myA=[5,4]
console.log(sumOne(5,4,1));//here 1 is ignored
console.log(sumOne(...myA))//to accept array spread operator


function sumTwo(a,b,...args){//when number of inputs is not constant //here it is REST OPERATOR
    console.log(args);
    let multi=a*b;
   let sum=0;
   for(const arg of args){
    sum=sum+arg;
   }
   return [sum,multi];
}
console.log(sumTwo(2,3,1,5,7));