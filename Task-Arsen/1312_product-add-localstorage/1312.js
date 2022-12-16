//todo После отправки формы добавлять продукт в корзину

//* Переменные
const addForm = document.querySelector('.add-form'); //форма добавления продукта
const productName = document.querySelector('.add-name'); //input продукта
const productsWrapper = document.querySelector('.products-wrapper'); //контейнер для продуктов
const notification = document.querySelector('.notification'); //уведомление

//* Отображение продуктов при првоначальной загрузке
const showProducts = () => {
  const products = localStorage.getItem('products')
    ? JSON.parse(localStorage.getItem('products'))
    : [];
  if (products.lenght > 0)  {
    products.forEach((product) => createProducts(product.id, product.name) 
  };
  };
showProducts();

const addProduct = e => {
  e.preventDefault();
  const currProduct = productName.value;
  const id = new Date().getTime().toString();

  if (currProduct) {
    // const element = document.createElement('div');
    // element.setAttribute('id', id);
    // element.classList.add('product');
    // element.innerHTML = `
    // <h5 class="product-name" >${currProduct}</h5>
    //   <div class="product-action">
    //     <button class="delete-btn">Удалить</button>
    //     <button class="edit-btn">Редактировать</button>
    //   </div>
    // `;
    // //* Добавить слушатели события
    // const deleteBtn = element.querySelector('.delete-btn');
    // deleteBtn.addEventListener('click', deleteProduct);

    // //* Добавить элемент в контейнер продуктов
    // productsWrapper.appendChild(element);

    //* Добавить в LocalStorage
    addToLocalStorage(id, currProduct);

    //* Отобразить уведомление
    showNotification();

    //* Вызов функции сброса
    resetOptions();
  }
};

//* Создание элемента
const createProducts = (id, name) =>{
  const element = document.createElement('div');
  element.setAttribute('id', id);
  element.classList.add('product');
  element.innerHTML = `
    <h5 class="product-name" >${currProduct}</h5>
      <div class="product-action">
        <button class="delete-btn">Удалить</button>
        <button class="edit-btn">Редактировать</button>
      </div>
    `;
  //* Добавить слушатели события
  const deleteBtn = element.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', deleteProduct);

  //* Добавить элемент в контейнер продуктов
  productsWrapper.appendChild(element);

}

//* Уведомление при создании или удалении
const showNotification = () => {
  notification.style.display = 'block';
  setTimeout(() => {
    notification.style.display = 'none';
  }, 3000);
};

//*Добавление в LocalStorage
const addToLocalStorage = (id, name) => {
  const products = localStorage.getItem('products')
    ? JSON.parse(localStorage.getItem('products'))
    : [];
  const newProduct = { id, name };
  products.push(newProduct);
  localStorage.setItem('products', JSON.stringify(products));
};

//* Очистка полей
const resetOptions = () => {
  //* Очистка поля ввода
  productName.value = '';
};

//* Удаление продукта
const deleteProduct = () => {};

//* Слушаем события сабмит у addForm
addForm.addEventListener('submit', addProduct);

/*
<div class="product">
      <h5 class="product-name">Название продукта</h5>
      <div class="product-action">
        <button class="delete-btn">Удалить</button>
        <button class="edit-btn">Редактировать</button>
      </div>
    </div>

    */
