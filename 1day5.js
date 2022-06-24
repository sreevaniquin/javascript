/*var User={
    name:"",
    getUserName:function(){
        console.log(`user name is: ${this.name}`);
    }
    };
    var a=Object.create(User);
    console.log(a);
    a.name="java script";
    a.getUserName();

    var b=Object.create(User,{
        name: {value:"java"},
        courseCount:{value: 3},
    });
    b.getUserName();*/
  /* (function (){
        console.log("i say hello");
        console.log("i again say hello");
   })
   (); *///self executing anonymous function
 
   /*function init(){
    var firstName="java script";
    console.log("I am init");
    function sayFirstName(){
        console.log(firstName)
    }
    //sayFirstName();
    return sayFirstName;
   }
   var value=init();
   //console.log(firstName);//cant access firstame from function
    value();//this is closure and gives access to firstName
*/
function doAdd(x){
    return function(y){
        return x+y;
    }
}
var add5=doAdd(4)
console.log(add5(5));//closure concept
console.log(doAdd(5)(5));//closure concept

