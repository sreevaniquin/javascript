/*for(let i=0;i<10;i++){
    console.log(i);
}*/
/*const myStates=[
    "Rajasthan",
    "Delhi",
    "Assam",
    1947,
    "Tamil Nadu",
    "Kerala",
];
/*for(let i=0;i<myStates.length;i++){
    if(typeof myStates[i]!=='string') continue;
    console.log(myStates[i]);
}
let i=0;
while(i<myStates.length){
    console.log(myStates[i]);
    i++;
}*/
/*var i=0;
for(;;){
    if(i>3) break;
    console.log(i);
    i++;
}
myStates.forEach((s)=>console.log(s)); //for each callback function
*/

const names=["youtube","facsbook","Instagram","Netflix","Amazon"];
for(const n of names){//for of loop
    console.log(n);
}
const symbols={//creating objects
    yt:"Youtube",
    ig:"Instagram",
    fb:"Facebook",
};
for(const n in symbols){
    console.log(`key is ${n} and value is:${symbols}`);
}