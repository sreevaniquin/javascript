/*console.log("Start");
setTimeout(function cb(){
    console.log("Callback");
},5000);
console.log("End");*/

/*const uno=()=>{
    setTimeout(()=>{
        console.log("wohooo");

    },3000)
    console.log("I am one");
};
const uno1=()=>{
    console.log("I am Two");
};
const uno2=()=>{
    console.log("I am Three");
};
uno();
uno1();
uno2();*/

/*const uno=async()=>{
    setTimeout(()=>{
        return "I am one";

    },3000)
    //return"I am one";
};*/
const uno=()=>{
    return"i am one";
}
const uno1=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("i am Two");
        },3000);
    });
};
const uno2=()=>{
    return"I am Three";
};
const callMe=async()=>{
    let val1=uno();
    console.log(val1);
    let val2= await uno1();
    console.log(val2);
    let val3=uno2();
    console.log(val3);
}
callMe();
