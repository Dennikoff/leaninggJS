"use strict"

let bool1 = "б" > "Б" //true
let bool2 = "бб" > "б" //true
let bool3 = "бв" > "ба"  //true

let bool1E = "B" > "b" //false??
let bool2E = "bb" > "bbb" //false??
let bool3E = "bb" > "bc" //false??

// alert(`Rus: ${bool1} ${bool2} ${bool3}\nEng: ${bool1E} ${bool2E} ${bool3E}`)

/*
true
false
false --
true
false
false
false
*/

document.querySelector(".btn-1").onclick = func3
function func1() {
    let a = prompt('Какое "официальное" название JavaScript?');
    if (a === "ECMAScript") {
        alert("КРАСАУЧИК ИУУУУ")
    } else {
        alert("БЫДЛО, УЧИ МАТЧАСТЬ")
    }
}


function func2(){
    let a = +prompt("Enter number:", "")
    alert(a > 0 ? 1: a === 0 ? 0 : -1)
}


// result = a + b < 4 ? 'Мало' : 'Много'

function func3() {
    let login = +prompt("Choose your role: (1 - Member, 2 - Director, 3 - Vadim)")
    alert(login === 1 ? 'Hi': login === 2 ? 'Hello' : login === 3? 'ПРОХОДИТЕ, БОЖЕНЬКА' : 'You are not allowed')
}

/*
2
(12)2 --
null
12false(1undefined) --
3

 */

let age = 13;
if (age >= 14 && age <= 90){
    console.log("ok")
} else {
    console.log("not ok")
}

if (!(age < 14 || age > 90)){
    console.log("ok")
}  else {
    console.log("not ok")
}

// let x;

// alert(x ?? 10) // if x is undefined then print 10
//
// const number = +prompt('Введите число между 0 и 3', '');
//
// switch (number) {
//     case 0:
//         alert('Вы ввели число 0');
//         break;
//     case 1:
//         alert('Вы ввели число 1');
//         break;
//     case 2:
//     case 3:
//         alert('Вы ввели число 2, а может и 3');
//         break
// }
