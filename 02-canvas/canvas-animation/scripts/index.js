const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const cWidth = canvas.width;
const cHeight = canvas.height;
/*
function drawRect(x, y, w, h, color) {
  ctx.fillStyle = color; // color é opcional
  // se não for passado, ele usa o cor que tiver
  ctx.fillRect(x, y, w, h);
}

drawRect(10, 20, 30, 30, 'turquoise');
ctx.save();

drawRect(50, 70, 30, 30, 'orangeRed');
ctx.save();

drawRect(120, 150, 30, 30, 'magenta');

ctx.restore();
drawRect(200, 70, 30, 30);

ctx.restore();
drawRect(250, 20, 30, 30);
*/

// passos da animação
/*
  1. salvar o estado, caso precise
  2. limpar o canvas
  3. altero os estilos
  4. redesenhar com as posições e estilos atualizados
  5. recupero o estado, caso precise
*/

// Tempo de quadros da animação
// setTimeout() - executa 1x
// setInterval() - executa várias vezes
// requestAnimationFrame()

const color = {
  red: Math.floor(Math.random() * 255),
  green: Math.floor(Math.random() * 255),
  blue: Math.floor(Math.random() * 255),
  rgb: function () {
    return `rgb(${this.red}, ${this.green}, ${this.blue})`
  } 
};

function updateCanvas () {
  console.log('update canvas');
  color.red = (color.red + 1) % 255;
  color.green = (color.green + 1) % 255;
  color.blue = (color.blue + 1) % 255;

  ctx.clearRect(0, 0, cWidth, cHeight);
  ctx.fillStyle = color.rgb(); // rgb(red, green, blue);
  ctx.fillRect(0, 0, 150, 150);

  requestAnimationFrame(updateCanvas);
}

updateCanvas();