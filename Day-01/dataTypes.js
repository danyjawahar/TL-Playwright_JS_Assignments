console.log("---Primitive Data Types--")

var city = "Planning to relocate"
var city = "Not living in Chennai" // var allows redeclare
city = "I live in Chennai"   // var allows reassign
console.log(city)
console.log("Data Type is " + typeof city)


const marks = 85            //const doesnt allow redeclare and reassign
console.log(marks + 10)
console.log("Data Type is " + typeof marks)

let isWeekEnd = true
console.log("Relax")
console.log("Data Type is " + typeof isWeekEnd)
isWeekEnd = false            // let allows reassign
console.log("Work")
console.log("Data Type is " + typeof isWeekEnd)


let futureGoal
console.log(futureGoal)
console.log("Data Type is " + typeof futureGoal)

//var   --> Allows redeclare and reassign
//      --> accessible anywhere in the program
//      --> function level scoping
//let   --> Allows reassign but wont allow redeclare
//      --> accessible only inside the block
//      --> Block level scoping