// callback - функция обратного вызова

// function sum(a, b) {
//   return a + b;
// }
// // sum(10, 15);

// function fn(anotherFn) {
//   anotherFn();
// }

// // console.log(fn()=>{});
// fn(() => sum(10, 15));

// function sum(a, b) {
//   return a + b;
// }

// function min(a, b) {
//   return a - b;
// }

// lib(sum, 10, 15);
// lib(min, 20, 5);

// function add(num) {
//   return num + 2;
// }
// console.log(add(10));

//let names = ['Ivan', 'Kirill', 'Arsen', 'Nikolay'];
//let newNames = names.map(name => `Hello, ${name}`);
//console.log(newNames);

// добавить к каждому элементу массива 3
//

//let myArray = [1, 2, 3, 4, 5];
//let newArray = myArray.map(itemArray => itemArray + 3);
//console.log(newArray);

// вариант выше с коллбеком
//
// let nums = [1, 2, 3, 4, 5];
// let addThree = num => (num += 3);

// let newNums = nums.map(addThree);
// console.log(newNums);

// Реализовать функцию, которая аргументами принимает массив
//

// let nums = [1, 2, 3, 4, 5];
// let addThree = num => (num += 3);

// function myMap(array, callback) {
//   let newArr = [];

//   for (let i = 0; i < array.length; i++) {
//     // newArr.push(array[i]);
//     newArr.push(callback(array[i]));
//   }
//   return newArr;
// }
// console.log(myMap(nums, addThree));

let names = ['Ivan', 'Kirill', 'Arsen', 'Nikolay'];
names.forEach(name => console.log(`Hello, ${name}`));
