/*const user=[
    {firstName:"donald",lastName:"trump",age:75},
    {firstName:"elon",lastName:"musk",age:75},
    {firstName:"barack",lastName:"obama",age:60},
];
//const output=user.map((x)=>x.firstName+x.lastName);
//console.log(output);
const o=user.reduce(function(acc,curr){
    if (acc[curr.age]){
        acc[curr.age]=++acc[curr.age];

    }
    else{
        acc[curr.age]=1;
    }

},{});
console.log(o);*/

/*const radius=[3,1,2,4];
const calculateArea=function(radius){
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(Math.PI*radius[i]*radius[i]);
    }
    return output;
}
console.log(calculateArea(radius));
const calculateCircumference=function(radius){
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(2*radius[i]);
    }
    return output;
}
console.log(calculateCircumference(radius));
*/

const radius=[3,1,2,4];
const area=function(radius){
    return Math.PI*radius*radius;
};
const circumference=function(radius){
    return 2*Math.PI*radius;
}
const calculate=function(radius,logic){
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output;
};
console.log(calculate(radius,area));
console.log(calculate(radius,circumference));//higher order function
