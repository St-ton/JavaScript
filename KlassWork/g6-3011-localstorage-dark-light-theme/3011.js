const btnChangeMode = document.querySelector('.change_mode');
const mainMode = document.querySelector('.main');

if (localStorage.getItem('mode') === 'dark') {
  document.body.classList.add('dark');
}

btnChangeMode.addEventListener('click', () => {
  //* написать обработчик, который позволит выводить строку "привет"
  //* при нажатии на кнопку .change_mode

  // console.log('Привет');

  //* доработать данный процесс таким образом, чтобы при нажатии на
  //* кнопку элементу с классом main добавлялся класс dark

  // mainMode.classList.add('dark');

  //* найти и применить метод у classList, позволяющий добавлять
  //* класс, если его нет и удалять его, если он есть

  // mainMode.classList.toggle('dark');
  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    localStorage.setItem('mode', 'dark');
  } else {
    localStorage.setItem('mode', 'light');
  }
});

//* повесить на эти кнопки обработчики и при нажатии на
//* них выводить + или - в консоль

const btnPlus = document.querySelector('.text-size-btns .btn-plus');
const btnMinus = document.querySelector('.text-size-btns .btn-minus');

//* реализовать увеличение и уменьшение текста ".main p" на 1 при нажатии
//* на соответствующие кнопки

// const mainText = document.querySelector('.main p');
// mainText.style.fontSize = '15px';

// btnPlus.addEventListener('click', () => {
// console.log('+');
//   const currentFontSize = parseInt(mainText.style.fontSize);
//   mainText.style.fontSize = currentFontSize + 1 + 'px';
// });
// btnMinus.addEventListener('click', () => {
// console.log('-');
//   const currentFontSize = parseInt(mainText.style.fontSize);
//   mainText.style.fontSize = currentFontSize - 1 + 'px';
// });

//
//* вариант без парсера считывания размера шрифта, берем его из css
//

// const mainText = document.querySelector('.main p');
// mainText.style.fontSize = '15px';
// let fontSize = parseInt(mainText.style.fontSize);

// btnPlus.addEventListener('click', () => {
//   fontSize++;
//   mainText.style.fontSize = fontSize + 'px';
// });
// btnMinus.addEventListener('click', () => {
//   fontSize--;
//   mainText.style.fontSize = fontSize + 'px';
// });

// 1) проверить наличие значения fontSize в localStorage  и если его
// нет, задать 12, а если есть, считать в переменную

const mainText = document.querySelector('.main p');
let fontSize;

if (localStorage.getItem('fontSize')) {
  fontSize = +localStorage.getItem('fontSize');
} else {
  fontSize = 12;
  localStorage.setItem('fontSize', fontSize);
}

mainText.style.fontSize = fontSize + 'px';

btnPlus.addEventListener('click', () => {
  fontSize++;
  mainText.style.fontSize = fontSize + 'px';
  localStorage.setItem('fontSize', fontSize);
});
btnMinus.addEventListener('click', () => {
  fontSize--;
  mainText.style.fontSize = fontSize + 'px';
  localStorage.setItem('fontSize', fontSize);
});
