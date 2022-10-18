"use strict"

let stringQuotes = "kek1 " + 'kek2 ' + `kek3 ` + `kek4
2 kek
3 kek
`
console.log(stringQuotes)

let specialSymbols = "\x7f \u3123 \n \'\"\\ \u{20331} \u{1F60D}"
console.log(specialSymbols)

let length17 = "17 symbols length".length

console.log(length17)

console.log("----------------")
console.log("Hello"[0]) // same as "Hello".charAt(0)
console.log("Hello"[100]) //undefined
let sum = 0
for (let char of "12345678") {
    sum += +char
}
console.log(sum)

let string = "hello"

let correctChar = string[0].toUpperCase()

console.log(correctChar)

console.log(string.indexOf("ll"))

console.log("abab".indexOf("ab", 1))

if ("kek".indexOf('k')) {
    alert("kek1") // doesn't work
}

if ("kek".indexOf('k') != -1) {
    console.log("kek2") // works
}

if ("kek".includes('k')) {
    console.log('Yeap')
}

console.log("kek".startsWith("k"))
console.log("kek".startsWith("e"))
console.log("kek".endsWith("e"))
console.log("kek".endsWith("k"))

string = "i am the greatest"

console.log(string.slice(string.indexOf('g')))
console.log(string.slice(string.indexOf('g'), string.indexOf('t', string.indexOf('g'))))

// difference between string.slice and string.substring:

console.log(string.slice(4, 2)); //empty
console.log(string.substring(4, 2)); //return string from 2 to 4

console.log("---------------")

console.log(string.codePointAt(0)) // code of  'i'
console.log(String.fromCodePoint(100)) // code of  'i'

//homework


function ucFirst(str) {
    if (!str.length) return str
    let firstChar = str[0].toUpperCase()
    return firstChar + str.slice(1)
}

console.log(ucFirst("denis"))
console.log(ucFirst("Kekkek"))
console.log(ucFirst("kEKKEK"))
console.log(ucFirst(""))

function checkSpam(str) {
    let strCopy = str.toLowerCase()
    return strCopy.includes("viagra") || strCopy.includes("xxx")
}

console.log(checkSpam('buy ViAgRA now') == true)
console.log(checkSpam('free xxxxx') == true)
console.log(checkSpam("innocent rabbit") == false)
console.log("-----------")

function truncate(str, maxLength){
    if(str.length > maxLength) {
        return str = str.slice(0, maxLength - 1) + "…"
    } else return str
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) == "Вот, что мне хотело…")

console.log(truncate("Всем привет!", 20) == "Всем привет!")