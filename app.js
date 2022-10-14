console.log("hello world")

document.querySelector(".btn-1").onclick = btn1Clicked

function btn1Clicked() {
    document.querySelector("h1").innerText = 'Hello'
    console.log("button 1 clicked")
}