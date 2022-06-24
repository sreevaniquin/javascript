/*var user={
    firstName:"java script",
    lastName:"course",
    role:"program",
    logincount:32,
    facebookSignedIn:true 
};
//to access values
/*console.log(user.firstName);
console.log(user["lastName"]);
user.logincount=44;
console.log(user.logincount);
console.log(user);
console.table(user);//to display information in form of table
*/

var user={
    firstName:"java script",
    lastName:"course",
    role:"program",
    logincount:32,
    facebookSignedIn:true ,
    courseList:[],
    buyCourse:function (courseName) {//method in an object
        this.courseList.push(courseName);//refers to user
   },
   getcourseCount:function(){
    return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`
   },
};
var courseList=true;
console.log(user.firstName);
console.log(user.buyCourse("java script"))
console.log(user.getcourseCount())

