console.log('intro.js conectado!');

const canvas = document.getElementById('canvas-example');
const ctx = canvas.getContext('2d');
// ctx.globalAlpha = 0.5; // tudo meio transparente!

// desenhando retângulos
// .fillRect(x, y, width, height);
ctx.fillRect(20, 150, 100, 100);
ctx.clearRect(40, 170, 60, 60);
ctx.strokeRect(50, 180, 40, 40);

// desenhando caminhos (path)
/*
  1. começar um caminho
  2. pra onde vai
  3. fechar o caminho (opcional)
  4. decide se vai preencher ou só fazer a linha
*/
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(250, 50);
ctx.lineTo(250, 100);
ctx.closePath();
// ctx.fill();
ctx.stroke();

// arcos
// .arc(x, y, radius, startAngle, endAngle, antiClockwise);
ctx.beginPath();
ctx.arc(200, 200, 50, 0, Math.PI * 2);
ctx.lineWidth = 10;
ctx.strokeStyle = 'green';
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(200, 200, 25, 0, Math.PI * 2);
// ctx.fillStyle = 'red';
// ctx.fillStyle = '#FF0000';
ctx.fillStyle = 'rgb(255, 0, 0)';
// ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
ctx.globalAlpha = 1;
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(50, 125);
ctx.lineTo(250, 125);
ctx.lineCap = 'butt'; // 'butt' | 'round' | 'square';
ctx.stroke();
ctx.closePath();

// padrões mostrar com imagem!
// .createPattern(image, type)
// type = 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat';

// texto
ctx.fillStyle = 'orange';
ctx.font = '20px Arial';
ctx.lineWidth = 1;
ctx.fillText('Hello, there. General Kenobi.', 30, 30);
ctx.strokeText('Hello, there. General Kenobi.', 30, 60);

// estilizando texto
// .font = 10px sans-serif
// .textAlign = start, end, left, right, center
// .textBaseline = top, hanging, middle, alphabetic, ideographic, bottom
// .direction = ltr, rtl, inherit


