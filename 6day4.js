var User=function(firstName,courseCount){
    this.firstName=firstName; //one way to define objects(functional approach)
    this.courseCount=courseCount;
    this.getCourseCount=function(){
        console.log(`course count is:${this.courseCount}`)
    }
};
User.prototype.getFirstName=function(){
    console.log(`your firstname is:${this.firstName}`);
}
var a= new User("abc",2);
//console.log(a);
a.getCourseCount();
//console.log(a.firstName);
var b= new User("xyz",1);
//console.log(b);
b.getCourseCount();
//b.getFirstName();
if(b.hasOwnProperty("firstName")){
    b.getFirstName();
}