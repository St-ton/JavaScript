const products = [
  {
    id: 1,
    title: 'велосипед',
    price: 45000,
    marks: [4, 3, 5, 3],
  },
  {
    id: 2,
    title: 'ролики',
    price: 25000,
    marks: [4, 3, 5, 5],
  },
  {
    id: 3,
    title: 'самокат',
    price: 15000,
    marks: [3, 5, 3],
  },
  {
    id: 4,
    title: 'сноуборд',
    price: 270000,
    marks: [4, 3, 5],
  },
  {
    id: 5,
    title: 'лыжи',
    price: 30000,
    marks: [4],
  },
];

//
//! map
//

let result1 = products.map(elem => {
  return { id: elem.id ** 2, price: elem.price + 10000 };
});
console.log(result1);

//
//! filter - возвращает  массив, элементы которого соответствуют условиям callback
//

let result2 = products.filter(elem => elem.price > 30000);
console.log(`2: + ${result2}`);

//
//! find - возвращает значение первого найденного элемента  (объект значений)
//

let result3 = products.find(elem => elem.price > 30000);
console.log(result3);

//
//! reduce - возвращает результат агрегации
//
let array = [1, 2, 3, 4];
let sum = 0;
for (let elem of array) {
  sum = sum + elem;
  console.log(sum);
}

let result = array.reduce((sum, elem) => sum + elem, 0);
