// Создайте массив arr = ['a', 'b', 'c', 'd'] и с его помощью выведите
// на экран строку 'a+b, c+d'
// let arr = ['a', 'b', 'c', 'd'];

// let con = `${arr[0]}+${arr[1]}, ${arr[2]}+${arr[3]}`;
// let con1 = '' + arr[0] + '+' + arr[1] + ', ' + arr[2] + '+' + arr[3];
// console.log(con);
// console.log(con1);

//
// Разделить каждые 3 символа запятыми
//
// let multipledThree = num => num % 3 == 0;
// let arrayToStringConcat = arr => {
//   let str = '';
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (multipledThree(i+1)) {
//       str += `, ${element}`;
//     } else {
//       str += element;
//     }
//   }
//   return str;
// };
// console.log(arrayToStringConcat(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'i']));

//
// Разделить каждые 2 символа запятыми
//
// let strArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'i', 'k', 'l'];
// let even = num => num % 2 == 0;
// let arrToStrConcat = function (arr) {
//   let str = '';
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (even(i + 1)) {
//       str += `${element}, `;
//     } else {
//       str += element;
//     }
//   }
//   return str;
// };
// console.log(arrToStrConcat(strArr));

// Создайте массив arr с элементами 2, 5, 3, 9.
// Умножьте первый элемент массива на второй, а третий элемент на
// четвертый. Результаты сложите, присвойте переменной result.
//  Выведите на экран значение этой переменной.
//
// Мой вариант
//
// let array = [2, 5, 3, 9, 2, 5, 3, 9, 10];
// let result = 0;
// let neuLength = 0;
// if (array.length % 2 !== 0) {
//   neuLength += array.length - 1;
// } else {
//   neuLength = array.length;
// }
// for (let i = 0; i < neuLength; i++) {
//   if (i % 2 == 0) {
//     result = result + array[i] * array[i + 1];
//   }
// }
// console.log(result);
//
// Анатолий Чумак
//
// let arr = [2, 5, 3, 9, 2, 5, 3, 9, 10];
// let arrToCalc = arr => {
//   let res = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 !== 0) {
//       res = res + arr[i - 1] * arr[i];
//     }
//   }
//   return res;
// };
// console.log(arrToCalc(arr));

// В переменной date лежит дата в формате '2025-12-31'.
// Преобразуйте эту дату в формат '31/12/2025'.
// В переменной date лежит дата в формате '2025-12-31'.
// Преобразуйте эту дату в формат '31/12/2025'.
//
// Вариант 1 без функций
//
// let stringDate = '2025-12-31';
// let stringDateArray = stringDate.split('-'); // создание массива["2025", "12", "31"]
// stringDateArray.reverse(); //реверсировали массив
// let stringDateUpdate = stringDateArray.join('/');
// console.log(stringDateUpdate);
//
// Вариант 2 через функции
//
// function formatDate(str) {
//    let stringDateArray = str.split("-"); // преобразовала в массив по разделетилю в -
//    stringDateArray.reverse(); //развернула массив
//    let stringDateUpdate = stringDateArray.join("/"); // объединила массив в сторку через /
//    return str
//       .split("-")
//       .reverse()
//       .join("/"); //цепочка методов // точка позволяет переносить
//  строку кода // не нужны двже круглые скобки в цепочке методов
//    return stringDateUpdate; // вернули
// }
// console.log(formatDate("2022-10-19"));
// // let formatDate = str => str.split("-").reverse().join("/");
// // console.log(formatDate("2022-10-19"));

// Дана переменная str, в которой хранится какой-либо текст.
// Реализуйте обрезание длинного текста по следующему принципу:
// если количество символов этого текста больше заданного в переменной
// n, то в переменную result запишем первые n символов строки str и
//  добавим в конец троеточие '...'. В противном случае в переменную
// result запишем содержимое переменной str.
//
// let schortingString = function (string, max) {
//   if (string.length <= max) {
//     return string;
//   }
//   return string.slice(0, max) + '...';
// };
// console.log(schortingString('Скажи ка дядя, ведь не даром', 30));
//
//  Пример с датами
//
function formatDateAndChangeData(string, detailForUpd) {
  let reversedArrayDate = string.split('-').reverse();

  let newArrayDate = [];

  for (let i = 0; i < reversedArrayDate.length; i++) {
    if (detailForUpd[i]) {
      newArrayDate.push(detailForUpd[i]);
    } else {
      newArrayDate.push(reversedArrayDate[i]);
    }
  }

  return newArrayDate.join('/');
}

console.log(formatDateAndChangeData('2012-10-21', [false, 08, false]));
console.log(formatDateAndChangeData('2012-10-21', [false, false, 2013]));
console.log(formatDateAndChangeData('2012-10-21', [11, 11, 2013]));
