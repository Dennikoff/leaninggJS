"use strict"

const map = new Map()

map.set("1", "one")
map.set("2", "two")
map.set("three", "3")

console.log(map.get("1"))
console.log(map["three"])

for(let key of map.keys()) {
    console.log(key)
}

for(let value of map.values()) {
    console.log(value)
}

for(let [key, value] of map.entries()) {
    console.log(key, value)
}

let map1 = new Map([
    ["one", 1],
    ["two", 2],
    ["three", 3]
])

console.log(map1.get("one"))
// console.log(map)

function unique(arr) {
    return Array.from(new Set(arr))
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) );
