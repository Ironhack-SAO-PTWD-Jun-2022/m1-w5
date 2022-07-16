console.log('control.js conectado!');

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = '#F00';

let posY1 = 0;
let posY2 = 0;
let posY3 = 0;

function clearCanvas () {
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
}

function drawRect (x, y, w, h, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

function updateCanvas () {
  posY1 += 1;
  posY2 += 2;
  posY3 += 3;

  clearCanvas();

  drawRect(50, posY1, 50, 50, 'red');
  drawRect(150, posY2, 50, 50, 'green');
  drawRect(250, posY3, 50, 50, 'yellow');

  console.log(posY1, posY2, posY3);

  requestAnimationFrame(updateCanvas);
}

updateCanvas();
