//todo создать функцию, которая получает в качестве аргумента название поста и добавляет в элемент #root  параграф с названием поста

// const root = document.querySelector('.root');

// function createPost(title) {
//   const titleName = document.createElement('p');
//   titleName.innerText = title;
//   root.append(titleName);
// }

// createPost('Всем привет');

//todo доработать функцию createPost таким образом, чтобы функция получала два аргумента (заголовок и текст поста) и формировала следующую верстку

/*
<div>
    <p>Заголовок</p>
    <p>Текст</p>
</div>
*/

// const root = document.querySelector('.root');

// function createPost(title, body) {
//   const container = document.createElement('div');
//   const titlePar = document.createElement('p');
//   const bodyPar = document.createElement('p');

//   titlePar.innerText = title;
//   bodyPar.innerText = body;

//   container.append(titlePar, bodyPar);
//   root.append(container);
// }
// createPost('Заголовок', 'Текст');

//todo используя функцию createPost отображайте данные, пришедшие с сервера,  в интерфейсе

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(resp => resp.json())
//   // .then(data => createPost(data.title, data.body));
//   .then(({ title, body }) => createPost(title, body)); //с деструктиризацией

// todo добавить скрипт, который позволит при отправке формы выводить в консоль  значение указанного id

// const addForm = document.querySelector('.add-form');
// addForm.addEventListener('submit', event => {
//   event.preventDefault();
//   const id = event.target.id.value;
//   console.log(id);
//   event.target.id.value = '';
// });

//todo доработайте процесс таким образом, чтобы при отправке формы в интерфейс  добавлялся пост с указанным id

const addForm = document.querySelector('.add-form');
addForm.addEventListener('submit', event => {
  event.preventDefault();
  const id = event.target.id.value;

  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(resp => resp.json())
    .then(({ title, body }) => createPost(title, body));
  event.target.id.value = '';
});

const root = document.querySelector('.root');
function createPost(title, body) {
  const container = document.createElement('div');
  const titlePar = document.createElement('p');
  const bodyPar = document.createElement('p');

  titlePar.innerText = title;
  bodyPar.innerText = body;

  //todo добавить элементу div(контейнер для поста) класс post
  container.classList.add('post');

  //todo добавить параграфу с заголовком класс subheader и увеличить у него размер текста до 30 px
  titlePar.classList.add('subheader');

  container.append(titlePar, bodyPar);
  root.append(container);
}

//* jsonplaceholder.typicode.com/guide/
// https: fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then(response => response.json())
//   .then(json => console.log(json));

// todo Добавить форму с полями заголовок (input) текст (textarea) и id пользователя (input)
// todo  при отправке формы данные из нее должны выводиться в консоль

const newForm = document.querySelector('.new-form');

newForm.addEventListener('submit', event => {
  event.preventDefault();
  // const { title, text, id } = event.target;
  // console.log(title.value, text.value, id.value);

  const title = event.target.title.value;
  const text = event.target.text.value;
  const id = event.target.id.value;
  console.log(title, text, id);

  //todo применить функию sendPost в отправке формы получив данные из формы отправьте их на сервер для добавления нового поста
  sendPost(title, text, id);

  title.value = '';
  text.value = '';
  id.value = '';
});

//todo создать функцию, которая получает в качестве аргументов title, body, user_id  и отправляет эти данные на сервер для добавления нового поста

const sendPost = (title, body, userId) => {
  https: fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({ title, body, userId }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(response => response.json())
    .then(({ title, body }) => createPost(title, body));
};

//todo получив данные с сервера добавьте их в массив posts  и вызовите rerender, предварительно создав его

const posts = [];

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  .then(resp => resp.json())
  .then(({ title, body }) => posts.push(title, body));

console.log(posts);

// function rerender() {
//   products.innerText = '';

//   if (data.length === 0) {
//     const info = document.createElement('p');
//     info.innerText = 'Товаров нет';
//     products.append(info);
//   } else {
//     data.forEach(({ id, title, price }) => {
//       const container = createProductCard(id, title, price);
//       products.append(container);
//     });
//   }
// }
