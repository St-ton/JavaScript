
   // написать скрипт, который формирует массив из только четных чисел
 
 // Входные данные
//const numbers = [12, 4, -3, 2, 5, 43, 2, -34, 4, 55, 90];
// let newArr = numbers.filter(elem => elem % 2 === 0);
// console.log(newArr);

   //
  // reduce
 //

// const sumArr = numbers.reduce((prev, item) => prev + item);
// console.log(sumArr);
// prev -  numbers[0], elem - numbers[1]


    // используя reduce найти сумму четных чисел
   // reduce (функция, аргумент) в нашем случае аргументу присвоили 0 для 
  // проверки честности с элемента [0]. 
 //Если аргумент отсутствует, значит берется [0] и [1]

// const result = numbers.reduce(
//      (prev, item) => prev + ((item % 2 === 0) ? item : 0),
//      0
//   );
//   console.log(result);

   //
  // используя reduce найти наибольшее число в массиве и вывести его
 //

// const result = numbers.reduce(
//      (prev, item) => prev < item ? item : prev);
//   console.log(result);

  // Входные данные
// const products = [
//   {
//     id: 1,
//     title: 'велосипед',
//     price: 45000,
//   },
//   {
//     id: 2,
//     title: 'ролики',
//     price: 25000,
//   },
//   {
//     id: 3,
//     title: 'самокат',
//     price: 15000,
//   },
//   {
//     id: 4,
//     title: 'сноуборд',
//     price: 27000,
//   },
//   {
//     id: 5,
//     title: 'лыжи',
//     price: 30000,
//   },
// ];

    //
   // используя методы массивов создайте массив из названий товаров
  //

// const titles = products.map(product => product.title);
// console.log(titles);
// 

  // Через деструктиризацию
 //
// const titles2 = products.map(product => {
//   const { title } = product; 
     //тоже самое, как если const title = products.title; 
     //переменные в {} должны называться также, как и в массиве
//   return title;
// });
// console.log(titles2);
    
  // Еще сокращаем код, сразу подставляем { }
 //
// const titles = products.map( ({title}) => {
//   return title; 
// });
//   console.log(titles);

  // Убираем return

// const titles = products.map( ({title}) => title);
// console.log(titles);

  // Если нужно несколько переменных достать из массива и в 
 // вывод добавить к ним текст описания

// const titles = products.map( ({title, price}) => `${title} : ${price}`);
   // по другому эта же запись 
  // const titles = products.map(product => `${product.title} : ${product.price}`);
// console.log(titles);

    //
   // написать скрипт, который формирует массив из объектов с товарами 
  // которые стоят дешевле 26000
 //

// const result = products.filter(({price}) => price < 26000);
// console.log(result);

   //
  // найти общую сумму товаров используя методы массивов
 //

// const result = products.reduce((prev, product) => prev + product.price, 0);
// console.log(result);    
  // не можем использовать prev.price, т.к. на 1й итерерации возьмется стоимость, а уже на 2м щаге это будет цена.цена
    // т.е. prev - это аккумулятор какого то сложения

  
   //
  // найти количество товаров 
 //

// const result_1 = products.reduce((prev ) => prev + 1, 0);
// console.log(result_1);


//
// используя методы массивов найти самый дорогой товар
//

// const max = products.reduce(
//    (prev, item) => prev.price > item.price ? prev : item
//    );
// console.log(max); 

  // Входные данные
// const products = [
//   {
//       id: 1,
//       title: 'велосипед',
//       price: 45000,
//       marks: [4, 3, 5, 3]
//   },
//   {
//       id: 2,
//       title: 'ролики',
//       price: 25000,
//       marks: [4, 3, 5, 5]
//   },
//   {
//       id: 3,
//       title: 'самокат',
//       price: 15000,
//       marks: [3, 5, 3]
//   },
//   {
//       id: 4,
//       title: 'сноуборд',
//       price: 270000,
//       marks: [4, 3, 5]
//   },
//   {
//       id: 5,
//       title: 'лыжи',
//       price: 30000,
//       marks: [4]
//   }
// ];

// используя методы массивов 
// написать процесс, который позволит сформировать массив
// из объектов с названием, ценой и средней оценкой


 // БЕЗ Деструктуризации сохраняем массив с объектами в другой
 // avg_mark - объявляем переменную для средней оценки

// const result = products.map(product => ({
//   id: product.id,
//   title: product.title,
//   price: product.price,
//   avg_mark: product.marks.reduce((a,b) => a + b) / product.marks.length
// }));

   // С Деструктуризацией 
  //
 
// const result = products.map(({id, title, price, marks}) =>({
//     id, title, price, 
//     avg_mark: marks.reduce((a,b) => a + b) / marks.length
// }));
// console.log(result); 

  // Еще короче код через спред оператор
 // 
// const result = products.map(({marks, ...product}) => ({
//   ...product,
//   avg_mark: marks.reduce((a, b) => a + b) / marks.length
// }));


// const products = [
//   {
//       id: 1,
//       title: 'велосипед',
//       price: 45000,
//       count: 3,
//       marks: [4, 3, 5, 3]
//   },
//   {
//       id: 2,
//       title: 'ролики',
//       price: 25000,
//       count: 5,
//       marks: [4, 3, 5, 5]
//   },
//   {
//       id: 3,
//       title: 'самокат',
//       price: 15000,
//       count: 2,
//       marks: [3, 5, 3]
//   },
//   {
//       id: 4,
//       title: 'сноуборд',
//       price: 270000,
//       count: 0,
//       marks: [4, 3, 5]
//   },
//   {
//       id: 5,
//       title: 'лыжи',
//       price: 30000,
//       count: 1,
//       marks: [4]
//   }
// ];

//
// используя методы массивов найти общую стоимость
//

// const result = products.reduce((prev, product) => 
// prev + product.price * product.count, 0);

// const result = products.reduce((prev, {price, count}) => 
//     prev + price * count, 0);
     
// console.log(result); 
