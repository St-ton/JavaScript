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
// Заголовок, не поменяется.
// Абзац, поменяется.
// Абзац, поменяется.
// Абзац, поменяется.


let changText = document.querySelectorAll('.changtext');
let changButton = document.querySelector('.changbutton');
let unChangButton = document.querySelector('.changbutton');

changButton.addEventListener('click', change);
unChangButton.addEventListener('click', unchange);

let newTextArr=[];
for (let elem in changText) {
  newTextArr.push(elem.textContent); 
}

function change(event) {
  changText.forEach((element, i) => {
    element.textContent = i + 1;
  });
}

function unchange(event) {
  newTextArr.forEach((element, i) => {
    element.textContent = newTextArr[i];
  });
}