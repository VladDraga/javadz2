// 1. Створити розмітку з кнопкою та текстовим полем. За допомогою JavaScript отримати доступ до кнопки та текстового поля за їх ідентифікаторами та змінити текст на кнопці на значення текстового поля.
const titleEl = document.querySelector("p");
const buttonEl = document.querySelector("button");
titleEl.textContent = "Mykola";
buttonEl.textContent = "hello"
buttonEl.textContent = buttonEl.textContent.replace("hello", "Mykola")
titleEl.textContent = titleEl.textContent.replace("Mykola", "Hello");

// 2. Створити розмітку з заголовком та зображенням. За допомогою JavaScript отримати доступ до зображення та змінити значення атрибута "src" на шлях до іншого зображення.
const textEl = document.querySelector("h1");
const imgEl = document.querySelector("img");
textEl.textContent = "Спорт"
imgEl.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc7UPx7Bt_BslUzwhUcGUS0h6KCwb0fyfrJQ&s";
imgEl.width = '600'

// 3. Створити розмітку з посиланням та зображенням. За допомогою JavaScript отримати доступ до посилання та змінити значення атрибута "href" на нову URL-адресу. Також отримати доступ до зображення та додати новий атрибут "alt" з описом зображення.
const linkEl = document.querySelector("a");
const photoEl = document.querySelector(".photo");
linkEl.textContent = "facebook"
linkEl.href = "https://www.facebook.com/?locale=uk_UA";
photoEl.alt = "Voleyball"
console.log(photoEl);

// 4. Створити розмітку зі списком елементів. За допомогою JavaScript отримати доступ до першого елемента списку та змінити його вміст на новий текст.

const firstEl = document.querySelector("ul li p")
firstEl.textContent = firstEl.textContent.replace("text 1", "sportVoleyball")