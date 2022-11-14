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

let changeText = document.querySelectorAll('.changetext');
let changeButton = document.querySelector('.changebutton');

let changeTextArr = [];
let flagText = true;

changeButton.addEventListener('click', changeTextIndex);

function changeTextIndex(event) {
  if (flagText == true) {
     for (let i = 0; i < changeText.length; i++) {
      changeTextArr[i]=changeText[i].textContent;
      changeText[i].textContent = i + 1;
    }
    return flagText = false;
  } else {
    for (let i = 0; i < changeText.length; i++) {
      changeText[i].textContent = changeTextArr[i];
    }
    return flagText = true;
  }
}
