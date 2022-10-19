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

// alert( unique(values) );


let user = {
    name: "John",
    age: 25,
    id: 1
}

let mapFromObject = new Map(Object.entries(user))

function sumSalaries(arr) {
    let sum = 0
    for (let value of Object.values(arr)) {
        sum += value
    }
    return sum
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

// alert( sumSalaries(salaries) );

function countObj(obj) {
    return Object.values(obj).length
}

let id = Symbol("id")

// alert(countObj({
//     f: "kek",
//     k: "mem",
//     [id]: "lol"
// }))

user = { name: "John", years: 30 };

let {name: name, years: age, isAdmin: isAdmin = 'false'} = user

console.log(name, age, isAdmin)

salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

let maxName;
let maxSal = 0;

for(let [name, salarie] of Object.entries(salaries)) {
    if (salarie > maxSal) {
        maxSal = salarie;
        maxName = name;
    }
}
console.log(maxName)
