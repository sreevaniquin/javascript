/*function sayHello(name){
    console.log("Hello there");
    //console.log("Hello there",name);
    console.log(`hello there,${name},how are u?`)
}
sayHello("abc");
sayHello("xyz");
function fun(){
    return "hello";
}
var greet=fun();
console.log(greet);
console.log(fun());*/
var getUserRole=function(name,role){
//function getUserRole(name,role){}
    switch(role){
        case "admin":
            return `${name} is admin with all access`;
            break;//not necessary when using return
        case "subadmin":
            return`${name} is sub admin with access to create/delete tests`;
            break;
        case "testprep":
            return`${name} is  a testprep`;
            break;
        case"user":
            return`${name} is a user`;
            break;
        }
}
console.log(getUserRole("abc","user"));
var GetRole=getUserRole("xyz","admin")
console.log(GetRole);
