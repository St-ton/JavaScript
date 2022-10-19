// First level: 1. Напишите следующую функцию, которая принимает
// некий массив данных. Если в массиве только строковый тип данных, то
// функция должна находить самую длинную строку и возвращать массив из
// двух элементов - эту строку и её индекс исходном массиве
// Если в массиве только цифры, то функция должна находить самую
// большую цифру и возвращать массив из двух элементов - из этой цифры
// и её индекса в исходном массиве
// Во всех остальных случаях (если там другие типы данных или же они
// смешаны), то функция должна возвращать массив из двух элементов -
// первый это строка 'неверный тип данных в массиве', а второй элемент
// это общая длина массива.

// let arr = ['1234567', '12345', '123456789', '123', '1'];
let arr = [1234567, 12345678, 123456, 1234, 123];
// let arr = ['12345678', 1234567, '123456', 1234, 123];

let newArr = [];

let indexString = 0;
let maxString = '';

let indexNumber = 0;
let maxNumber = 0;

let longesStrMaxNumb = function (arr) {
  // перебираю массив.
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (typeof element == 'string') {
      indexString++; // Для типа string включаю свой счетчик
    } else if (typeof element == 'number') {
      indexNumber++; // Для типа number включаю свой счетчик
    }
  }

  // Массив перебрали и записали 2 счетчика - для строковых и цифровых элементов.
  // Если массив строковый, то счетчик строковый будет равен длине массива
  // Если массив цифровой, то счетчик цифровой будет равен длине массива

  if (indexString == arr.length) {
    // Если счетчик string равен длине массива, значит весь массив string
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > maxString.length) {
        // Нахожу элемент массива с максимальной длиной
        maxString = arr[i];
        newArr[0] = maxString;
        newArr[1] = i;
      }
    }
    return newArr;
  } else if (indexNumber == arr.length) {
    // Если счетчик number равен длине массива, значит весь массив number
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > maxNumber) {
        maxNumber = arr[i];
        newArr[0] = maxNumber;
        newArr[1] = i;
      }
    }
    return newArr;
  } else {
    // Массив смешанный
    newArr[0] = 'неверный тип данных в массиве';
    newArr[1] = arr.length;
    return newArr;
  }
};

console.log(longesStrMaxNumb(arr));

// (Необязательная задача) Напишите функцию которая будет принимать три
//  массива с любыми данными и объединять их в один, новый массив и
//  возвращать его.В зависимости от типа данных вы должны упорядочить
// данные.Сначала добавляйте только строки, затем цифры, затем булевы
// значения, все остальные значения могут быть в произвольном порядке
// добавлены далее.
// Пример как должна работать функция.
// let result toHardThreeOrder(['привет', true, 65],[3, [], false], ['js', 'java', 'script', 'redButton'])
// console.log(result)// ['привет', js', 'java', 'script', 'redButton', 3, 65, true, false, []]

let arr1 = ['привет', true, 65];
let arr2 = [3, [], false],;
let arr3 = ['js', 'java', 'script', 'redButton'];


let toHardThreeOrder = function (arr1, arr2, arr3)
{
  
  
}

console.log(toHardThreeOrder(arr1, arr2, arr3);  // ['привет', js', 'java', 'script', 'redButton', 3, 65, true, false, []]