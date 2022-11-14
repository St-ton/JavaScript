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

let newChangText = []; 
let flag = true;

changButton.addEventListener('click', change);

function change(event) {
  if (flag == true) {
     for (let i = 0; i < changText.length; i++) {
      newChangText[i]=changText[i].textContent;
      changText[i].textContent = i + 1;
    }
    return flag = false;;
  } else {
    for (let i = 0; i < changText.length; i++) {
      changText[i].textContent = newChangText[i];      
    }
    return flag = true;;
  }
}
