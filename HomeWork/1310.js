//
// Задача для тех, кто хочет испытать свои силы(необязательная)
// Сделайте функцию getDigitsSum(digit - это цифра), которая параметром
// принимает целое число(например 5025) и возвращает сумму его цифр
// (в данном примере возвращаемое из функции значение будет 12).
//

let getDigitsSum = function (digit) {
  let str = String(digit);
  let arr = Array.from(str);
  let result = 0;
  // let array;
  for (let i = 0; i < arr.length; i++) {
    result = result + Number(arr[i]);
  }
  return result;
};

console.log('--- 1 ---');
console.log(getDigitsSum(5025));
console.log(getDigitsSum(22222));
console.log(getDigitsSum(1111111111));
