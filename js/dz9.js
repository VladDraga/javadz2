// Задача 1

function logItems(array) {
    let result = [];
    for (let i = 0; i < array.length; i += 1){
        result.push(i + 1 + "-" + array[i]);
    }
    return result
    
}
console.log(logItems(['Mango', 'Poly', 'Ajax']));




// Задача 2

function calculateEngravingPrice(message, pricePerWord) {
    const newmes = message.split(" ");
    const mesLenght = newmes.length;
    
    return mesLenght * pricePerWord
    
}
console.log(calculateEngravingPrice("Lorem ipsum dolor sit amet consectetur adipisicing elit.", 200));




// Задача 3

function findLongestWord(string) {
    const newString = string.split(" ");
    let max = newString[0];
    for (let i = 0; i <= newString.length; i += 1){
        if (max < newString[i]) {
            max = newString[i]
        }
    }
    
    return max
}
console.log(findLongestWord("I dont understand this theme"));




// Задача 4

const formatString = function (string) { 
    let message = "";
    if (string.lenth <= 40) {
        message = string
    } else {
        message = `${string.slice(0, 40)}...`
    }
    return message
}
console.log(formatString("vadaytdgavdaygtwdjvawudgjvauywdjbaduwjahvdauwjdayughbdwauydhawdjha"));




// Задача 5 

function checkForSpam(message) {
    const updateMessage = message.toLowerCase();
    if (updateMessage.includes("spam") || updateMessage.includes("sale")) {
        return true
        
    } else {
        return false
        
    }
    
}
console.log(checkForSpam("Lorem ipsum dolor sit spam amet consectetur adipisicing elit."));



// Задача 6

let input;
const numbers = [];
while (true) {
    input = prompt("Введіть число");
    if (input === null) {
        alert("Ви вийшли");
        break;
    }
    if (isNaN(input)) {
        alert("Було введено не число, попробуйте ще раз");
        continue;
    }

    input = Number(input);
    numbers.push(input);

}
console.log(numbers);
if (numbers.length > 0) {
    let total = 0;
    for (let num of numbers){
        console.log(num);
        total += num;
    }
    console.log(`Загальна сума чисел дорівнює ${total}`);
    
}