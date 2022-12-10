const addForm = document.querySelector('.add_form');
const products = document.querySelector('.products');
let data = [
  {
    id: 1,
    title: 'Велосипед',
    price: 45000,
  },
  {
    id: 2,
    title: 'Ролики',
    price: 25000,
  },
  {
    id: 3,
    title: 'Самокат',
    price: 15000,
  },
];

addForm.addEventListener('submit', event => {
  event.preventDefault();
  const title = addForm.title.value;
  const price = addForm.price.value;
  const id = Date.now();
  // генерация случайного числа (время в милисекундах)
  if (title.length > 1) {
    data.push({ id, title, price });
  }
  addForm.title.value = '';
  addForm.price.value = '';
  rerender();
});

// создать функцию, которая возвращает случайный цвет
function getRandomColor() {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

// функция удаления карточки
function deleteProduct(id) {
  data = data.filter(product => product.id !== id);
  rerender();
}

//  функция создания карточки товара
function createProductCard(id, title, price) {
  const container = document.createElement('div');
  const title_p = document.createElement('p');
  const price_p = document.createElement('p');
  const delButton = document.createElement('button');

  delButton.innerText = 'Удалить';
  delButton.addEventListener('click', () => deleteProduct(id));

  container.addEventListener('dblclick', () => {
    container.style.backgroundColor = getRandomColor();
  });

  title_p.innerText = `Название товара: ${title}`;
  price_p.innerText = `Цена: ${price}`;

  container.classList.add('product');

  container.append(title_p, price_p, delButton);
  return container;
}

// функция записи в массив и вывод на страницу с очищением
function rerender() {
  products.innerText = '';

  if (data.length === 0) {
    const info = document.createElement('p');
    info.innerText = 'Товаров нет';
    products.append(info);
  } else {
    data.forEach(({ id, title, price }) => {
      const container = createProductCard(id, title, price);
      products.append(container);
    });
  }
}

// запускам функцию при загрузке страницы, чтобы вывести на странице Нет товаров
rerender();
