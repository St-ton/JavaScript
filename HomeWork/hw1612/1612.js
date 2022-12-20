//todo  Написать страницу, в которой реализована форма с одним полем ввода (id). При отправке формы должен происходить асинхронный запрос на сервер. На основе полученных данных необходимо отобразить информацию о товаре. ссылка для запросов https://fakestoreapi.com/products/1 (последний параметр - id продукта).
//todo Дизайн на ваше усмотрение, но он должен быть.

const products = document.querySelector('.products'); //сюда будем выводить карточки
const addForm = document.querySelector('.add-form'); //форма ввода id
products.classList.remove('products'); //очищаем стили у дива, куда вывдим карточки
const idArray = []; // будем хранить id, чтоб не выводить дубли карточек

addForm.addEventListener('submit', event => {
  event.preventDefault(); // по сабмиту не делаем запрос на сервер
  const idProduct = event.target.idProduct.value;
  event.target.idProduct.value = ''; //очищаем форму ввода
  getProduct(idProduct); //
});

const getProduct = idProduct => {
  fetch(`https://fakestoreapi.com/products/${idProduct}`)
    .then(resp => resp.json())
    .then(({ id, title, price, description, category, image, rating }) => {
      createProductCard(id, title, price, description, category, image, rating);
    });
};

const createProductCard = (id, title, price, description, category, img, rating) => {
  const container = document.createElement('div');
  const titleElem = document.createElement('p');
  const priceElem = document.createElement('p');
  const descriptionElem = document.createElement('p');
  const categoryElem = document.createElement('p');
  const imgElem = document.createElement('img');
  const ratingElem = document.createElement('p');
  const idElem = document.createElement('p');

  titleElem.innerText = `Title: ${title}`;
  priceElem.innerText = `Price: ${price}`;
  descriptionElem.innerText = `Description: ${description}`;
  categoryElem.innerText = `Category: ${category}`;
  ratingElem.innerText = `Rating: rate: ${rating.rate}, count: ${rating.count}`;
  idElem.innerText = `ID Product: ${id}`;

  imgElem.setAttribute('src', img);
  imgElem.setAttribute('alt', `${titleElem}`);

  container.classList.add('product-card');
  if (products.length != 0) {
    // добавляем класс стиля, только если запросили карточку
    products.classList.add('products');
  }
  titleElem.classList.add('product-title');
  priceElem.classList.add('product-price');
  imgElem.classList.add('product-img');

  if (idArray.includes(id)) {
    // дубли карточке не выводим на страницу
    alert('Такой товар уже выведен на странице');
  } else {
    idArray.push(id); //собирам массив из опубликованных карточек

    container.append(
      titleElem,
      priceElem,
      descriptionElem,
      categoryElem,
      imgElem,
      ratingElem,
      idElem
    );
    products.append(container);
  }
};
