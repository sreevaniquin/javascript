/*var name1=`java`
var fullName=`${name1} script `;
console.log(fullName);
console.log(fullName.charAt(0));
console.log(fullName.endsWith("?"));
console.log(fullName.includes("java"));
console.log(fullName.toUpperCase());

//maps 
var myMap=new Map();
myMap.set(1,"Uno");
myMap.set(2,"dos");
myMap.set(3,"Tres");
myMap.set(4,"Curato");
console.log(myMap);

for(let key of myMap.keys()){
    console.log(`key is ${key}`);
}
for(let value of myMap.values()){
    console.log(`value is ${value}`);
}
for(let [key,value] of myMap){
    console.log(`key is ${key},value is ${value}`);
}
myMap.forEach((key)=>console.log(`${key}`));//gives the values
myMap.delete(2);
console.log(myMap);
*/

/*const user=["java script",3,"admin"]
//var role=user[2];
//var name=user[0];
var[name,courseCount,role]=user;
console.log(role);*/

const myUser={
    name:"javascript",
    courseCount:5,
    role:"admin",
};
console.log(myUser.courseCount);
const{name,courseCount,role}=myUser;//destructor where the name should be same as in the object
console.log(courseCount);