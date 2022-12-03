const main = document.querySelector('main');

const books = [
  { id: 1, author: 'Пушкин', name: 'Капитанская дочка', count: 500 },
  {
    id: 2,
    author: 'Толстой',
    name: 'Война и мир',
    count: 1000,
  },
  {
    id: 3,
    author: 'Достоевский',
    name: 'Преступление и наказание',
    count: 700,
  },
];

// Вывести все объекты из массива с соответствующей разметкой

// books.filter(book =>{
//   return book.count > 600})
//   .map(book => {
//   main.innerHTML += `
// <div class= "book">
// <h1>Название: ${book.name}</h1>
// <p>Автор: ${book.author}</p>
// <p>Количество страниц: ${book.count}</p>
// </div>
// `});

function showBooks() {
  books.map(book => {
    main.innerHTML += `
<div class= "book book-${book.id}"> 
<h1>Название: ${book.name}</h1>  
<p>Автор: ${book.author}</p>
<p>Количество страниц: ${book.count}</p>
<button class="delete-btn" id="${book.id}">Удалить</button> 
</div>
`;
  });
}

showBooks();

//Удаление
const buttons = document.querySelectorAll('.delete-btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const idAtr = button.getAttribute('id');
    const delBook = document.querySelector(`.book-${idAtr}`);
    delBook.remove();
  });
});

// Вручную
// main.innerHTML = `
// <div class= "book">
// <h1>Название: ${books[0].name}</h1>
// <p>Автор: ${books[0].author}</p>
// <p>Количество страниц: ${books[0].count}</p>
// </div>
// <div class= "book">
// <h1>Название: ${books[1].name}</h1>
// <p>Автор: ${books[1].author}</p>
// <p>Количество страниц: ${books[1].count}</p>
// </div>
// `;

// let main = {
// innerHTML: "",
// fn: function(){
// },
//innerText: "",
//style:{
// };

// main.innerHTML;
// main.fn();

//
