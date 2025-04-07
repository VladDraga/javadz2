// Задача 1
const massiv = [1, 2, 3];
massiv[1] = 10; 
console.log(massiv);

// Задача 2
const massivName = ["Vlad", "Lev", "Nastya"]
massivName[3] = "Юрій"
console.log(massivName);
 
// Задача 3
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
for (let i = 0; i < numbers.length; i += 1){
    sum += numbers[i];
}
console.log(sum);

// Задача 4
const massivNumbers = [1, 2, 3, 4, 5];
for (let i = 0; i <= massivNumbers.length -1; i += 1){
    console.log(massivNumbers[i]);
}

// Задача 5
const Names = ["Vlad", "Lev", "Nastya", "Yura", "Nazar"];
for (let i = 0; i < Names.length; i += 1){
    if (Names[i].length >= 5) {
        console.log(Names[i]);
    }
}

// Задача 6
const massiv2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let max = massiv2[0];
for (let i = 0; i <= massiv2.length - 1; i += 1) {
    if (max < massiv2[i]) {
        max = massiv2[i]
    } 
}
console.log(max);

// Задача 7
const parni = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i <= parni.length; i += 1){
    if (parni[i] % 2 === 0) {
        console.log(parni[i]);
        
    }
}