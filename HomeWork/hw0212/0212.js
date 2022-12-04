//! Необходимо реализовать интерфейс, с полем ввода (textarea). При обновлении страницы текст должен сохраняться в поле ввода.
//! Реализуйте данное приложение через textarea и событие input.

//todo  Вариант с input textarea

const myInputArea1 = document.querySelector('#textarea');

myInputArea1.value = localStorage.getItem('myTextArea1');

myInputArea1.oninput = () => {
  localStorage.setItem('myTextArea1', myInputArea1.value);
};

//todo  Вариант с тегом  textarea

const myInputArea2 = document.querySelector('textarea');

myInputArea2.value = localStorage.getItem('myTextArea2');

myInputArea2.oninput = () => {
  localStorage.setItem('myTextArea2', myInputArea2.value);
};
