//callback function
setTimeout(function(){
    console.log("timer")
},5000)
function x(y){
    console.log("x");
    y();
}
x(function y(){
    console.log("y");
});