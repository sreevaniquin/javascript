let score=100
if(score===100){
    console.log("great score");
}
console.log(typeof(false.toString()))
console.log(typeof(null))
console.log(typeof(undefined))
String("hello")
"hello"
let mySym=Symbol("p1")
console.log(mySym)
let mySym2=Symbol("p1")
let priority=Symbol.for("p2")
let priority2=Symbol.for("p2")
console.log(priority==priority2)
console.log(mySym==mySym2)

const WIN=Symbol("WINDOW")
const AILE=Symbol("AILE")
const MID=Symbol("MID")
const crew=Symbol("WINDOW")
function getSeat(getValue){
    switch(getValue){
        case WIN:
            return "Seat is alloted"
        case AILE:
            return "seat is allotted"
        case MID:
            return "seat is allotted"
        default:
            console.log("NO SEAT ALLOTTED")
    }
}
console.log(getSeat(crew))
console.log(this)
console.log(globalThis)