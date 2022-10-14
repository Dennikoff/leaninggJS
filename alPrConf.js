"use strict"

document.querySelector(".btn-1").onclick = func1
function func1() {
    let res = prompt("test", "")
    alert(`tesing ${res}`)
}

function func2() {
    let isBoss = confirm("Ты здесь главный?");
    alert( isBoss );
}

function func3() {
    let name = prompt("What is your name", "")
    alert(`Hello ${name}`)
}