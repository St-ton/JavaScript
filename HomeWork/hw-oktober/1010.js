// First level: Выведите чётные числа в консоль
// При помощи цикла for выведите чётные числа от 2 до 10.
// Для проверки на чётность используйте оператор получения остатка
//  от деления % - if (i % 2 == 0)

console.log('--- Level1---');
for (let j = 2; j <= 10; j++) {
  if (j % 2 == 0) console.log(`even number  ${j}`);
}

// Second level: Перепишите код, заменив цикл for на while, без
// изменения поведения цикла.
//
// for (let i = 0; i < 3; i++) {
// console.log( number ${i}! );
// }
console.log('--- Level2---');
let i = 0;
while (i < 3) {
  console.log(`number ${i}!`);
  i++;
}
