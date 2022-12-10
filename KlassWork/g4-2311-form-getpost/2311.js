//! <!-- *** 1 *** -->

// const btnElem = document.querySelector('.btn');
// const parElem = document.querySelector('.text');

// btnElem.onclick = () => console.log('Привет'));
// onclick можно повесить только 1 событие и нельзя его отключить, в отличии от addEventListener

// btnElem.addEventListener('click', () => console.log('Привет'));
// parElem.addEventListener('click', () => console.log('Привет из параграфа'));

//todo cоздать функцию которая возвращает случайный цвет

// function randomColor() {
// Мой вариант
// return `rgb(${(Math.random() * 256) << 0}, ${(Math.random() * 256) << 0}, ${
//   (Math.random() * 256) << 0
//   })`;

// Гайк
// const r = Math.round(Math.random() * 255);
// const g = Math.round(Math.random() * 255);
// const b = Math.round(Math.random() * 255);
// return `rgb(${r}, ${g}, ${b})`;

// 16 ричный формат
// const r = Math.floor(Math.random() * 256);
// const g = Math.floor(Math.random() * 256);
// const b = Math.floor(Math.random() * 256);
// const color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
// }

// btnElem.addEventListener('click', () => (btnElem.style.backgroundColor = randomColor()));

//todo  создать программу, которая имитирует работу игральных костей при нажатии на кнопку в параграфе должны появиться два случайных числа от 1 до 6

//  function getRandom() {
// return Math.round(Math.random() * 5 + 1); //
// округление по правилам математики до целого числа, прибавляя 1 мы исключаем выпадание 0
// return Math.ceil(Math.random() * 6);
// округление в верхнюю сторону, даже если 0,1
// }

// btnElem.addEventListener('click', () => {
//   parElem.innerText = `${getRandom()} ${getRandom()}`;
// });

//! <!-- *** 2 *** -->

const addForm = document.querySelector('.add_form');
// addForm.title и addForm.price- можем обратится к полю name в форме
//addForm.title.value и addForm.price.value - сами значения этих полей
const products = document.querySelector('.products');
const data = [];

addForm.addEventListener('submit', event => {
  event.preventDefault();
  // отменяем отправку на сервер, которое в submit вшито по умолчанию
  const title = addForm.title.value;
  const price = addForm.price.value;
  //вытаскиваем из фомы значения полей
  data.push({ title, price }); // пушим данные в массив
  addForm.title.value = ''; // очищаем поля ввода
  addForm.price.value = '';
  rerender();
});

//todo создать функцию, которая для каждого элемента массива data создает div с названием и ценой товара и добавляет в  div с классом products

/* todo
<div>
    <p>Название товара</p>
    <p>Цена</p>
</div>
*/

function rerender() {
  products.innerText = '';
  data.forEach(({ title, price }) => {
    const container = document.createElement('div');
    const title_p = document.createElement('p');
    const price_p = document.createElement('p');
    title_p.innerText = `Название товара: ${title}`;
    price_p.innerText = `Цена: ${price}`;
    container.append(title_p, price_p);
    products.append(container);
  });
}
