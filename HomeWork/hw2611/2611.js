// необходимо реализовать страницу, которая получает данные о товаре и выводит информационные карточки с товарами.

// В нижней части страницы должен быть расчет общей суммы.
// Результат должен выглядеть приблизительно как на макете https://www.figma.com/file/wRonUTYoOVL3ii4meCtdzR/Untitled?node-id=1%3A2&t=5i8ANTCkEpFzMpoi-0

const formProduct = document.querySelector('.form-product');
const sumPriceContainer = document.querySelector('.sum-price');

const products = [];

const cardsProductContainer = () => {
  const cardContainer = document.querySelector('.cards-container');
  cardContainer.innerText = '';

  products.forEach(({ title, price, count }) => {
    const cardProduct = document.createElement('div');
    const cardTitle = document.createElement('p');
    const cardPrice = document.createElement('p');
    const cardCount = document.createElement('p');

    const sumCardPrice = price * count;

    cardTitle.innerText = title;
    cardPrice.innerText = price;
    cardCount.innerText = `${price} x ${count} = ${sumCardPrice}`;

    cardProduct.classList.add('card');
    cardTitle.classList.add('card-title');

    cardProduct.append(cardTitle, cardPrice, cardCount);
    cardContainer.append(cardProduct);
  });
};

const cardRerender = () => {
  sumPriceContainer.innerText = '';

  const sumPrice = products.reduce((prev1, { price, count }) => prev1 + price * count, 0);
  const sumCount = products.reduce((prev2, { count }) => prev2 + +count, 0);

  const sumPriceElem = document.createElement('p');
  const sumCountElem = document.createElement('p');

  sumPriceElem.innerText = `Oбщая стоимость: ${sumPrice}`;
  sumCountElem.innerText = `Общее количество: ${sumCount}`;
  sumPriceContainer.append(sumPriceElem, sumCountElem);
};

formProduct.addEventListener('submit', event => {
  event.preventDefault();
  const { title, price, count } = event.target;

  products.push({
    title: title.value,
    price: price.value,
    count: count.value,
  });

  title.value = '';
  price.value = '';
  count.value = '';

  // тут необходимо сделать, чтобы курсор в форме переходил на первое поле
  // т.е. типа products.title = active/autofocus
  title.classList.add('autofocus');

  cardsProductContainer();
  cardRerender();
});
