//todo После отправки формы добавлять продукт в корзину

//* Переменные
const addForm = document.querySelector('.add-form'); //форма добавления продукта
const productName = document.querySelector('.add-name'); //input продукта
const productsWrapper = document.querySelector('.products-wrapper'); //контейнер для продуктов
const notification = document.querySelector('.notification'); //уведомление
const submitBtn = document.querySelector('.submit-btn'); //кнопка submit

//* состояние - данные, с которыми работает приложение
let editMode = false; // начальное состояние приложения, т.е. добавление товаров, а не редактирование
let editingProductName = ''; //название продукта, котоый мы редактируем

//* Отображение продуктов при првоначальной загрузке
const showProducts = () => {
  const products = localStorage.getItem('products')
    ? JSON.parse(localStorage.getItem('products'))
    : [];
  if (products.length > 0) {
    products.forEach(product => createProducts(product.id, product.name));
  }
};

//* Добавление продукта
const addProduct = e => {
  e.preventDefault();
  const currProduct = productName.value;
  const id = new Date().getTime().toString();

  if (currProduct && !editMode) {
    // Создание элемента в html
    createProducts(id, currProduct);

    //* Добавить в LocalStorage
    addToLocalStorage(id, currProduct);

    //* Отобразить уведомление
    showNotification('Продукт добавлен', 'succes');

    //* Вызов функции сброса
    resetOptions();
  } else if (currProduct && editMode) {
    console.log('Редактируем продукт');

    // старый id остается, изменяется название продукта, что находится в input
    // currProduct - это новое название продукта, который редактируем,
    // у редактируемого элемента изменить его название на currProduct
  }
};

//* Создание элемента
const createProducts = (id, name) => {
  const element = document.createElement('div');
  element.setAttribute('id', id);
  element.classList.add('product');
  element.innerHTML = `
    <h5 class="product-name" >${name}</h5>
      <div class="product-action">
        <button class="delete-btn">Удалить</button>
        <button class="edit-btn">Редактировать</button>
      </div>
    `;

  //* Добавить слушатель на кнопку удаления
  const deleteBtn = element.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', deleteProduct);

  //* Добавить слушатель на кнопку редактирования
  const editBtn = element.querySelector('.edit-btn');
  editBtn.addEventListener('click', editProduct);

  //* Добавить элемент в контейнер продуктов
  productsWrapper.appendChild(element);
};

//* Уведомление при создании или удалении
const showNotification = (text, classNotification) => {
  //добавляем к div с уведомлением соответ. селектор/стиль
  notification.classList.add(`${classNotification}`);

  //для тега р внутри уведомления меняем текст на тот, который передаем с функцией как аргумент
  notification.querySelector('.notification-text').innerText = `${text}`;

  // отображаем div с уведомлением
  notification.style.display = 'block';

  // через 3 секунды скрываем уведомление
  setTimeout(() => {
    notification.style.display = 'none';
  }, 3000);

  // через 3 секунды удаляем переданный стиль, чтоб поле стилей было пустым
  setTimeout(() => {
    notification.classList.remove(`${classNotification}`);
  }, 3000);
};

//* Добавление в LocalStorage
const addToLocalStorage = (id, name) => {
  const products = getLocalStorage();
  const newProduct = { id, name };
  products.push(newProduct);
  localStorage.setItem('products', JSON.stringify(products));
};

//* Удаление из LocalStorage
const removeFromLocalStorage = id => {
  const products = getLocalStorage();
  // из массива products удаляем элемент, id которого совпадат с id продукта, который мы получили
  const newProducts = products.filter(product => product.id != id);
  localStorage.setItem('products', JSON.stringify(newProducts));
};

// };

//* Считывание массива из локалсторидж
const getLocalStorage = () => {
  //получаем то, что уже хранится в локалсторидж. Если что то есть, то получаем массив и переводим в строку. Если ничего нет, то возвращаем пустой массив
  return localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
};

//* Очистка поля ввода товаров
const resetOptions = () => {
  productName.value = ''; //* Очистка поля ввода
};

//* Удаление продукта
const deleteProduct = e => {
  // e.target - кнопка, на которую мы нажали
  //находим родитель и еще раз родитель, чтоб весь div удалить
  const productElement = e.target.parentElement.parentElement; //

  //удаляем из html
  productsWrapper.removeChild(productElement);

  //находим id элемента, кнопку которого мы нажали
  const id = productElement.id;

  //удаляем из localStorage, передав id эелемента, который удаляем
  removeFromLocalStorage(id);

  //показывать уведомление
  showNotification('Продукт удален', 'danger');
};

// * Редактировать продукт
const editProduct = e => {
  //переводим приложение в режим редаткирования
  editMode = true;
  //получаем название старого элемента
  const oldProductName = e.target.parentElement.previousElementSibling; // h5
  // в режиме редактирования кнопка "добавить" меняется на "редактировать"
  submitBtn.value = 'Сохранить';
  // Название редатируемого продукта переходит в input
  // productName.value = oldProductName.textContent;
  productName.value = oldProductName.innerText;
};

//* Слушаем события сабмит у addForm
addForm.addEventListener('submit', addProduct);

//* Вызов функции для первого рендеринга. Получаем данные из локалсторидж
showProducts();

//* Шаблон карточки
/*
<div class="product">
      <h5 class="product-name">Название продукта</h5>
      <div class="product-action">
        <button class="delete-btn">Удалить</button>
        <button class="edit-btn">Редактировать</button>
      </div>
    </div>

    */
