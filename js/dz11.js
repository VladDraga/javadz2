// 1.Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. Використайте cofirm() щоб поповнити рахунок або отримати готівку та prompt() щоб дізнатися сумму. Після проведення операції виводити повідомлення про залишок на рахунку.


const bankAccount = {
    ownerName: "Vlad",
    accountNumber: "01-11-11-11-11",
    balance: 1111,
    deposit() {
        const requestKnowledge = confirm(`${this.ownerName}, Бажаєте поповнити баланс?`);
        const fundsAdmin = Number(prompt("Введіть суму на яку бажаєте поповнити"));
        if (!isNaN(fundsAdmin) && fundsAdmin > 0) {
            this.balance += fundsAdmin
            alert(`${this.ownerName}, на вашому рахунку ${this.balance}$`)
        } else {
            alert(`${this.ownerName} ви ввели не вірні данні`)
        }
    },
    withdraw() {
        const requestKnowledg = confirm(`${this.ownerName}, чи бажаєте отримати готівку`)
        const fundAdmin = Number(prompt("Введіть суму, яку бажаєте отримати"));
          if (!isNaN(fundAdmin) && fundAdmin > 0) {
            this.balance -= fundAdmin
            alert(`${this.ownerName} на вашому рахунку ${this.balance}$`)
        } else {
            alert(`${this.ownerName} ви ввели не вірні данні`)
        }
    }
}
bankAccount.deposit();
bankAccount.withdraw();


// 2.Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія. Температуру потрібно отримати з prompt(). Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки


const weather = {
    temperature: Number(prompt("Введіть температуру: ")),
    humidity: "10%",
    windSpeed: "3",
    thermometer() {
        if (!isNaN(this.temperature) && parseInt(this.temperature) < 0) {
            alert("Температура нижче 0 градусів Цельсія")
        } else if(!isNaN(this.temperature) && parseInt(this.temperature) > 0) {
            alert("Температура вище 0 градусів Цельсія")
        } else {
            alert('Ви ввели не вірно.')
        }
    }
}
weather.thermometer();



// 3.Створіть об’єкт "user", який буде мати властивості "name", "email", "password". Додайте метод "login", який буде перевіряти правильність введеного email та password.


const user = {
  name: "Vlad",
  email: "draga260806@gmail.com",
  password: "qwerty",
  login() {
    const LogEmail = prompt(`${this.name}, введіть електронну адресу!`);
    const LogPassword = prompt(`${this.name}, введіть пароль!`);
    if (LogEmail === this.email && LogPassword === this.password) {
      alert(`Вітаю ${this.name}, ви увійшли у систему`);
    } else {
      alert("Ви ввели невірні данні");
    }
  },
};
user.login();


// 4.Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче. Вивести значення властивостей в консоль.


const movie = {
  title: "Interstellar",
  director: "Крістофер Нолан",
  year: 2006,
  rating: 8.2,
  FilmRait(num) {
    if ((this.rating) > num) {
      console.log(
        `Рейтинг фільму ${this.title} вище ${num} і дорівнює = ${this.rating}`
      );
    } else {
      console.log(`Рейтинг фільму ${this.title} нище ${num}`);
    }
  },
};
movie.FilmRait(8);