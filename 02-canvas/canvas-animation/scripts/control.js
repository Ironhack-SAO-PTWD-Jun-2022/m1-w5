console.log('control.js conectado!');

// 1. pegar o canvas e configurações gerais
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'red';
ctx.font = '18px serif';

function clearCanvas () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// 2. criar "personagem"
class Ghost {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 10;

    const img = new Image();
    img.src = 'https://media.giphy.com/media/Qr8JE9Hvi7ave/200.gif';
    img.addEventListener('load', () => {
      this.img = img;
      this.draw();
    })
  }

  moveUp() {
    this.y -= this.speed;
  }

  moveDown() {
    this.y += this.speed;
  }

  moveLeft() {
    this.x -= this.speed;
  }

  moveRight() {
    this.x += this.speed;
  }

  draw () {
    ctx.drawImage(this.img, this.x, this.y, 50, 50);
  }
}

const ghost = new Ghost(10, 10);

// criar o controle
document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowUp':
      ghost.moveUp();
      break;
    case 'ArrowDown':
      ghost.moveDown();
      break;
    case 'ArrowLeft':
      ghost.moveLeft();
      break;
    case 'ArrowRight':
      ghost.moveRight();
      break;
    default:
  }
  updateCanvas();
})

function updateCanvas () {
  clearCanvas();
  ghost.draw();
  ctx.fillText('Ghost_x: ' + ghost.x, 280, 40);
  ctx.fillText('Ghost_y: ' + ghost.y, 280, 60);

  // requestAnimationFrame(updateCanvas);
}

// updateCanvas();