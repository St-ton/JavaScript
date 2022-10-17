//
// Задача для тех, кто хочет испытать свои силы(необязательная)
// Сделайте функцию getDigitsSum(digit - это цифра), которая параметром
// принимает целое число(например 5025) и возвращает сумму его цифр
// (в данном примере возвращаемое из функции значение будет 12).
//
//
//  Мой вариант
//
let getDigitsSum = function (digit) {
  let numStr = String(digit);
  let result = 0;
  // let array;
  for (let i = 0; i < numStr.length; i++) {
    result += Number(numStr[i]);
  }
  return result;
};
//
//  Вариант на уроке
//
for (let j = 0; j <= 2022; j++) {
  if (getDigitsSum(j) === 13) {
    console.log(i);
  }
}

console.log('--- Result ---');
console.log(getDigitsSum1(5025));
console.log(getDigitsSum1(2222));
console.log(getDigitsSum1(1111111111));
