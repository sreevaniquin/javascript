/*function x(){
    var i=1;
    setTimeout(function(){
        console.log(i);
    },3000);
    console.log("javascript");
}
x();*/

/*function x(){
    for(var i=1;i<=5;i++){ //if its let the case is different
        setTimeout(function(){
            console.log(i)
        },i*1000);
    }
    console.log("javascript");
}
x();//output will be 6 6 6 6 6*/

/*function x(){
    for(var i=1;i<=5;i++){
        function close(x){
            setTimeout(function(){
                console.log(x);
            },x*1000);
        }
        close(i);
    }
    console.log("javascript");
}
x();*/

/*function outer(){
    var a=10;
    function inner(){
        console.log(a);
    }
    return inner;
}
outer()();*/

/*function outer(b){
    function inner(){
        console.log(a,b);
    }
    let a=10;
    return inner;
}
var close=outer("hello");
close();*/

function outest(){
    var c=20;
function outer(b){
    function inner(){
        console.log(a,b,c);
    }
    let a=10;
    return inner;
}
return outer;
}
var close=outest()("hello");
close();