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
    // splitedString[i] = splitedString[i].slice(0, 1).toUpperCase() + splitedString[i].slice(1); //мой вариант
    splitedString[i] = firstSymbolUp(splitedString[i]);
  }
  let joinSring = splitedString.join('');
  return joinSring;
}

function firstSymbolUp(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
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
function arrSum(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      sumNegativ += arr[i];
    } else {
      sumPositiv += arr[i];
    }
  }

  return [sumPositiv, sumNegativ];
}
console.log(arrSum(arr));

//
// 2-1) Вариант учителя
//

let sumPosAndNeg = function (arrNumbers) {
  let positive = sumWithStatus(arrNumbers, '+');
  let negative = sumWithStatus(arrNumbers, '-');
  return [negative, positive];
};

let sumWithStatus = function (arrNumbers, status) {
  let sum = 0;
  for (let i = 0; i < arrNumbers.length; i++) {
    const element = arrNumbers[i];
    if (status === '-' && element < 0) {
      sum += element;
    }
    if (status === '+' && element > 0) {
      sum += element;
    }
  }
  return sum;
};

console.log(sumPosAndNeg([1, -2, 3, 4, -9, 6]));
