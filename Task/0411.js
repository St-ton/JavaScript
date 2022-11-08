// запрос на сервер через API. Ответ от сервера через JSON
// const user ={
//   name: 'Arsen',
//   job: 'Frontend Dev'
// };

// JS - объект, ключ:значение

// Распаковка массивов
//
// const arr = ['Hello', 'World'];
// const newArr = [...arr, '!'];
// Распаковываем массив и добавляем 3й элемент ['Hello', 'World','!'];

// Шаблонные переменные
//
// let num = 10;
// console.log(`Сегодня $ {num} градусов`);

// posts - массив объектов, такая структура данных в итоге приходит с сервера
//
// const posts = [
//   {
//     title: 'My first title',
//     descr: 'My first description',
//     autor: 'Arsen',
//   },
//   {
//     title: 'My second title',
//     descr: 'My seсond description',
//     autor: 'Ivan',
//   },
// ];
// вывод массива объектов в виде таблицы
//console.table(posts);

// const title = prompt('Введите заголовок');
// const descr = prompt('Введите описание');
// const autor = prompt('Введите автора');

// Добавить данные в массив posts. Не с помощью push, а вернуть новый массив 
// с добавленными данными и отобразить  консоле как таблицу

// объект из 1 поста. Т.к. ключ и переменная названы одинаковы, то делаем сокращение кода
// const newPost = {
//   title,
//   descr,
//   autor,
// };
// const newPosts = posts.concat(newPost);
// console.table(newPosts);

// const newPosts = posts.concat(title, descr, autor);
// сокращаем код, сразу передавая принятые переменные без объявления newPost
// const newPosts = [...posts,newPost];
// Распаковываем вначале имеющийся массив. Есл не укажем ..., то имеющмийся массив 
// весь станет элементом с индексом 0, а не набором элементов, как должно быть

// В html не можем отобразить массивы и объекты
// <div>${user.name}</div> получим <div>[Object object]</div>

// В консоле отобразить разметку HTML и создать таблицу
//
// for (let i = 0; i < newPosts.length; i++) {
//   console.log(`
//   <div class = "post">
//    <p>Title: ${newPosts[i].title}</p> 
//    <p>Descr: ${newPosts[i].descr}</p> 
//    <p>Autor: ${newPosts[i].autor}</p> 
// </div>`);
// }


// {autor, name, count}, {}, {}
//
const books = [{
autor: "Пушкин",
name: "Капитанская дочка",
count: "500"
},
{
  autor: "Толстой",
  name: "Война и мир",
  count: "1000"
  },
  {
    autor: "Достоевский",
    name: "Идиот",
    count: "700"
    },
];

const newAutor = prompt('Введите автора книги');
const newName = prompt('Введите название книги');
const newCount = prompt('Введите количество страниц');

const newBook = {
  autor: newAutor,
  name: newName,
  count:newCount 
};

const newBooks = books.concat(newBook); 
// books остается неизменным, в отличии от метода push, который бы мутировал первоначальный массив 
// const newBooks = books.push(newBook)
// const newBooks = [...books, newBook] ... называется спред-оператором
// скопируются в новый массив все элементы из имеющегося, потом добавится newBook

// На HTML отобразить автора и название
// Вместо for переписываем на map или forEach
//for (let i = 0; i < newBooks.length; i++)

// при 1 иттерации book == первому элементу из массива объектов и далее на каждом шаге следующий элемент
newBooks.map(book => {
  console.log(`
  <div class = "book">
  <p>Автор: ${book.autor}</p>
  <p>Название книги: ${book.name}</p>
  <p>Количество страниц: ${books.count}</p>
  </div>
  `);  
});


// Спред оператор ...
const user = {
  name: 'Arsen',
  age: 24,
  job: 'Frontend Dev'
};
const user1 = {...user, name: 'Stanislav'};
// В user1 мы копируем все ключи-элементы из user, а потом 
// меняем значение ключа name на другое. Получается очень быстрое копирование



