// 1)
//     Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
//     То есть дефисы удаляются, а все слова после них получают заглавную букву.
//     Примеры:
//     camelize("background-color") == 'backgroundColor';
//     camelize("list-style-image") == 'listStyleImage';
//     camelize("-webkit-transition") == 'WebkitTransition';
//     P.S. Подсказка: используйте split, чтобы разбить строку на массив символов,
// потом переделайте всё как нужно и методом join соедините обратно.

function camelize(str) {
  let splitedString = str.split('-');
  for (let i = 0; i < splitedString.length; i++) {
    splitedString[i] = splitedString[i].slice(0, 1).toUpperCase() + splitedString[i].slice(1);
  }
  let joinSring = splitedString.join('');
  return joinSring;
}

console.log(camelize('my-short-string'));
console.log(camelize('background-color'));
console.log(camelize('list-style-image'));
console.log(camelize('-webkit-transition'));

// 2)
//     Задача: написать функцию, принимающую массив чисел
//     и возвращающую сумму всех его положительных элементов и отрицательных
//     чисел отдельно в виде нового массива
//     например функция принимает как аргумент следующий массив
//     arr = [1, -2, 3, 4, -9, 6]
//     и должна вернуть [14, -11]

let arr = [1, -2, 3, 4, -9, 6];
let sumPositiv = 0;
let sumNegativ = 0;
let arrNeu = [];
function arrSum(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      sumNegativ += arr[i];
    } else {
      sumPositiv += arr[i];
    }
  }
  arrNeu[0] = sumPositiv;
  arrNeu[1] = sumNegativ;
  return arrNeu;
}
console.log(arrSum(arr));
