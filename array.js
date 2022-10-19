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
    let sum = 0
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
    let arrNew = arr.slice()

}

arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted );
