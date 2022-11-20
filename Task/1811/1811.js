const cars = [
  { mark: 'Mercedes-Benz', model: 'S600', year: '1999', price: 15000 },
  { mark: 'BMW', model: 'M3', year: '2002', price: 18000 },
  { mark: 'Audi', model: 'Q3', year: '2006', price: 14000 },
  { mark: 'VW', model: 'Golf-4', year: '1998', price: 8000 },
  { mark: 'Toyota', model: 'MarkX', year: '2005', price: 13000 },
  { mark: 'Lexus', model: 'RX300', year: '2007', price: 20000 },
  { mark: 'Mercedes-Benz', model: 'S500', year: '1995', price: 12000 },
];

//todo 1. вернуть массив с маркой и моделью машины

//? 1й вариант
// const carsModels = cars.map(car => `${car.mark} ${car.model}`);

//? 2й вариант с деструктиризацией
// const carsModels = cars.map(({ mark, model }) => `${mark} ${model}`);

// console.log(carsModels);

//todo 1*. Вернуть массив, в котором вместо марки и модели по отдельности будет объединенная строка `Марка Модель` и все остальные свойства { markModel : "BMW M3", year : "2002", price : 18000 }   ]

//? 1й вариант
// const carsModels = cars.map(car => {
//   return {
//     markModel: `${car.mark} ${car.model}`,
//     year: car.year,
//     price: car.price
//   };
// });

//? 2й вариант
// const carsModels = cars.map(({ mark, model, price, year }) =>{
// return {
//   markModel : `${mark} ${model}`,  year,  price
//  };
// });

//? 3й вариант
// const carsModels = cars.map(({ mark, model, ...rest }) => {
//   return {
//     markModel: `${mark} ${model}`,
//     ...rest,
//   };
// });

// console.log(carsModels);

//todo Задача2. Посчитать среднюю цену всех автомобилей
// средняя цена = сумма всех цен / количество автомобилей

//? 1й вариант
// cars.reduce(callback, initial) где callback - sum + car.price
// const priceCars = cars.reduce((sum, car) => sum + car.price, 0) / cars.length;

//? 2й вариант
// const priceCars = cars.reduce((sum, car) => sum + car.price, 0) / cars.length;

//? 3й вариант
// Если бы нужно было посчитать просто сумму всех автомобилей
// const priceCars = cars.reduce((sum, car) => sum + car.price, 0) / cars.length;

//? Вариант Валерии
// const priceCars = Math.floor(cars.reduce((sum, { price }) => sum + price, 0) / cars.length);

// console.log(Math.round(priceCars)); // округляет математически
// console.log(Math.floor(priceCars)); // округляет в меньшую сторону
// console.log(priceCars.toFixed(2)); // округляет до 2х знаков после запятой

//todo Задача 3. Вернуть массив машин, которым меньше 20 лет.
//? 1-й вариант
// const ageCars = cars.filter(car => 20 > 2022 - car.year);

//? 2-й вариант
// const date = new Date().getFullYear();
// const ageCars = cars.filter(car => car.year > date - 20);

//? 3-й вариант
// const ageCars = cars.filter({ year } => new Date().getFullYear() - year > 20);

// console.log(ageCars);

// const users = [
//   { name: 'Arsen', bDay: '03/03/1998' },
//   { name: 'Ivan', bDay: '10/25/1990' },
//   { name: 'Alex', bDay: '07/05/1995' },
//   { name: 'Kostya', bDay: '02/12/2005' },
//   { name: 'Max', bDay: '05/07/2001' },
//   { name: 'Ann', bDay: '01/15/2002' },
//   { name: 'Julia', bDay: '09/13/2003' },
//   { name: 'Oksana', bDay: '10/25/2001' },
// ];

// Кто из пользователей старше 20? Для след. года тоже должно работать
// const userAge = users.filter(({ bDay }) =>
// {
//  return new Date().getFullYear() - new Date(bDay).getFullYear() > 20
// });
// console.log(userAge);

//! sort(a,b) -сортировка массива по линвестическому значению, если не принимается в аргументах колбек функция
//! (a - b) сортировка от меньшему к большему
//! (b - a) сортировка от большему к меньшему

//const names = ['Max', 'Arsen', 'Julia', 'Andrey'];
// const sortedNames = names.sort();
// console.log(sortedNames);

// const nums = [131, 20, 55, 15, 32];
// const sortedNums = nums.sort((a, b) => a - b); //
// console.log(sortedNums);

/*
nums.sort((a,b) => {
  if (a > b) - b встает на первое место, иначе все остается также
  if (a == b) - порядок не меняется
  if (a < b) - a встает на первое место
  })
*/

//todo Задача4. Отсортировать массив с машинами по цене (от меньшей к большей)
const sortedCars = cars.sort((a, b) => a.price - b.price);
console.log(sortedCars);
