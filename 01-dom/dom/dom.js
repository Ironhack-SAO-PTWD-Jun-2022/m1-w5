// DOM - Document Object Model
// nodes ou nós, tem propriedades e métodos.
console.log('JS conectado!');

// selecionar elementos pelo id
let catDiv = document.getElementById('cat');
console.log(catDiv);

catDiv.innerHTML = 'I\'m a cat!';

let otherDiv = document.getElementById('other');
console.log(otherDiv);

otherDiv.innerHTML = catDiv.innerHTML;

catDiv.style.backgroundColor = 'red';
catDiv.style.border = '2px solid green';
catDiv.style.fontSize = '50px';
catDiv.style.marginTop = '30px';
catDiv.style.paddingBottom = '30px';

// selecionar elementos pela classe
let mice = document.getElementsByClassName('mouse');
console.log(mice);

let miceArr = [... mice];
console.log(miceArr);

// selecionar pela tag (elemento do HTML)
let divs = document.getElementsByTagName('div');
console.log(divs);

// .querySelector();
// const element = document.querySelector('#cat');
// const element = document.querySelector('.mouse');
const element = document.querySelector('span');
console.log(element);

// .querySelectorAll();
// const elements = document.querySelectorAll('#cat');
// const elements = document.querySelectorAll('.mouse');
// const elements = document.querySelectorAll('span');
const elements = document.querySelectorAll('.mouse');
console.log(elements);
const elementsArr = [...elements];
console.log(elementsArr);

// .className
console.log(elementsArr[0].className);
const mouse1 = document.querySelector('.mouse');
console.log(mouse1.className);
mouse1.className = 'rat';

// .id
mouse1.id = 'another';
console.log(mouse1.id);