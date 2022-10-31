//
// Запросить у пользователя имя и в уведомление вывести
// Здравствуй, Имя
//
// let userName = prompt('Как Вас зовут?');
// alert(`Hello ${userName}`);

//
// Сделать так, чтобы имя пользователя всегда начиналось с
//  заглавной букы
//
// let userName = prompt('Как Вас зовут?');
// let newUserName = userName[0].toUpperCase() + userName.slice(1);
// alert(`Hello ${userNewName}`);

//
// Если в массиве arr существует neName, то в алерте
// возвращаем Такое имя уже существует. Если имени нет, то
// мы его добавляем в конец массива
//

// let arr = ['Ivan', 'Andrey', 'Anna', 'Veronika'];
// let newName = promt('Какое имя Вы хотите добавить?');
// function checkName(name) {
//   for (let i = 0; i < arr.length; i++) {
//     // const element = arr[i];
//     // чтобы исключить неравенство 'a' и 'A' приводим обе переменные к нижнему регистру
//     if (arr[i].toLowerCase() == name.toLowerCase()) {
//       return alert(`Такое имя уже существует`);
//     }
//   }
//   name = name[0].toUpperCase() + name.slice(1);
//   arr.push(name);
// }
// checkName(newName);
// console.log(arr);

// function checkNameIncludes(name) {
//   if (arr.includes(name)) {
//     return alert(`Такое имя уже существует`);
//   }
//   arr.push(name);
// }

// let nums = [2, 4, 6, 8]; // Добавить в массив 10
// let newArr = nums.concat(10);
//
// concat создает копию (новый) массив, добавляет туда
// новый элемент и возвращает новый массив. При этом первоначальный массив не изменяется
//
// let newArr = nums.push(10);
//
// push мутирует массив и добавляет новый элемент в конец.
// Это не безопасно, если нам потребуется первонач. массив
// console.log(nums);
// console.log(newArr);

//
//Удалить буквы b,c,d используя метод splice
// Вместо букв записать цифры 2,3,4
//
// Метод splice работает тогда, когда нужно удалитьэлементы подряд
//

// let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
// let deleted = arr.splice(1, 3, 2, 3, 4);
// 1-позиция с которой удаляем, 3 - количество удаляемых элементов
// '2', '3', '4' - это элементы, которые добавляем вместо
// удаленных (стринговые) или 2,3,4 - цифровые
// arr.splice(1, 0, 2,3,4) - так мы раздвинем массив, вставив с
// 1й позиции, т.к. 0 означает, что ничего не удаляем

// console.log(deleted); // какие элементы удалили
// console.log(arr); // что осталось в массиве

// Выводить пользователю строку из массива.
// Спрашивать какое слово по очереди он хочет удалить.
// Спрашивать какое слово он хочет добавить вместо удаленного
// и в итоге выводить полученную строку из массива.

let message = ['Hello', 'My', 'name', 'is', 'Arsen'];
let index = +prompt('Какое слово по очереди Вы хотите удалить? ' + message.join(' '));
// promt всегда string, поэтому ставим перед +
if (index > 0 || index < message.length) {
  index--;
}
let str = prompt('Какое слово Вы хотите вставить ? ');
let result = message.splice(index, 1, str);
console.log(message.join(' '));
