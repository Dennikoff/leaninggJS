"use strict"

document.querySelector(".btn-1").onclick = func1
function func1() {
    let res = prompt("Я сосал, меня ебали, что на жопе написали?", "")
    alert(`На жопе написали ${res}`)
}

function func2() {
    let isBoss = confirm("Ты здесь главный?");
    alert( isBoss );
}

function func3() {
    let name = prompt("What is your name", "")
    alert(`Hello ${name}`)
}