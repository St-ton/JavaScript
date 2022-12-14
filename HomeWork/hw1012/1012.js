// First level: Необходимо доработать прошлое задание и реализовать сохранение карточек в localStorage.
// Старое задание:
// Необходимо реализовать страницу, которая получает данные о товаре и выводит информационные карточки с товарами.
// В нижней части страницы должен быть расчет общей суммы.
// Результат должен выглядеть приблизительно как на макете https://www.figma.com/file/wRonUTYoOVL3ii4meCtdzR/Untitled?node-id=1%3A2&t=5i8ANTCkEpFzMpoi-0

const cardsContainer = document.querySelector('.cards-container'); //контейнер под карточки товаров
const formProduct = document.querySelector('.form-product'); //форма добавления карточек товаров
const infoContainer = document.querySelector('.info');

const write = productsArr => localStorage.setItem('productsCards', JSON.stringify(productsArr)); //запись в локалсторидж
const read = () => JSON.parse(localStorage.getItem('productsCards')) ?? []; //чтение из локал сторадж или создание пустого массива

formProduct.addEventListener('submit', event => {
  event.preventDefault();
  const cardId = new Date().getTime().toString();
  const cardTitle = event.target.cardTitle.value.trim();
  const cardPrice = event.target.cardPrice.value;
  const cardCount = event.target.cardCount.value;
  // const { cardTitle, cardPrice, cardCount } = event.target; // деструктиризация
  if (cardTitle != '' && cardPrice != 0 && cardCount != 0) {
    write([...read(), { cardTitle, cardPrice, cardCount, cardId }]); //без деструктиризации
    // write([...read(), { cardTitle.value, cardPrice.value, cardCount.value, cardId }]); // если делали выше деструктиризацию
  } else {
    alert('Все поля должны быть заполнены и не нулевые');
  }

  event.target.cardTitle.value = '';
  event.target.cardPrice.value = '';
  event.target.cardCount.value = '';

  cardRerender();
});

const cardRerender = () => {
  cardsContainer.innerText = ''; //очищаем контейнер с карточками
  infoContainer.innerText = ''; //очищаем инфо-контейнер

  if (read().length === 0) {
    const noCard = document.createElement('p');
    noCard.innerText = 'Товаров нет';
    noCard.classList.add('no-card');
    infoContainer.append(noCard);
  } else {
    read().forEach(({ cardTitle, cardPrice, cardCount, cardId }) => {
      const newCard = createCardProduct(cardTitle, cardPrice, cardCount, cardId);
      cardsContainer.append(newCard);
    });

    infoContainer.innerText = '';

    const sumPrice = read().reduce(
      (prev1, { cardPrice, cardCount }) => prev1 + cardPrice * cardCount,
      0
    );
    const sumCount = read().reduce((prev2, { cardCount }) => prev2 + +cardCount, 0);
    const sumPriceElem = document.createElement('p');
    const sumCountElem = document.createElement('p');

    sumPriceElem.innerText = `Oбщая стоимость: ${sumPrice}`;
    sumCountElem.innerText = `Общее количество: ${sumCount}`;
    infoContainer.append(sumPriceElem, sumCountElem);
  }
};

const createCardProduct = (title, price, count, id) => {
  const cardProduct = document.createElement('div');
  const cardTitle = document.createElement('p');
  const cardPrice = document.createElement('p');
  const cardCount = document.createElement('p');
  const cardButton = document.createElement('button');

  const sumCardPrice = price * count;

  cardTitle.innerText = title;
  cardPrice.innerText = price;
  cardCount.innerText = `${price} x ${count} = ${sumCardPrice}`;
  cardButton.innerText = 'Удалить';

  cardProduct.classList.add('card');
  cardTitle.classList.add('card-title');

  cardProduct.append(cardTitle, cardPrice, cardCount, cardButton);

  cardButton.addEventListener('click', () => deleteCard(id));
  return cardProduct;
};

const deleteCard = id => {
  const newProduct = read().filter(element => element.cardId !== id);
  write(newProduct);
  cardRerender();
};

cardRerender();
