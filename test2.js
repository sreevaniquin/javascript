let dollar="$"
console.log(dollar.length);
let mystring="hello world"
console.log(mystring.substring(1,4));
mystring.slice(1,4);
console.log(mystring.slice(-6))
mystring.indexOf("w")
mystring.indexOf("e",3) //if there is letter e after index 3
mystring.lastIndexOf("l")//last occurrence of a character in a string
mystring.startsWith("+91")//gives a boolean value
mystring.endsWith("@abc.xyz")//boolean value
mystring.includes("llo")
mystring.toLowerCase()//returns a new string 
mystring.toUpperCase()
console.log(mystring.normalize())

console.log("HDFC334433".padStart(12,"0"))//if there are less than 12 characters 0 will be added at the start
console.log("*".repeat(15))//return a new string
let score=100
let greeting=`\
${dollar} is at 
value of ${score}
\u2718
`
console.log(greeting);
let myNewString=`\u2718`.length
console.log(myNewString);
let myNewString1=String.raw`\u2718`.length //value is 6 because it simply counts the characters written
console.log(myNewString1);