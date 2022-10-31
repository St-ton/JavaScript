// *****     1     *****
// Подсчёт количества свойств объекта
// Напишите функцию count(obj), которая возвращает количество свойств объекта:

// let user = {
//   name: 'John',
//   surname: 'Smith',
//   age: 30,
//   email: '123@gmail.com',
// };
// let countKey = 0;
// function count(object) {
//   for (key in object) {
//     countKey++;
//   }
//   return countKey;
// }
// console.log(count(user));

// *****     2     *****
// Максимальная зарплата
// У нас есть объект salaries с зарплатами:
// let salaries = {
//    "John": 100,
//    "Pete": 300,
//    "Mary": 250
// };
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
// Если объект salaries пустой, то нужно вернуть null.

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
let maxSalary = 0;
function topSalary(salaries) {
  for (key in salaries) {
    if (maxSalary < salaries[key]) {
      maxSalary = salaries[key];
    }
  }
  return maxSalary;
}
console.log(topSalary(salaries));
