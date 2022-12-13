// let checkNumber = function (num1, num2) => num1 === num2;
// let checkNumber = (num1, num2) => num1 + num2 > 10;

// console.log(checkNumber(1, 2));
// console.log(checkNumber(2, 10));

// let checkNegativNumber = (num) => num < 0;

// console.log(checkNegativNumber(-5));
// console.log(checkNegativNumber(5));

// let isNumberInRange = num => num > 0 && num < 10;

// console.log(isNumberInRange(11));
// console.log(isNumberInRange(8));

// let isEven = num => num % 2 == 0;

// console.log(isEven(6));
// console.log(isEven(5));

// let hello = function (userName = 'Guest') {
//   console.log(`Привет, ${userName}`);
// };
// hello('Ivan');
// hello();

// let multy = (num1, num2) => num1 * num2;
// console.log(multy(2,5));

// let rgb = function (n1 = 0, n2 = 0, n3 = 0) {
//   return `rgb(${n1},${n2}, ${n3})`;
// };
// console.log(rgb(255, 255, 245));
// console.log(rgb(5, 10));

// let i = 45;
// while (i <= 67) {
//   if (i % 10 == 0) {
//     console.log(i);
//   }
//   i++;
// }

// for (let i = 45; i <= 67; i++){
//   if (i % 5 == 0) {console.log(i);}
// }

// let strNumb = function (n) {
//   if (n == 0) return 'zero';
//     if (n == 1) return 'one';
//   if (n == 2) return 'two';
//   if (n == 3) return 'third';
//   return 'default';
// };
// console.log(strNumb(2));
// console.log(strNumb(5));

let strNumb = function (n) {
  return n == 0 ? 'zero' : n == 1 ? 'one' : 'default';
};
console.log(strNumb(5));

// let calc = function (a, b, operator) {
//   if (operator === '+') return a + b;
//   if (operator === '-') return a - b;
//   if (operator === '*') return a * b;
//   if (operator === '/') return a / b;
// };
// console.log(calc(3, 5, '+'));
// console.log(calc(3, 5, '-'));
// console.log(calc(3, 5, '*'));
// console.log(calc(3, 5, '/'));
