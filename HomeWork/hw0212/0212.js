//! Необходимо реализовать интерфейс, с полем ввода (textarea). При обновлении страницы текст должен сохраняться в поле ввода.
//! Реализуйте данное приложение через textarea и событие input.

//todo  Вариант с input textarea

const myInputArea_1 = document.querySelector('#textarea');

myInputArea_1.value = localStorage.getItem('myTextArea_1');

myInputArea_1.oninput = () => {
  localStorage.setItem('myTextArea_1', myInputArea_1.value);
};

//todo  Вариант с тегом  textarea

const myInputArea_2 = document.querySelector('textarea');

myInputArea_2.value = localStorage.getItem('myTextArea_2');

myInputArea_2.oninput = () => {
  localStorage.setItem('myTextArea_2', myInputArea_2.value);
};
