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
console.log('--- Result ---');
console.log(getDigitsSum(5025));
console.log(getDigitsSum(2222));
console.log(getDigitsSum(1111111111));
//
//  Продолжение на уроке
//
for (let i = 0; i <= 2022; i++) {
  if (getDigitsSum(i) === 13) {
    console.log(i);
  }
}
let checkYears = (startYear, endYear, checkSum) => {
  // 2 запуск с аргументами
  let yearsArray = []; // 3 создаем  пустой массив
  for (let i = startYear; i <= endYear; i++) {
    // 4 перебираем все года
    if (getDigitsSum(i) === checkSum) {
      // 5 проверяем сумму
      yearsArray.push(i); // 6 push массив числами
    }
  }
  return yearsArray; // 7 возвращаем массив
};
console.log(checkYears(0, 1000, 13)); //1 вызов функции
