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

alert(styles.shift())

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

