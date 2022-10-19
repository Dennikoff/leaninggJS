"use strict"

let arr1 = new Array()
let arr2 = []

let arr = ["kek", "lol"]

console.log(arr.length)

arr[1] = "orbidol"


arr.push("mem")
arr.unshift("mem2")

console.log(arr)

let fruits = []; // создаём массив

fruits[99999] = 5; // создаём свойство с индексом, намного превышающим длину массива

fruits.push("jopa")

fruits.age = 25;

console.log(fruits)

for(let i = 0; i < arr.length; i++) {
    console.log(i)
}

for(let key in arr) {
    console.log(key)
}

let array = [1, 2, 3, 4, 5, 6]

array.length = 3

console.log(array)

let styles = ["Джаз", "Блюз"]

styles.push("Рокк-н-Ролл")

styles[(styles.length - 1)/2] = "Классика"

//alert(styles.shift())

styles.unshift("Реп", "Регги")

console.log(styles)

function getMaxSubSum(arr) {
    let maxSum = 0
    let curSum = 0
    for (let item of arr) {
        curSum += item
        maxSum = Math.max(curSum, maxSum)
        if(curSum < 0) {
            curSum = 0
        }
    }
    return maxSum;
}


let arrNew = [123, 456, 789, 0]

console.log("--------------------")
console.log(arrNew.splice(1,1));

arrNew.splice(0,2,11, 22)
console.log(arrNew)

console.log(arrNew.slice(0,2));

[1, 2, 3, 4].forEach((value, index, array) => {
    //alert(`value ${value} on the ${index + 1} place in ${array}`)
})

console.log([10,124,334,3313].indexOf(334))
console.log([10,124,334,3313].includes(334))

let names = [
    {id: 1, name: "Denis"},
    {id: 2, name: "Danya"},
    {id: 3, name: "Varya"}
]

console.log(names.find((item) => item.id === 2))

console.log(names.filter((item) => item.id > 1))
let sum = 0
console.log([1, 2, 3, 4, 5, 6, 7].map(item => {
    sum += item;
    return sum
}))
console.log([1,2,3,4,5,6,7].reduce((sumReduce, current) => sumReduce + current, 0)) //same as map

let unsortedArr  = [1, 5, 4, 7, 2, 3, 8, 6, 10, 9]

unsortedArr.sort((a, b) => a - b)
console.log("-----------------")

console.log(unsortedArr)
console.log(unsortedArr.reverse())

console.log("-----------------")

let arrFromString = "kek, lol, orbidol".split(", ")

console.log(arrFromString)
let strFromArr = arrFromString.join(", ")
console.log(strFromArr)

console.log(Array.isArray([]), Array.isArray({}))


function camelize(str) {
    let arr = str.split('-').map((value, index) => {
        if (index >= 1){
            return value[0].toUpperCase() + value.slice(1)
        } else {
            return value
        }
    });
    return arr.join('')
}
console.log("background-color = ", camelize("background-color"));
console.log("list-style-image = ", camelize("list-style-image"));
console.log("-webkit-transition = ", camelize("-webkit-transition"));


function filterRange(arr, a, b){
    return arr.filter(value => value >= a && value <= b )
}

arr = [5, 3, 8, 1, 2, 6, 9, 7, 10, 4];

let filtered = filterRange(arr, 3, 7);

console.log(arr, filtered)

function filterRangeInPlace(arr, a, b) {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}

arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

console.log(arr);

console.log("------------------")

arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a)

console.log(arr)

console.log("-------")

function copySorted(arr) {
    return arr.slice().sort()

}

arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

// alert(sorted);

// alert(arr);

function Calculator() {
    this.methods = {
        '+': (a, b) => +a + +b,
        '-': (a, b) => a - b
    }
    this.calculate = function (str) {
        arr = str.split(' ')
        return this.methods[arr[1]](arr[0], arr[2])
    }
    this.addMethod = function (name, func) {
        this.methods[name] = func
    }
}

let calc = new Calculator()


console.log(calc.calculate("3 + 7"));
console.log(calc.calculate("3 - 7"));
console.log(calc.calculate("7 - 7"));
calc.addMethod("*", (a, b) => a * b)
calc.addMethod("**", (a, b) => a ** b)

console.log(calc.calculate("2 ** 3"));
console.log(calc.calculate("7 * 7"));

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
//
// let users = [ vasya, petya, masha ];
//
//
//
// names = users.map(item => item.name)
//
// alert( names );



// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };
//
// let users = [ vasya, petya, masha ];
//
// let usersMapped = users.reduce((arr, value, index) => {
//     arr[index] = {
//         id: value.id,
//         fullName: value.name + ' ' + value.surname
//     }
//     return arr
// }, []);
//
// console.log("---------------")
// console.log(usersMapped)

function sortByAge(arr) {
    arr.sort((a, b) => a.age < b.age ? 1 : -1)
    return arr
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

arr = [ vasya, petya, masha ];

sortByAge(arr);

//
// alert(arr[0].name);
// alert(arr[1].name);
// alert(arr[2].name);

function shuffle(arr) {
    arr.sort(()=>Math.random() - 0.5)
}

arr = [1, 2, 3];

shuffle(arr);
console.log(arr)

shuffle(arr);
console.log(arr)

shuffle(arr);
console.log(arr)

console.log("-------------")

function getAverageAge(arr) {
    sum = arr.reduce((currentSum, value) => currentSum += value.age,0)
    return arr.length > 0 ? sum / arr.length : 0;
}

vasya = { name: "Вася", age: 100 };
petya = { name: "Петя", age: 200 };
masha = { name: "Маша", age: 250 };

arr = [ vasya, petya, masha ];

alert( getAverageAge(arr) );


function unique(arr) {
    let newArr = []

    for (let i = 0; i < arr.length; i++) {
        if(newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

let str = unique(strings);
console.log(str)

function groupById(array){
    // let newArr = []
    // for(let i = 0; i < array.length; i++) {
    //     newArr[array[i].id] = array[i]
    // }
    // return newArr
    return array.reduce((newArr, value) =>{
        newArr[value.id] = value;
        return newArr;
    }, [])
}

let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

console.log(usersById)