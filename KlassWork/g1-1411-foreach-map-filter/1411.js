//
// Что выйдет в консоли 
//
// const result = ('b'+'a'+ +'c').toLowerCase();
// console.log(result);
//


//
// 1) написать скрипт, который получает через prompt число 
// и выводит в консоль его квадрат
//
// const number = +prompt('Введите число');
// console.log(number**2);
//


//
// 2) написать скрипт, который получает два числа через prompt
// (два вызова) и выводит в консоль наибольшее
//
// const num1 = +prompt('Введите 1е число');
// const num2 = +prompt('Введите 2е число');
// console.log(num1 > num2 ? num1 : num2);
// console.log(Math.max(num1, num2));
//


//
// 3) напишите функцию, которая принимает аргумент
// (число) и возвращает true, если число четное и
// false в ином случае
//
// 1-й вариант
// function checkEven(num) {
//  return num %2 === 0;
// }
// 2-й вариант
// const checkEven = num => value % 2 ===0;
//
// console.log(checkEven(10));
// console.log(checkEven(5));
//


//
// 4) написать скрипт, который формирует массив из
// цифр от 0 до 9. массив вывести в консоль
//
// 1-й вариант
//
// const arr = [];
// for (let i = 0; i <= 9; i++) {
//   arr.push(i);
// }
// console.log(arr);
//
// 2-й вариант
//
// const arr = [...new Array(10)].map((_, index) => index);
// console.log(arr);


//
// 5) написать цикл, который проходится по массиву
// numbers и находит сумму четных чисел
// результат необходимо вывести в консоль
//
// const numbers = [12, 4, 3, 34, 3, 1, 5, 34];
// let resultEven =0;
//
// 1-й вариант
//
// for (let element of numbers) {
// if (element % 2 ===0) {resultEven +=element;} 
// }  
//
// 2-й вариант
//
// numbers.forEach(elem => resultEven += (elem % 2 === 0) ? elem : 0 )
//
//console.log(resultEven);


//
// МЕТОДЫ МАССИВОВ
//
//const arr = [12, 5, 34, 2, 38, 6, 4, 32, 5, 27];
//
//
// forEach
//
// arr.forEach((elem, index, arr) => console.log(`Element: ${elem}, Index: ${index}, Array: ${arr}`));
//
// Распишем функцию forEach как она выглядит под капотом    
//
// function forEach(arr, callback) {
// for (let i = 0; i < arr.length; i++) {
//   callback(arr[i], i, arr);
//   }
//       }
// forEach(arr, (elem, index, arr) => console.log(elem, index, arr));     

//
// map
//
// const result = arr.map(elem => elem **2);
// console.log(result);


// ЗАДАЧИ
//
// const arr = [12, 5, -34, 2, 38, -6, 4, -32, -5, 27];
// вызвать метод map и все отрицательные числа
// преобразовать в положительные
//

// const newArr=arr.map(elem => elem < 0 ? elem * -1 : elem);
// console.log(newArr);

//
// filter
//
// const result = arr.filter(elem => elem > 0);
// console.log(result);

// используя метод filter сформируйте массив,
// состоящий только из чисел от -10 до 10
//
// const result = arr.filter(elem => elem >= -10 && elem <= 10);
// console.log(result);

//
// find
//
//const result = arr.find(elem => elem < 0);
// console.log(result);

//
// вызвать метод find, который возрващает первое слово, которое короче 7 символов
//
//const arr = ['велосипед', 'самокаты', 'коньки', 'лыжи'];
//const result = arr.find(elem => elem.length < 7);
//console.log(result);

const products = [
  {
      id: 1,
      title: 'велосипед',
      price: 45000
  },
  {
      id: 2,
      title: 'самокат',
      price: 15000
  },
  {
      id: 3,
      title: 'лыжи',
      price: 25000
  },
  {
      id: 4,
      title: 'скейт',
      price: 13000
  },
  {
      id: 5,
      title: 'коньки',
      price: 7000
  }
];
// вывести название товаров
//
products.forEach(product => console.log(product.title));

// вызвать метод массива, который сформирует новый
// массив с товарами, дешевле 20 тысяч
//
// const result = products.filter(product => product.price < 20000); 
// console.log(result);

// вызвать метод массива и сформировать новый
// массив, который состоит из 
// объектов со свойствами title, price;
//
// const result = products.map(product => (
//   {
//     title: product.title, 
//     price: product.price
//   }
// )); 
// console.log(result);

