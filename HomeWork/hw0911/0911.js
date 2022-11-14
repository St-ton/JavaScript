// 1) Создать две кнопки - одна из них блокирует input с
// помощью атрибута disabled, а другая разблокирует.
// Заблокировать Разблокировать -
// Какой-то текст! - input

let input = document.querySelector('.input');
let inputBlock = document.querySelector('.inputblock');
let inputUnBlock = document.querySelector('.inputunblock');

inputBlock.addEventListener('click', blockStatus);
inputUnBlock.addEventListener('click', unblockStatus);

function blockStatus(event) {
  input.value = 'Текст заблокирован';
  input.setAttribute('disabled', 'true');
}

function unblockStatus(event) {
  input.value = 'Текст разблокирован';
  input.removeAttribute('disabled');
}

// 2) Задача querySelectorAll
// Поменяйте содержимое абзацев на их порядковый номер в коде.
// Используйте перебор, индексы и textContent
//
// Заголовок, не поменяется.
//
// Абзац, поменяется.
//
//
// Абзац, поменяется.
//
// Абзац, поменяется.


let changText = document.querySelectorAll('.changtext');
let changButton = document.querySelector('.changbutton');

changButton.addEventListener('click', change);
// changButton.addEventListener('click', unchange);

function change(event) {
  changText.forEach((element, i) => {
    element.textContent = i + 1;
  });
}

// function unchange(event) {
//   changText.forEach((element, i) => {
//     element.textContent = element;
//   });
// }