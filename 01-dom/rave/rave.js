// função que gera uma cor aleatória em hexadecimal. Ex: #ab348f
function generateRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

// função que troca a minha cor de fundo usando STYLE
function changeBackgroundColor() {
  const colorBg = document.getElementById('color-overlay');
  colorBg.style.backgroundColor = generateRandomColor();
};

function changeBackgroundText() {
  const textBg = document.getElementById('text-bg');
  if (textBg.innerHTML === 'FESTEJAR') {
    textBg.innerHTML = 'ATÉ';
  } else if (textBg.innerHTML === 'ATÉ') {
    textBg.innerHTML = 'AMANHECER';
  } else if (textBg.innerHTML === 'AMANHECER') {
    textBg.innerHTML = 'FESTEJAR';
  }
};

function changeBackground() {
  changeBackgroundColor();
  changeBackgroundText();
};

setInterval(changeBackground, 333);
