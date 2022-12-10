// const arr = {
//   data: [12, 4, 32, 5, 43],
// };

// localStorage.setItem('test_item', arr);
// console.log(localStorage.getItem('test_item'));

//! JSON.stringify(arr);
//* преобразует объект в строку '{"data":[12,4,32,5,43]}'
//const str = JSON.stringify(arr);

//! JSON.parse(str);
//* преобразует строку в объект { data: [12, 4, 32, 5,43],};

// localStorage.setItem('test_item', JSON.stringify(arr));
// console.log(JSON.parse(localStorage.getItem('test_item')));

// const obj_str = localStorage.getItem('test_item');
// const obj = JSON.parse(obj_str);

// todo https://2048game.com/ru/

// Application - LocalStorage
// переходим в консоль и выполняем
// const state = JSON.parse(localStorage.getItem('gameState'));
// state
// const cells = state.grid.cells;
// cells
/* state.grid.cells = cells.map(
  (column, x)=>column.map(
    (_, y)=>(
      { position: { x, y }, value: 2048 }
    )
  )
);

localStorage.setItem('gameState',JSON.stringify(state));

*/

//todo  Реализовать процесс в js, который при отправке формы //выводит   содержимое поля ввода в консоль

//const form = document.querySelector('.add_task');

// form.addEventListener('submit', event => {
//   event.preventDefault();
//* останавливаем запрос на сервер, чтоб страница не зависала и не крашилась, т.к. у нас пока нет сервера, который примет запрос
//   const task = event.target.task.value;
//   const password = event.target.password.value;
//   console.log(task);
//   console.log(password);
//   event.target.task.value = '';
//   event.target.password.value = '';
// });

// todo доработать js таким образом, что бы указанное значение добавлялось в массив в localStorage

// let tasks = JSON.parse(localStorage.getItem('tasks')) ?? [];
//* условный оператор ??, который присваеивает либо  значение слева от него, либо справа
// Он заменил проверку
// if (tasks === null) {
//   tasks = [];
// }

// const form = document.querySelector('.add_task');

// form.addEventListener('submit', event => {
//   event.preventDefault();
//   const task = event.target.task.value;
//   tasks.push({ id: Date.now(), task });
//   localStorage.setItem('tasks', JSON.stringify(tasks));
//   event.target.task.value = '';
// });
// console.log(tasks);

// todo writeLocal - получает в качестве аргумента массив и записывает его в localStorage под ключем tasks
// todo readLocal - не получает аргументов и возвращает из localStorage значение, преобразованное в массив

function writeLocal(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function readLocal() {
  return JSON.parse(localStorage.getItem('tasks')) ?? [];
}

let tasks = readLocal();

const form = document.querySelector('.add_task');
const tasksContainer = document.querySelector('.tasks');

form.addEventListener('submit', event => {
  event.preventDefault();
  const task = event.target.task.value;
  // tasks.push({ id: Date.now(), task });

  writeLocal([...readLocal(), { id: Date.now(), task }]);

  event.target.task.value = '';
  rerender();
});

// todo написать функцию rerender которая
// 1) очищает содержимое ".tasks"
// 2) выводит параграфы с текстом задачи в элемент ".tasks"

function rerender() {
  tasksContainer.innerText = '';
  if (readLocal().length === 0) {
    const task_p = document.createElement('p');
    task_p.innerText = 'Никаких задач нет';
    tasksContainer.append(task_p);
  } else {
    readLocal().forEach(({ task, id }) => {
      const newCard = createCard(task, id);
      //const task_p = document.createElement('p');
      //task_p.innerText = item.task;
      tasksContainer.append(newCard);
    });
  }
}
rerender();

//todo вынести процесс создания карточки с делом в функцию createCard
//todo данная функция получает в качестве аргумента название дела и возвращает параграф с названием дела внутри createCard('выучить гриды') -> <p>выучить гриды</p>

function createCard(task, id) {
  const card = document.createElement('div');
  const textTask = document.createElement('p');
  const buttonTask = document.createElement('button');

  buttonTask.addEventListener('click', () => deleteTask(id));

  card.append(textTask, buttonTask);
  textTask.innerText = task;
  buttonTask.innerText = 'Удалить';
  return card;
}

//todo   Преобразовать вывод карточек задач

/* <div>
  <p>наименование</p>
  <button>Удалить</button>
</div>; 
*/

//todo доработать процесс таким образом, чтобы при нажатии на кнопку "Удалить" в консоль выводилась строка "Удалить"

//todo доработать обработчик нажатия на кнопку таким образом чтобы в консоль выводилась строка "Удалить <id>"

//todo создать функцию, которая удаляет дело из карточки функция получает id карточки в качестве аргумента
// 1) используя метод filter формируем новый массив
// со значениями, у которых id не равен переданному
// 2) вызываем write_local и передаем массив из 1 пункта
// 3) вызвать rerender

function deleteTask(id) {
  let newTasks = readLocal().filter(item => item.id != id);
  writeLocal(newTasks);
  rerender();
}
