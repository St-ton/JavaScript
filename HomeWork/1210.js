// First level: Напишите функцию, которая будет проверять тип данных (typeof someValue) и если
// это будет строка, то проверять сколько в ней символов, возвращать (return) результат
// (количество символов в строке - число).
// Количество символов в строке можно узнать применив к строке свойство length через точку.
// Например выражение 'Hello'.length вернет число 5, если вы вызовите его через консоль, аналогично
// и для переменной, которая содержит строку.Например:
// let someString = 'Hello';
// console.log(someString.length) // 5
// если это значение присланное в функцию будет число, то его нужно переводить в строку (String(someValue))
// и возвращать из функции количество символов в этой преобразованной из числа строке.
// если это значение присланное в функцию будет boolean - true или false, то его нужно переводить в строку
// (String(someValue)) и возвращать из функции количество символов в этой преобразованном из boolean значения строке.
// если тип данных не строка и не число и не boolean, то функция должена вернуть строку  'неверный тип данных'

let someString;
function checkData(someValue) {
  if (typeof someValue == 'string' || 'boolean') {
    return someValue.length;
  } else if (typeof someValue == 'number') {
    someValue = String(someValue);
    return someValue.length;
  } else if (typeof someValue != 'string' || 'boolean' || 'number') {
    let notResult = 'неверный тип данных';
    return notResult;
  }
}
console.log('--- Level 1 ---');
console.log(checkData('Hello world'));
console.log(checkData('false'));
console.log(checkData('true'));
console.log(checkData(45));
// console.log(checkData(45fdfd));

// Second level: Реализуйте функцию из первой задачи во всех трех синтаксисах функций - декларативно,
// как выражение и как стрелочную функцию.
// Прокомментируйте аргументированно почему на Ваш взгляд один из способов описания функции предпочтительнее.

let checkData2 = someValue2 => {
  if (typeof someValue2 == 'string' || 'boolean') {
    return someValue2.length;
  }
  if (typeof someValue2 == 'number') {
    someValue2 = String(someValue2);
    return someValue2.length;
  } else if (typeof someValue != 'string' || 'boolean' || 'number') {
    let notResult2 = 'неверный тип данных';
    return notResult2;
  }
};
console.log('--- Level 2 ---');
console.log(checkData2('Hello'));
console.log(checkData2(123));
