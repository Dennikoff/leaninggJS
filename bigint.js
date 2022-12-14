"use strict"

let billion = 1e9
console.log(billion)
let oneDivMillion = 1e-6
console.log(oneDivMillion)

let hex1 = 0xff
let hex2 = 0xabcdef123
console.log(hex2)
let bin1 = 0b11111111
console.log(hex1 == bin1)

let num = 245

let num_str = num.toString(2)
console.log(num_str)

let num1 = 3.1
let num2 = 3.6
let num3 = -1.2
let num4 = -1.7

console.log("-----------------------------------")
console.log(Math.floor(num1))
console.log(Math.floor(num3))
console.log(Math.round(num1))
console.log(Math.round(num2))
console.log(Math.round(num3))
console.log(Math.round(num4))
console.log(Math.ceil(num1))

let num5 = 1.234567
console.log("---------------")
console.log(num5.toFixed(3))

console.log(0.1 + 0.2 == 0.3) //false??? yeap

console.log((0.1 + 0.2).toFixed(2) == 0.3)

console.log("----------")
console.log(isNaN("kek"))
console.log(isNaN(NaN))
console.log(NaN === NaN)

console.log(isFinite("228"))
console.log(isFinite("229k"))
console.log(isFinite(1e309)) //Infinite

console.log("------")
console.log(parseInt("123$"))
console.log(parseInt("123.234"))
console.log(parseFloat("123.134.4"))
console.log(parseFloat("k1234"));
console.log("----")
console.log(parseInt("ff", 16)) // or 0xff, it is the same
console.log(Math.random()) // [0, 1)

console.log(Math.round(6.35*10)/10)

//readNumber()

function readNumber() {
    let x = "xx"
    while (isNaN(x)) {
        x = prompt("Enter Number")
        if (x === ""){
            x = null
            break
        }

    }
    alert("Good job")
    alert(x)
}

function randomInteger(min, max) {
    return min + Math.random() * (max - min)
}

console.log(randomInteger(1, 6))
console.log(randomInteger(6, 6))

