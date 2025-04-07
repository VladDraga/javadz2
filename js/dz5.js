// Задача 1

const coffee = "кава";
const tea = "чай";
const juice = "сік";

let result = prompt(`Виберіть зі списку: ${coffee} ${tea} ${juice}`);

switch (result) {
  case coffee:
    alert(`Ви обрали ${coffee}`);
    break;
  case tea:
    alert(`Ви обрали ${tea}`);
    break;
  case juice:
    alert(`Ви обрали ${juice}`);
    break;
  default:
    alert("Помилка");
}

// Задача 2

let day = prompt("Введіть любий день тижня").toLowerCase();
const monday = "понеділок";
const tuesday = "вівторок";
const wednesday = "середа";
const thursday = "четвер";
const friday = "п'ятниця";
const saturday = "субота";
const sunday = "неділя";
switch (day) {
  case monday:
  case tuesday:
  case wednesday:
  case thursday:
  case friday:
    alert("Це робочий день");
    break;
  case saturday:
  case sunday:
    alert("Це вихідний день");
    break;
  default:
    alert("Помилка");
    break;
 }

// Задача 3

let month = prompt("Введіть номер місяця (1-12):");
let season;
switch (month) {
  case "12":
  case "1":
  case "2":
   season = alert("Пора року: Зима");
    break;
  case "3":
  case "4":
  case "5":
    season = alert("Пора року: Весна");
    break;
  case "6":
  case "7":
  case "8":
    season = alert("Пора року: Літо");
    break;
  case "9":
  case "10":
  case "11":
    season = alert("Пора року: Осінь");
    break;
  default:
    season = alert("Помилка");
    break;
}


// Задача 4

const red = "червоний";
const green = "зелений";
const yellow = "жовтий";
const color = prompt("Виберіть колір (червоний, зелений, жовтий)").toLowerCase();
switch (color) {
  case red:
    alert("стоп");
    break;
  case green:
    alert("йти");
    break;
  case yellow:
    alert("чекати");
    break;
  default:
    alert("Помилка")
    break;
}

// Задача 5

const firstNumber = parseFloat(prompt("Введіть перше число:").trim());
const operator = prompt("Введіть оператор (+, -, *, /):").trim();
const secondNumber = parseFloat(prompt("Введіть інше число:").trim());
let result1;
switch (true) {
  case (operator === "+"):
    result1 = firstNumber + secondNumber
    break;
case (operator === "-"):
  result1 = firstNumber - secondNumber
  break;
  case (operator === "*"):
result1 = firstNumber * secondNumber
break;
case (operator === "/"):
  result1 = (secondNumber === 0) ? "На нуль ділити не можна!" : firstNumber / secondNumber;
  break;
  default:
    result1 = "Помилка"
    break;
}
result = alert(result1);