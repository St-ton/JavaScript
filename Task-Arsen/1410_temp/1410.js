//
//
//

// let fruits = ['apples', 'orange', 'plumbs'];
// let schipingCard = fruits;

// 3) напишите функцию, которая принимает как аргумент массив
// и возвращает сумму всех чисел, которые в нем есть
// или если чисел нет, то возвращает ноль. А также возвращаем длину массива и сколько операций сложений мы делали

// let sumArrNumbers = function (arr) {
//   let acamulate = 0;
//   let counter = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let arrElement = arr[i];

//     if (Number(arrElement) != isNaN) {
//       acamulate += Number(arrElement);
//       counter++;
//     }
//   }

//   return [`сумма -${acamulate}`, arr.length, counter];
// };

// let arr1 = [1, 2, '3', 'Vasia', 3];

// console.log(sumArrNumbers(arr1));

// Сделайте функцию inArray, которая определяет, есть в массиве элемент
// с заданным текстом или нет.Функция первым параметром должна принимать
// текст элемента, а вторым - массив, в котором делается поиск.
// Функция должна возвращать true или false.

function inArr(textElement, arr) {
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (element === textElement) {
      return true;
    }
  }
  return false;
}

let arr1 = ['Vasya', 123, '5545', true];

console.log(inArr('Ivan', arr1));
console.log(inArr('5545', arr1));
