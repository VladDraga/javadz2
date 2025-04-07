// Задача 1

const first = prompt("Введіть:");
const second = prompt("Введіть:");
if (first.length > 0 & second.length > 0) {
    console.log("Обидва поля заповнені");
} else {
    console.log("Не всі поля заповнені");
    
}

//////////////////////////////////

// Задача 2

const firstNumber = Number(prompt("Введіть число: "));
const secondNumber = Number(prompt("Введіть число: "));
if (firstNumber + secondNumber > 10) {
    console.log("Сума більша за 10");
} else {
    console.log("Сума менша або дорівнює 10.");
    
}

// Задача 3

const love = prompt("Введіть текст на англійській мові.");
const search = "JavaScript";
if (love.includes(search)) {
    console.log("Текст містить слово JavaScript");

} else {
    console.log( "Текст не містить слово JavaScript");
    
}

// Задача 4

const number = Number(prompt("Введіть число:"));
if (number >= 10 & number <= 20) {
    console.log("Число входить в діапазон від 10 до 20");
    
} else console.log("Число не входить в діапазон від 10 до 20");

// Задача 5

const name = prompt("Введіть ім'я");
const email = prompt("Введіть email");
const password =(prompt("Введіть пароль з цифр (не менше 6 цифр"));
if (name.length >= 3 & email.includes("@") &  email.includes(".")  & password.length >= 6) {
    console.log("Перенаправлення на іншу сторінку");
    
} else {
    console.log("Помилка: неправильне заповнення");
    
}



    