const body = document.getElementsByTagName("body")[0];

function setColor(color) {
    body.style.backgroundColor = color;
}

function setRandomColor() {
    const colors = ['red', 'yellow', 'blue'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    body.style.backgroundColor = randomColor;
}