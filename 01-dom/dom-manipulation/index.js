console.log('JS Conectado!')

// selecionei elemento pelo id
const paragraph = document.querySelector('#paragraph');
console.log(paragraph);

// selecionei elementos pela class
const links = document.querySelectorAll('.link');
console.log(links);

// selecionei elementos pelo nome do elemento/tag
const divs = document.querySelectorAll('div');
console.log(divs);


// Acessando valores dos atributos dos elementos
const paragraphId = paragraph.getAttribute('id');
console.log(paragraphId);

const linkHref = links[0].getAttribute('href');
console.log(linkHref);

// (re)atribuindo valores a um atributo do elemento
paragraph.setAttribute('id', 'info-paragraph');
paragraph.setAttribute('class', 'question');

const itemList = document.createElement('li');
itemList.setAttribute('class', 'item');
itemList.setAttribute('id', 'first');
itemList.innerText = 'Goiaba!';

const ulElement = document.querySelector('#item-list');
ulElement.appendChild(itemList);

for (let i = 0; i < 3; i += 1) {
  const newItem = document.createElement('li');
  newItem.className = 'item';
  newItem.innerText = `item ${i}`;
  ulElement.appendChild(newItem);
}

const myDiv = document.createElement('div');
myDiv.innerHTML = '<h2>Titulo em baixo!</h2>';

document.body.appendChild(myDiv);

// eventos
const addBtn = document.querySelector('#add-item-button');
addBtn.onclick = () => {
  console.log('cliquei no botão!')
};
// addBtn.addEventListener('click', () => {
//   console.log('cliquei no botão!')
// });
// addBtn.addEventListener('touch', () => {
//   console.log('cliquei no botão!')
// });

// acessando input

const inputElement = document.getElementsByTagName('input')[0];
const sendBtn = document.getElementById('send-btn');
sendBtn.onclick = (event) => {
  console.log(inputElement.value);
  console.log(event.currentTarget)
}

const items = document.querySelectorAll('li');

for (let i = 0; i < items.length; i += 1){
  items[i].addEventListener('click', (e) => {
    const text = e.currentTarget.innerHTML;
    e.currentTarget.innerHTML = 'Cliquei!'
    console.log(e.currentTarget.innerHTML);
  })
}