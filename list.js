"use strict"

function List(value){
    return {
        value,
        next: null
    }
}

let lst = new List(2)

lst.next = new List(1)

console.log(lst)

function sumTo(n) {
    // let sum;
    // for(let i = 1; i < n; i++) {        Cycle
    //     sum += i;
    // }
    // return sum

    // if(n === 1) {                       recursion
    //     return 1
    // } else {
    //     return n + sumTo(n-1)
    // }

    return (n + 1)*n/2          //         formula
}

console.log(sumTo(4))

function factorial(n) {
    if(n === 1) {
        return 1
    } else {
        return n * factorial(n-1)
    }
}

console.log(factorial(5))


function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

// alert(fib(3)); // 2
// alert(fib(7)); // 13
// alert(fib(77));

function printList(list) {
    if(list == null) return
    console.log(list.value)
    printList(list.next)
}

function printListReverse(list) {
    if(list === null) return
    printListReverse(list.next)
    console.log(list.value)
}

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};


printList(list)

printListReverse(list)

