// При нажатии на кнопку меняем цвет кнопки на соответствующий

/*
    1. Ищем каждую кнопку по ее id
    2. На каждую вешаем слушатель события - клика
    3. В обработчике события создаем действие, которое позволит изменить цвет
*/

// let greenButton = document.querySelector('#green');
// let redButton = document.querySelector('#red');
// let blueButton = document.querySelector('#blue');
// let imgButton = document.querySelector('#img');

// greenButton.addEventListener('click',changeToGreen);
// redButton.addEventListener('click',changeToRed);
// blueButton.addEventListener('click',changeToBlue);
// imgButton.addEventListener('click',changeToImg);

// function changeToGreen(event){
// document.body.style.backgroundColor="green";
// };

// function changeToRed(event){
//   document.body.style.backgroundColor="red";
// };

// function changeToBlue(event){
//   document.body.style.backgroundColor="blue";
// };

// function changeToImg(event){
//   document.body.style.backgroundImg="url(./img1.jpg)";
// };

const buttons = document.querySelectorAll('.item');
console.log(buttons);

const buttonsArr = Array.from(buttons);

buttonsArr.map(button => {
  button.addEventListener('click', () => {
        const idAttribut = button.getAttribute('id');

        document.body.style.background = idAttribut;
          });
});

// ДЗ. При нажатии на кнопку случайный цвет, менять цвет фона на случайный.
