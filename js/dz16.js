// Завдання 1
// Напиши функцію-конструктор Account, яка створює об'єкт з властивостями login і email. В prototype функції-конструктора добав метод getInfo(), який виводить в консоль значення полів login і email об'єкта який його викликав.

const Account = function ({ login, email }) {
    this.login = login,
    this.email = email
}

Account.prototype.getInfo = function () {
    console.log(`login: ${this.login}, email: ${this.email}`);
}

const mango1 = new Account({
 login: 'Mangozedog',
 email: 'mango@dog.woof',
});

mango1.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly1 = new Account({
 login: 'Poly',
 email: 'poly@mail.com',
});

poly1.getInfo(); // Login: Poly, Email: poly@mail.com
console.log(mango1);
console.log(poly1);


// Завдання 2
// Напиши клас User для створення користувача з наступними властивостями:
// name — рядок
// age — число
// followers — число
// Добав метод getInfo(), який, виводить рядок: User ${ім'я} is ${вік} years old and has ${кількість фоловерів} followers

class User {
  constructor({ name, age, followers }) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }

  getInfo() {
    console.log(
      `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
    );
  }
}
const mango2 = new User({
  name: "Mango",
  age: 10,
  followers: 10,
});

mango2.getInfo();

const poly2 = new User({
  name: "Poly",
  age: 23,
  followers: 109,
});

poly2.getInfo();

// Завдання 3
// Напиши клас Storage, який буде створювати об'єкти для управління складом товарів. При виклику буде отримувати один аргумент - початковий масив товарів, і записувати його у властивість items.
// Додай методи класу:
// getItems() — повертає масив поточних товарів
// addItem(item) — отримує новий товар і додає його до поточних
// removeItem(item) — отримує товар і, якщо він є, видаляє його з поточних

class Storage {
    constructor(items) {
      this.items = items;
    }
    getItems() {
      return this.items;
    }
    addItem(item) {
      this.items.push(item);
    }
    removeItem(item) {
      const index = this.items.indexOf(item);
      if (index !== -1) {
        this.items.splice(index, 1);
      }
    }
  }
  const storage = new Storage([
    'Залізо',
    'Золото',
    'Камінь',
    'Алмаз',
  ]);
  const items = storage.getItems();
  console.table(items);
  storage.addItem('Срібло');
  console.table(storage.items);
  storage.removeItem('Камінь');
  console.table(storage.items);
   


//   Завдання 4
//   Напиши клас StringBuilder. На вхід він отримує один параметр — рядок, який записує у властивість _value.
//   Додай класу наступний функціонал:
//   Геттер value — повертає поточне значення поля _value
//   Метод append(str) — отримує параметр str (рядок) і додає його в кінець _value
//   Метод prepend(str) — отримує параметр str (рядок) і додає його на початок _value
//   Метод pad(str) — отримує параметр str (рядок) і додає його на початок і в кінець _value
  
  class StringBuilder {
    constructor(initialValue) {
      this._value = initialValue;
    }
    get value() {
      return this._value;
    }
    append(str) {
      this._value += str;
    }
    prepend(str) {
      this._value = str + this._value;
    }
    pad(str) {
      this._value = str + this._value + str;
    }
  }
  const builder = new StringBuilder("-");
  builder.append("0");
  console.log(builder.value);
  builder.prepend(".");
  console.log(builder.value);
  builder.pad("-");
console.log(builder.value);
  

// Завдання 5

// Напиши клас Car із зазначеними властивостями і методами.
class Car {
  static getSpecs(car) {
    console.log(
      `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`
    );
  }

  constructor({ maxSpeed, price }) {
    this.speed = 0;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = false;
    this.distance = 0;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    this._price = value;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value) {
    if (this.speed + value <= this.maxSpeed) {
      this.speed += value;
    }
  }

  decelerate(value) {
    if (this.speed - value >= 0) {
      this.speed -= value;
    }
  }

  drive(hours) {
    if (this.isOn) {
      this.distance += hours * this.speed;
    }
  }
}
const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);
Car.getSpecs(mustang);
mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();
Car.getSpecs(mustang);
console.log(mustang.price); 
mustang.price = 4000;
console.log(mustang.price);