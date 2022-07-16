console.log('JS conectado!');

const myGameArea = {
  canvas: document.createElement('canvas'),
  frames: 0,
  obstacles: [],
  stop: false,
  start: function () {
    this.canvas.width = 480;
    this.canvas.height = 270;
    this.ctx = this.canvas.getContext('2d');
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    // document.body.appendChild(this.canvas);
    updateGameArea();
  },
  clear: function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  score: function () {      
    const points = Math.floor(this.frames / 5);
    this.ctx.font = '18px courier';
    this.ctx.fillStyle = 'black';
    this.ctx.fillText(`Score: ${points}`, 350, 50);
  }
}

class Component {
  constructor (x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.speedX = 0;
    this.speedY = 0;
  }
  draw () {
    const ctx = myGameArea.ctx;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  newPos () {
    this.x += this.speedX;
    this.y += this.speedY;
  }
  top () {
    return this.y;
  }
  bottom () {
    return this.y + this.height;
  }
  left () {
    return this.x;
  }
  right () {
    return this.x + this.width;
  }

  crashWith(obstacle) {
    return !(
      this.bottom() < obstacle.top()
      || this.top() > obstacle.bottom()
      || this.right() < obstacle.left()
      || this.left() > obstacle.right()
    );
  }
}

function updateGameArea () {
  myGameArea.clear();
  player.newPos();
  player.draw();
  updateObstacles();
  
  myGameArea.score();
  checkGameOver();

  if (!myGameArea.stop) {
    requestAnimationFrame(updateGameArea);
  }
}

function createObstacle () {
  // posição inicial
  let x = myGameArea.canvas.width;
  // tamanho do obstáculo
  let minHeight = 20;
  let maxHeight = 200;
  let height = Math.floor(minHeight + Math.random() * (maxHeight - minHeight));
  let width = 10;
  // tamanho do vão
  let minGap = 50;
  let maxGap = 200;
  let gap = Math.floor(minGap + Math.random() * (maxGap - minGap));
  // criando os obstáculos
  let topObstacle = new Component(x, 0, width, height, 'green');
  myGameArea.obstacles.push(topObstacle);
  let bottomObstacle = new Component(x, height + gap, width, myGameArea.canvas.height - (height + gap), 'green');
  myGameArea.obstacles.push(bottomObstacle);
};

function updateObstacles () {
  myGameArea.frames += 1;
  if (myGameArea.frames % 120 === 0) {
    createObstacle();
  };

  for (let i = 0; i < myGameArea.obstacles.length; i += 1) {
    const obstacle = myGameArea.obstacles[i];
    obstacle.x -= 1;
    obstacle.draw();
    myGameArea.obstacles = myGameArea.obstacles.filter(obstacle => obstacle.x > 0 - obstacle.width)
  }
}

function checkGameOver () {
  const crashed = myGameArea.obstacles.some((obstacle) => player.crashWith(obstacle));
  if (crashed) {
    myGameArea.stop = true;
  }
}

const player = new Component(0, 110, 30, 30, 'red');
myGameArea.start();

document.addEventListener('keydown', (e) => {
  const key = e.code;
  if (key === 'ArrowUp') {
    player.speedY -= 1;
  }
  if (key === 'ArrowDown') {
    player.speedY += 1;
  }
  if (key === 'ArrowLeft') {
    player.speedX -= 1;
  }
  if (key === 'ArrowRight') {
    player.speedX += 1;
  }
});

document.addEventListener('keyup', () => {
  player.speedX = 0;
  player.speedY = 0;
})
