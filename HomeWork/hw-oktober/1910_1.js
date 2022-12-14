// 1. Фильтрация по диапазону
// Напишите функцию filterRange(arr, a, b), которая
// принимает массив arr, ищет элементы со значениями
// больше или равными a и меньше или равными b и
// возвращает результат в виде массива. Функция должна
// возвращать новый массив и не изменять исходный.
// Например:
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// console.log( filtered ); // 3,1 (совпадающие значения)
// console.log( arr ); // 5,3,8,1 (без изменений)
//

let array1 = ['1234567', '12345', '123456789', '123', '1'];
let array2 = [1234567, 12345678, 123456, 1234, 123];
let array3 = ['12345678', 1234567, '123456', 1234, 123];
let array4 = [true, false];

let сheckDataArray = arr => {
  if (checkTypeInArray(arr, 'string')) {
    return findMaxStringInArray(arr);
  }
  if (checkTypeInArray(arr, 'number')) {
    return findMaxNumberInArray(arr);
  }

  return ['Error Data', arr.length];
};

console.log(сheckDataArray(array1));
console.log(сheckDataArray(array2));
console.log(сheckDataArray(array3));
console.log(сheckDataArray(array3));

function checkTypeInArray(array, type) {
  let flag = true;
  array.forEach(element => {
    if (typeof element !== type) {
      flag = false;
    }
  });
  return flag;
}

function findMaxStringInArray(array) {
  let stringValue = '';
  let stringIndex = 0;

  array.forEach((value, index) => {
    if (value.length > stringValue.length) {
      stringValue = value;
      stringIndex = index;
    }
  });

  return [stringValue, stringIndex];
}

function findMaxNumberInArray(array) {
  let numberValue = 0;
  let numberIndex = 0;
  array.forEach((value, index) => {
    if (value > numberValue) {
      numberValue = value;
      numberIndex = index;
    }
  });
  return [numberValue, numberIndex];
}

// (Необязательная задача) Напишите функцию которая будет
// принимать три массива с любыми данными и объединять их
// в один, новый массив и возвращать его.В зависимости от
// типа данных вы должны упорядочить данные.Сначала
// добавляйте только строки, затем цифры, затем булевы
// значения, все остальные значения могут быть в
// произвольном порядке добавлены далее.
// Пример как должна работать функция.
// let result toHardThreeOrder(['привет', true, 65],[3, [], false], ['js', 'java', 'script', 'redButton'])
// console.log(result)// ['привет', js', 'java', 'script', 'redButton', 3, 65, true, false, []]

let arr1 = ['привет', true, 65];
let arr2 = [3, [], false];
let arr3 = ['js', 'java', 'script', 'redButton'];

function concatArr(arr1, arr2, arr3) {
  let arrString = [];
  let arrNumber = [];
  let arrBoolean = [];
  let arrMix = [];
  let arrConcat = arr1.concat(arr2, arr3); // сначала объединяю 3 массива в один
  //console.log(arrConcat); // просто чтобы не прописывать для каждого в отдельности цикл
  arrConcat.forEach(element => {
    if (typeof element === 'number') {
      arrNumber.push(element);
    } else if (typeof element === 'string') {
      arrString.push(element);
    } else if (typeof element === 'boolean') {
      arrBoolean.push(element);
    } else {
      arrMix.push(element);
    }
  });
  let arrResult = arrString.concat(arrNumber, arrBoolean, arrMix); // объединяю все в один массив
  console.log('\nРезультат --->');
  console.log(arrResult);
}

//
// Вариант 2
//

let one = ['привет', true, 65];
let two = [3, [], false];
let three = ['js', 'java', 'script', 'redButton'];

function resultFilter(one, two, three) {
  let toHardThreeOrder = [].concat(one, two, three);

  let a = toHardThreeOrder.filter(n => {
    return typeof n == 'string';
  });

  let b = toHardThreeOrder.filter(n => {
    return typeof n == 'number';
  });

  let c = toHardThreeOrder.filter(n => {
    return typeof n == 'boolean';
  });

  let d = toHardThreeOrder.filter(n => {
    return typeof n !== 'boolean' && typeof n !== 'number' && typeof n !== 'string';
  });

  return [...a, ...b, ...c, ...d];
}

console.log(resultFilter(one, two, three));
