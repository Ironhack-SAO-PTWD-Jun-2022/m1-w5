console.log('index.js conectado!');

const drawBtn = document.getElementById('draw-btn');
const dogBtn = document.getElementById('dog-btn');

ctx.clearRect(0, 0, 300, 300);

const fireballImg = new Image();
fireballImg.src='./images/download.jpg';

function draw(x, y) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'green';
  ctx.fillRect(x, y, 50, 50);
  x += 3;

  // .drawImage(image, x, y, width, height)
  ctx.drawImage(fireballImg, x, y + 100, 50, 50);

  // setTimeout(`draw(${x}, ${y})`, 100);
  setTimeout(() => {
    draw(x, y)
  }, 100);
}

function drawDog() {
  console.log('draw dog!');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const img = new Image();
  img.onload = () => {
    ctx.drawImage(img, 0, 0, 300, 300);
  }
  img.src = 'https://static.pexels.com/photos/8700/wall-animal-dog-pet.jpg';
}

drawBtn.onclick = () => {
  draw(50, 50)
};

dogBtn.onclick = drawDog;