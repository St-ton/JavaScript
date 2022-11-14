// 1) Изменение текста в инпуте
// Кнопка при нажатии на которую в инпуте меняется текст.

// Нажми на кнопку рядом 
// Нажал! Спасибо.

// <button onclick="buttonClick()">Нажми на меня</button>
// <input type="text" id="input" value="Нажми на меня">
// <button>Нажми на меня</button>
// <input type="text" id="input" value="Нажми на кнопку рядом">

let myButton = document.querySelector('.myButton');
let myInput = document.querySelector('#input1');

myButton.addEventListener('click', changeText);


function changeText(event) {
// myInput.value = 'Спасибо, что нажали';
// myButton.removeEventListener ('click', changeText);
myInput.value = 'Спасибо, что нажали';
setTimeout(() => myInput.value = 'Нажми на кнопку рядом', 1500);
// myButton.removeEventListener ('click', changeText);
};

// 2) Вывод содержимого инпута
// Создайте input и две кнопки. 
// В инпут вводите текст, потом называйте на первую кнопку
// и во-вторую передавайте из содержимое input

let actionButton = document.querySelector('.actionButton');
let input = document.querySelector('#input2');
let takeButton = document.querySelector('.takeButton');

actionButton.addEventListener('click', transferText);

function transferText (event) {
  if(!input.value){
    takeButton.textContent='Fill Input!';
  } else {
  takeButton.textContent=input.value;
  input.value='';
  }
};
// 3) Создайте input и кнопку "возвести в квадрат"
// в input вводите число, а по нажатию на кнопку меняйте его на квадрат этого числа
// реализуйте это через вспомогательную функцию возведения в квадрат
// Number(input.value) и square(название для функции квадрат)

let squareButton = document.querySelector('.square');
let squareInput = document.querySelector('#input3');

squareButton.addEventListener('click',toSquare);

let square = num => num*num;

function toSquare(event){
    let value = Number(squareInput.value);

    if(isNaN(value)){
        squareInput.value = 'is not number';
    }else{
        squareInput.value = square(value) 
    }
    
}

// 4) По нажатию на кнопку меняется ее текст и цвет текста
// в зависимости от того на какую кнопку нажали
// красный бордер и текст и зеленый бордер и текст

let greenButton = document.querySelector('.greenButton');
let redButton = document.querySelector('.redButton');
let blockField = document.querySelector('.block');


greenButton.addEventListener('click',changeToGreen);
redButton.addEventListener('click',changeToRed);

function changeToGreen(event){
    blockField.className = 'block greenStyle'
};

function changeToRed(event){
    blockField.className = 'block redStyle'

};

console.log(location.href);
console.log(screen.width, screen.height);
console.log(navigator.userAgent, navigator.platform);
console.log(history);
