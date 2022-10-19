//***********
//  Заполните массив 10 - ю иксами с помощью цикла
//***********

// let getPush = function (what, count) {
//   let arr = [];
//   for (let i = 0; i < count; i++) {
//     arr.push(what);
//   }
//   return arr;
// };
// console.log(getPush('x', 10));

//***********
// Данн массив[1, 2, 4, -40, -3, 8, 7, 0, -5, 18, 12];
// Вывести в консоль диапазон от 0 до 10
//***********

// let arr = [1, 2, 4, -40, -3, 8, 7, 0, -5, 18, 12];
// let rangeFilter = function (arr, min, max) {
//   let arrNeu = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > min && arr[i] < max) {
//       arrNeu.push(arr[i]);
//     }
//   }
//   return arrNeu;
// };
// console.log(rangeFilter(arr, -10, 10));

//***********
// Сделайте функцию howManyToTen, которая будет принимать массив с
// числамии возвращать количество элементов массива которых нужно
// сложить, начиная с первого, чтобы получить число больше десяти.
//***********

// let arr = [1, 2, 4, -3, 8, 7, 0, -5, 18, 12];
// let howManyToTen = function (arr) {
//   // 1 получили масив в функции
//   let sum = 0; //2 заводим сумму
//   for (let i = 0; i < arr.length; i++) {
//     //3 итерируем массив с 0 индекса
//     sum += arr[i]; // 4 считаем сумму
//     if (sum > 10) {
//       // если сумма больше 10
//       return i + 1; // выходим из функции и возвращаем текущую итерацию + 1
//     } // то есть количество элементов массива которые мы сложили
//   }
//   return 'сумма не больше 10'; // если массив не дает суммы > 10 то
// }; // просто возвращаем эту строку
// console.log(howManyToTen(arr)); // вызов функции с масива

// ***********
// Дан массив с числами. Создайте из него новый массив, где
// останутся лежать только положительные числа. Создайте для
// этого вспомогательную функцию isPositive(), которая
//  параметром будет принимать число и возвращать true,
// если число положительное, и false - если отрицательное.
// ***********

let arr = [1, -11, 3, -5, 8, -6, 8, -9, 6];
let isPositive = number => number > -1;
// {
//     if(number<0){
//         return false;
//     }else{
//         return true
//     }
// }
let positiveFilter = arr => {
  let positiveArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (isPositive(arr[i])) {
      positiveArr.push(arr[i]);
    }
  }
  return positiveArr;
};
console.log(positiveFilter(arr));
