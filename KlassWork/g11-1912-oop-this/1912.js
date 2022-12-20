// class Dog {
//   constructor(name) {
//     this.name = name;
//   }

//   hi(name) {
//     console.log('Hi ' + this.name);
//   }
// }
// const dog_1 = new Dog('бобик');
// const dog_2 = new Dog('шарик');
// dog_1.hi();
// dog_2.hi();

//todo Создать класс User со свойствами name, username, age.

class User {
  static _roles = ['admin', 'manager', 'root', 'guest'];

  static add_role(new_role) {
    this._roles.push(new_role); // this - это ссылка на класс
  }

  constructor(name, username, age, role = 'guest') {
    this.name = name; // this - это ссылка на объект, с которым взаимодействуем
    this.username = username;
    this.age = age;
    this.changeRole(role);
  }
  hi() {
    const { name, username, role } = this;
    console.log(`Hi ${name} ${username} ${role}`);
  }

  // проверка переданной роли
  changeRole(role) {
    if (User._roles.includes(role)) {
      this.role = role;
    } else {
      this.role = null;
    }
  }
}
//todo Добавить метод b_day которое увеличивает возраст на единицу.

// b_day() {
//   this.age += 1;
//   console.log(this.age);
// }

// todo Добавить метод change_name, который получает в качестве аргумента новое имя пользователя и меняет его.

//   change_name(new_name) {
//     this.name = new_name;
//     console.log(this);
//   }
// }

const user1 = new User('Stanislav', 'Sten', 49, 'admin');
const user2 = new User('Ivan', 'Vano', 25);
user1.hi();
user2.hi();

// user1.b_day();
// user2.b_day();

// user1.change_name('Petr');

// todo Создать класс Product со свойствами title, price, count. И методами change_price и sale.

// class Product {
//   constructor(title, price, count, income = 0) {
//     this.title = title;
//     this.price = price;
//     this.count = count;
//     this.income = income;
//   }

// todo доработать метод change_price таким образом, чтобы цена менялась только в случае, если указанная новая цена больше 0

// change_price(new_price) {
//   if (new_price > 0) {
//     this.price = new_price;
//   }
// }
// todo доработать метод sale таким образом. Если при вызову count равен нулю, count не уменьшать и вывести в консль "товар закончился"

// sale() {
//   if (this.count === 0) {
//     console.log('Товар закончился');
//   } else {
//     this.income += this.price;
//     this.count--;
//   }
// }
// todo добавить свойство income, которая хранит число прибыли с продаж. при каждой успешной продаже свойства income должно увеличиваться на цену товара

// const bike = new Product('велосипед', 45000, 7);
// console.log(bike);
// bike.sale(); //уменьшили товар на 1
// bike.sale(); //уменьшили товар на 1
// console.log(bike);

// bike.change_price(50000);
