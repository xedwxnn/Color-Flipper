const square = document.getElementById("square");
const currentColorEl = document.getElementById('currentColor');

function setColor(color) {
    square.style.backgroundColor = color;
    currentColorEl.innerText = color;
}