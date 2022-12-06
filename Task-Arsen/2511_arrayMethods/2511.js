const customers = [
  {
    id: 1,
    firstName: 'Ivan',
    lastName: 'Alekseev',
  },
  {
    id: 2,
    firstName: 'Arsen',
    lastName: 'Iusupov',
  },
  {
    id: 3,
    firstName: 'Sam',
    lastName: 'Tyler',
  },
  {
    id: 4,
    firstName: 'Jack',
    lastName: 'Rocky',
  },
  {
    id: 5,
    firstName: 'Kendrick',
    lastName: 'Lamaar',
  },
  {
    id: 6,
    firstName: 'John',
    lastName: 'Lennon',
  },
  {
    id: 7,
    firstName: 'Paul',
    lastName: 'McCartney',
  },
];

const orders = [
  {
    id: 1,
    customerId: 3,
    date: '02/03/2022',
    delivered: true,
    products: [
      { productId: 567, price: 2000 },
      { productId: 789, price: 3000 },
    ],
  },
  {
    id: 2,
    customerId: 5,
    date: '05/08/2022',
    delivered: false,
    products: [
      { productId: 413, price: 2500 },
      { productId: 124, price: 1000 },
    ],
  },
  {
    id: 3,
    customerId: 1,
    date: '05/12/2021',
    delivered: true,
    products: [
      { productId: 500, price: 1500 },
      { productId: 213, price: 1500 },
    ],
  },
  {
    id: 4,
    customerId: 6,
    date: '10/07/2022',
    delivered: true,
    products: [
      { productId: 531, price: 1000 },
      { productId: 231, price: 2500 },
    ],
  },
  {
    id: 5,
    customerId: 6,
    date: '10/08/2022',
    delivered: false,
    products: [
      { productId: 912, price: 5000 },
      { productId: 942, price: 500 },
    ],
  },
  {
    id: 6,
    customerId: 2,
    date: '10/08/2022',
    delivered: true,
    products: [
      { productId: 545, price: 2300 },
      { productId: 942, price: 800 },
    ],
  },
  {
    id: 7,
    customerId: 7,
    date: '05/09/2022',
    delivered: true,
    products: [
      { productId: 600, price: 2000 },
      { productId: 849, price: 900 },
    ],
  },
  {
    id: 8,
    customerId: 4,
    date: '10/10/2022',
    delivered: true,
    products: [
      { productId: 575, price: 2400 },
      { productId: 248, price: 850 },
    ],
  },
];

//! вернуть список продуктов, которые заказал Sam Tyler. Возвращаем массив объектов, которые заказал пользователь
// ! У одного пользователя может быть только один заказ

// 1.Sam Tyler - имя пользователя. Находим id пользователя
// find использует только 1 элемент в отличии от filter

// const currentCustomerId = customers.find(
//   customer => customer.firstName == 'Sam' && customer.lastName == 'Tyler'
// ).id;

// 2.Найти заказ, поле customerID которого соответствует id из п.1
// 3. ВЫчленить свойство products из найденного заказа в п.2

// const currentCustomerProduct = orders.find(order => order.customerId == currentCustomerId).products;
// console.log(currentCustomerProduct);

// todo 2й вариант решения, если у клиента несколько заказов

// функция, которая на вход принимает параметры имя и фамилию
//
// const findProductsByPerson = (name, surname) => {
//   const currentCustomerId = customers.find(
//     customer => customer.firstName == name && customer.lastName == surname
//   ).id;

//   return orders.find(order => order.customerId == currentCustomerId).products;
// };
// console.log(findProductsByPerson('Sam', 'Tyler'));

//! Добавить к каждому объекту заказов(orders) свойства firstName и lastName пользователя и вернуть новый массив, котрый сделал заказ. В новом массиве будут объекты с заказами, в которых будет указаны имя и фамилия пользователя, который сделал заказ.

//1. методом orders.map проходимся по каждому элементу
//2. внутри map необходимо найти соответствие customerId=id (users.find)
//3. для каждого соответствия возвращать объект, в который кладем order

// const result = orders.map(order => {
//   const { firstName, lastName } = customers.find(customer => customer.id === order.customerID);
//   return {
//     ...order,
//     firstName,
//     lastName,
//   };
// });
// console.log(result);

//! Задача. Вернуть массив заказов, сумма заказанных продуктов которых больше чем 2000. Если сумма заказанных продуктов больше 2000, то возвращаем объект в новый массив
// filter(), reduce()

// Вариант Макса
// const ordersMore2000 = orders.filter(order => {
//   return order.products.reduce((sum, element) => sum + element.price, 0) > 2000;
// });
// console.log(ordersMore2000);

//!У всех ли заказов, сумма заказанных товаров больше чем 2000. Если больше 2000 - true, если меньше false
// const isMore = orders.every(
//   order => order.products.reduce((sum, element) => sum + element.price, 0) > 2000
// );
// console.log(isMore);

//! Заказал ли пользователь с id 4 хоть что-то. Есть ли заказ в массиве orders, который заказал юзер с id 4.

const isSomebody = userId => {
  return orders.some(order => order.customerId === userId);
};

console.log(isSomebody(4));
