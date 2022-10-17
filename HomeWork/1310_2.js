//
// Напишите цикл for, который выводит числа в консоль от 0 до 10.
//

console.log('--- 2 ---');
for (let index = 0; index <= 10; index++) {
  console.log(index);
}

//
// Напишите функцию, get_hypotenuse, которая в качестве аргумента принимает
// два числа(длины катетов) и возвращает гипотенузу.
//

let getHypotenuse = (katet1, katet2) => Math.sqrt(katet1 + katet2);
console.log('--- 3 ---');
console.log(getHypotenuse(5, 10));
