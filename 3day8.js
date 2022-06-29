/*console.log("I")
console.log("eat ")
setTimeout(()=>{
    console.log("icecream ")
},3000)
console.log("with a ")
console.log("spoon ")*/

/*function one(call_two){
    console.log("step1 complete.call step 2");
    call_two();
}
function two(){
    console.log("step 2")
}
one(two);//callback function*/

let stocks={
    fruits:["strawberry","grapes","banana","apple"],
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolate","peanut"],
};

/*let order=(fruit_name,call_production)=>{
    setTimeout(()=>{
        console.log(`${stocks.fruits[fruit_name]} was selected`)
    //console.log("order placed,please call production")
    call_production()},2000);
};
let production=()=>{
    setTimeout(()=>{
        console.log("production has started");
        setTimeout(()=>{
            console.log("the fruit has been chopped");
            setTimeout(()=>{
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
                setTimeout(() =>{
                    console.log("the machine was started");
                    setTimeout(()=>{
                        console.log(`icecream was placed on ${stocks.holder[0]} `);
                        setTimeout(()=>{
                            console.log(`${stocks.toppings[0]} was added as toppings`);
                            setTimeout(()=>{
                                console.log("serve ice cream");
                            },2000)

                        },3000)
                    },2000)

                },1000)
            },1000)
        },2000);
    },0000);//known as callback hell
//solution for callback hell is promises
    //console.log("order received,starting production")
};
order(0,production);
*/
let is_shop_open=true;
let order=(time,work)=>{
    return new Promise( (resolve,reject)=>{
        if(is_shop_open){
            setTimeout( ()=>{
              resolve(work())

            },time)
        }
        else{
            reject(console.log("shop is closed"));
        }

    })

}
order(2000,()=>console.log(`${stocks.fruits[0]} was selected`))

.then(()=>{
    return order(0000,()=>console.log("production has started"));
})
.then(()=>{
    return order(2000,()=>console.log("the fruit was chopped"));
})
.then(()=>{
    return order(1000,()=>{
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`)
    })
})
.then(()=>{
    return order(1000,()=>{
        console.log("start the machine");
    })
})
.then(()=>{
    return order(2000,()=>{
        console.log(`icecream placed on ${stocks.holder[0]}`)
    })
})
.then(()=>{
    return order(3000,()=>{
        console.log(`${stocks.toppings[0]} was selected`)
    })
})
.then(()=>{
  return order(1000,()=>{
    console.log("icecream was served");
  })
})

.catch(()=>{
    console.log("customer left")
})//catch will run if is_shop_open is false (i.e)reject

.finally(()=>{
    console.log("day ended,shop is closed");
})