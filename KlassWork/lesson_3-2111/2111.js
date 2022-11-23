//!   *** 0 ***
//const elem = document.querySelector('p');
//const elem_list = document.querySelectorAll('p');
//console.log(elem.textContent); // выводит текст, учитывая пропуски, используется редко
//console.log(elem.innerHTML); // выводит текст со всеми элементами внутри, используется редко

//? console.log(elem.innerText); // выводит чистый текст
//? console.log(elem); // выводим элементк как объект
//? console.log(elem_list); // выводим NodeList элементов

// const a = [14, 4, 32, 2];
// const b = [4, 3, ...a];
// function func(a1, a2, a3, a4) {
//   return a1 + a2 + a3 + a4;
// }
// console.log(func(...a)); // все 4 элемента просуммировались
// console.log(func(...b)); // только первые 4 элемента проссумировались, т.к. в функции только 4

//? const text_list = [...elem_list].map(elem => elem.innerText);
//?NodeList распаковываем в массив

// const main_elem = document.getElementById('main'); // поиск элемента по
// const p_list = document.getElementsByTagName('p');

// console.log(main_elem);
// console.log(p_list);

//!   *** 1 ***
//? вывести в консоль текст из p, который находится в div с классом main
// const divElem = document.querySelector('.main p');
// console.log(divElem);
// console.log(divElem.innerText);

// ! *** 2 ***
//? вывести параграф с классом info из div с идентификатором main
//todo т.е. в начале id main и в него вложен класс info

// const parElem = document.querySelector('#main .info');
// console.log(parElem.innerText);

//? найти параграф с классом main, который находится в div, который находится в div с идентификатором info
//todo в начале у нас id main, потом в нем div и потом класс .main

// const parElem = document.querySelector('#info div .main');
// console.log(parElem.innerText);

// ! *** 3 ***
//const rootElem = document.querySelector('#root');

// сonst p_elem = document.createElement('p'); //создаем параграф
// p_elem.innerText = 'Я новый элемент';
//определяем текст для параграфа
// rootElem.append(p_elem);
// добавлем параграф с текстом на страницу в браузер

// const words = ['велосипед', 'самокат', 'лыжи'];
// words.forEach(word => {
//   const parElem = document.createElement('p');
//   parElem.innerText = word;
//   rootElem.append(parElem);
// });

// ! *** 4 ***
const rootElem = document.querySelector('#root');
const products = [
  {
    title: 'велосипед',
    price: 45000,
    count: 100,
    link: 'https://examlpe/com',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Alexandr_Ivanov_001.jpg/440px-Alexandr_Ivanov_001.jpg',
  },
  {
    title: 'самокат',
    price: 25000,
    count: 200,
    link: 'https://examlpe/com',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Alexandr_Ivanov_001.jpg/440px-Alexandr_Ivanov_001.jpg',
  },
  {
    title: 'лыжи',
    price: 30000,
    count: 0,
    link: 'https://examlpe/com',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Alexandr_Ivanov_001.jpg/440px-Alexandr_Ivanov_001.jpg',
  },
];

// products.forEach(product => {
//   const container = document.createElement('div');
//   const title_p = document.createElement('p');
//   const price_p = document.createElement('p');
//   container.append(title_p, price_p);
//   rootElem.append(container);
//   title_p.innerText = product.title;
//   price_p.innerText = product.price;
// });

//? добавить в каждый объект свойство count с каким-либо числом и
//? выводить кол-во продуктов отдельный параграфом

products.forEach(({ title, price, count, link, img }) => {
  const container = document.createElement('div');
  const title_p = document.createElement('p');
  const price_p = document.createElement('p');
  const count_p = document.createElement('p');
  const link_a = document.createElement('a');
  const picture_img = document.createElement('img');
  container.append(picture_img, title_p, price_p, count_p, link_a);
  rootElem.append(container);

  container.classList.add('product');

  link_a.innerText = 'подробнее';
  link_a.href = link;
  link_a.target = '_blank';

  picture_img.src = img;

  title_p.innerText = title;
  price_p.innerText = price;

  count_p.innerText = count === 0 ? 'Товар закончился' : count;
});

/*
    <div>
        <p>Название</p>
        <p>Цена</p>
        <p>Кол-во</p>
    </div>
*/
