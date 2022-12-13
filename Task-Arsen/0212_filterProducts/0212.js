const laptops = [
  {
    id: 1,
    name: 'Acer Paradise',
    img: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqQX?ver=1f00&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true',
    price: 20000,
    category: 'laptop',
  },
  {
    id: 2,
    name: 'HP Pavillon',
    img: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqQX?ver=1f00&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true',
    price: 25000,
    category: 'laptop',
  },
  {
    id: 3,
    name: 'Samsung X20',
    img: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqQX?ver=1f00&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true',
    price: 40000,
    category: 'monoblock',
  },
  {
    id: 4,
    name: 'Iphone 13Pro',
    img: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqQX?ver=1f00&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true',
    price: 70000,
    category: 'smartphone',
  },
  {
    id: 5,
    name: 'Sony TI201',
    img: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqQX?ver=1f00&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true',
    price: 55000,
    category: 'smartphone',
  },
  {
    id: 6,
    name: 'Samsung',
    img: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqQX?ver=1f00&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true',
    price: 80000,
    category: 'computer',
  },
  {
    id: 7,
    name: 'Acer Computer M500',
    img: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqQX?ver=1f00&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true',
    price: 75000,
    category: 'computer',
  },
];

/*
<div class="product">
    <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqQX?ver=1f00&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true" 
        alt="" class="product-img">
    <h5 class="product-name">HP Dragon</h5>
    <p class="product-price">15000</p>
</div>
*/

const productsContainer = document.querySelector('.products');
const searchInput = document.querySelector('.search-input');
const categories = document.querySelectorAll('.category');

const showProducts = products => {
  productsContainer.innerHTML = products
    .map(
      product => `
        <div class="product">
            <img 
                src="${product.img}" 
                alt="" 
                class="product-img">
            <h5 class="product-name">${product.name}</h5>
            <p class="product-price">${product.price}</p>
        </div>
        `
    )
    .join('');
};

// Вызов при первой загрузке приложения
showProducts(laptops);

// Функция поиска по введенному значению
// searchInput.addEventListener('input', e => {
//  console.log(e.target.value);
//});

//* Пример фильтрации массива по нескольким символам
// const arr = [
//   {
//     name: 'Arsen',
//   },

//   {
//     name: 'Ivan',
//   },
//   {
//     name: 'Anna',
//   },
// ];
// const str = 'a';
// const filteredNames = arr.filter(element => element.name.includes(str));
// console.log(filteredNames);

//todo Отфильтровать список элементов в html по введенному значению Используя метод фильтр проверяем содержится ли введенная строка внутри имени объекта массива laptops.
// 1. Используя методы filter, includes отфильтровать список продуктов по введенному в input значению
// 2. Вызвать функцию showProducts с отфильтрованными продуктами
// 3. Если в поле ничего не ввели, то просто вызывать showProducts со всеми продуктами

searchInput.addEventListener('input', e => {
  const valueProducts = e.target.value.trim;
  const filteredByValueProducts = laptops.filter(element =>
    element.name.toLowerCase().includes(valueProducts.toLowerCase())
  );
  showProducts(filteredByValueProducts);
});

//* Функция фильтрации по категориям

categories.forEach(category => {
  category.addEventListener('click', e => {
    const selectedCategory = e.target.textContent;

    //* С оператором if

    if (selectedCategory === 'Все') {
      showProducts(laptops);
    } else {
      const filteredByCategoryProducts = laptops.filter(laptop => {
        return laptop.category === selectedCategory.toLowerCase();
      });
      showProducts(filteredByCategoryProducts);
    }

    // //* С тернарным оператором
    // const filteredByCategoryProducts = laptops.filter(
    //   laptop => laptop.category === selectedCategory.toLowerCase()
    // );

    // selectedCategory === 'Все' ? showProducts(laptops) : showProducts(filteredByCategoryProducts);
  });
});
