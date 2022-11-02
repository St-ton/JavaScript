//
// Вывести данные значений объекта, у котрых ключ не Вася
//

// let users = {
//   Коля: '1000',
//   Вася: '500',
//   Петя: '200',
// };

// for (const key in users) {
//   const num = Number(users[key]);
//   if (key !== 'Вася') {
//     console.log(num);
//   }
// }

//
// Написать функции, котрые выводят по значению ключ и по ключу значение
//

// let week = {
//   1: 'пн',
//   2: 'вт',
//   3: 'ср',
//   4: 'чт',
//   5: 'пт',
//   6: 'сб',
//   7: 'вс',
// };

// function getKey(value, obj) {
//   for (const key in obj) {
//     if (obj[key] === value) {
//       return key;
//     }
//   }
//   return `value not find`;
// }
// console.log(getKey('ср', week));

// function getValue(propName, obj) {
//   for (const key in obj) {
//     if (propName === key) {
//       return obj[propName];
//     }
//   }
//   return `key not find`;
// }
// console.log(getValue('5', week));

// let getObject = {
//   getValue: (propName, obj) => {
//     for (const key in obj) {
//       if (propName === key) {
//         return obj[propName];
//       }
//     }
//     return `key not find`;
//   },
//   getKey: (value, obj) => {
//     for (const key in obj) {
//       if (obj[key] === value) {
//         return key;
//       }
//     }
//     return `value not find`;
//   },
// };
// console.log(getObject.getValue('2', week));
// console.log(getObject.getKey('пн', week));

//
// Написать функцию, которая принимает объект Имя: ЗП
// Нужно просуммировать ЗП
//

// let employt = {
//   Николай: 1000,
//   Василий: 2000,
//   Светлана: 2500,
//   Иван: 1500,
//   Отдел: 'Разработка',
// };

// function getSalaryInfo(obj) {
//   let summa = getSum(obj);
//   let maxSalary = getMaxSalary(obj);
//   let minSalary = getMinSalary(obj, maxSalary);

//   return { summa, maxSalary, minSalary };
// }

// function getSum(obj) {
//   let summa = 0;
//   for (const key in obj) {
//     if (typeof obj[key] === 'number') {
//       summa += obj[key];
//     }
//   }
//   return summa;
// }

// function getMaxSalary(obj) {
//   let maxSalary = 0;
//   for (const key in obj) {
//     if (typeof obj[key] === 'number') {
//       if (maxSalary < obj[key]) {
//         maxSalary = obj[key];
//       }
//     }
//   }
//   return maxSalary;
// }

// function getMinSalary(obj, maxSalary) {
//   let minSalary = maxSalary;
//   for (const key in obj) {
//     if (typeof obj[key] === 'number') {
//       if (minSalary > obj[key]) {
//         minSalary = obj[key];
//       }
//     }
//   }
//   return minSalary;
// }
// console.log(getSalaryInfo(employt));

//
// Напишите функцию, которая проверяет, является ли элемент именно простым объектом, а не массивом
// const data = { a: 1 };
// console.log(isPlainObject(data)); // true
//

// let isPlainObject = data => typeof data === 'object' && !Array.isArray(data) && data !== null;
// console.log(isPlainObject(null));

//
// Напишите функцию, которая возвращает вложенный
// массив вида`[[key, value], [key, value]]`
//

// let makeArrayFromObject = obj =>
// {
//   let arrBox = [];
//   for (const key in obj)
//   {
//     arrBox.push([key, obj[key]]);
//   }
//   return arrBox;
// };
// console.log(makeArrayFromObject({ a: 1, b: 2 }));

//
// Функция принимает объект и элемент, который нужно удалить из объекта и вернуть измененый объект
// deletedProps - это сколько угодно ключей, которые нужно удалить из массива

// { a: 1, b: 2 }
// ({ a: 1, b: 2 }, 'b') => { a: 1 }
//deletedProps - это сколько угодно ключей которые нужно удалить из объекта 


let without = (obj, ...deletedProps) => {
  let newObject = {};

  for (const key in obj) {
      if (key !== deletedProps) {
          newObject[key] = obj[key];
      }
      deletedProps.forEach(element => {
          if (key !== element) {
              newObject[key] = obj[key];
          }   
      });
  }
  return newObject;
};

console.log(without({a: 1, b: 2}, 'b'));

