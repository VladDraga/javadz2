// Задача 1

const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
let string = '';
string = friends.join(" , ");
console.log(string);

// Задача 2

const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
  ];
cards.splice(2, 1,);
cards.push("Карточка-6");
cards.splice(2, 1, "Карточка-4(нова)")
console.log(cards);