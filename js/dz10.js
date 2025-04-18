// Створіть функцію processArray(array, callback), яка приймає масив та функцію-колбек. Викличте processArray з різними масивами та функціями-колбеками, щоб виконати наступні операції:
// 1 Порахувати суму всіх елементів масиву.
// 2 Знайти мінімальний елемент масиву.
// 3 Знайти максимальний елемент масиву.
// 4 Перепишіть колбек-функції на стрілки

const massiv = [10, 23, 123, 2, 43, 52, 12];

const processArray = function (array, callback) {
    return callback(array)
}

// 1

const sumMassiv = function (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i += 1) {
        sum += array[i];
    }
    return sum
}
console.log(processArray(massiv, sumMassiv));

// 2

const minElement = function (array) {
    let min = array[0];
    for (let i = 0; i < array.length; i += 1){
        if (min > array[i]){
            min = array[i]
        }
    }
        return min
}

console.log(processArray(massiv, minElement));

// 3

const maxElement = function (array) {
    let max = array[0];
    for (let i = 0; i < array.length; i += 1){
        if (max < array[i]){
            max = array[i]
        }
    }
        return max
}

console.log(processArray(massiv, maxElement));

// 4 =>

const newMasiv = [10, 23, 123, 2, 43, 52, 12];
const newProcessArray = (array, callback) => callback(array)
const newSum = function (arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i += 1){
        sum += arr[i]
    }
    return sum
}
const MinNum = (arr) => Math.min(...arr);
const MaxNum = (arr) => Math.max(...arr);
console.log(newProcessArray(newMasiv, newSum));
console.log(newProcessArray(newMasiv, MinNum));
console.log(newProcessArray(newMasiv, MaxNum));



//Створіть функцію operate(a, b, callback), яка приймає два числа та колбек для виконання операції над ними. Використайте її для виконання наступних операцій:
// 1 Додавання.
// 2 Віднімання.
// 3 Множення.
// 4 Ділення.
// 5 Перепишіть колбеки на стрілкові функції

const operation = function (callback, a, b) {
    return callback(a,b)
}

// 1

const fnAdd = function (a,b) {
    return `Результат додавання чисел ${a} + ${b} = ${a + b}`;
}

// 2

const fnMinus = function (a,b) {
    return `Результат віднімання чисел ${a} - ${b} = ${a - b}`;
}

// 3

const fnMultiply = function (a,b) {
    return `Результат множення чисел ${a} * ${b} = ${a * b}`;
}

// 4

const fnDivision = function (a,b) {
    return `Результат ділення чисел ${a} / ${b} = ${a / b}`;
}
console.log(operation(fnAdd, 2, 2));
console.log(operation(fnMinus, 2, 2));
console.log(operation(fnMultiply, 2, 2));
console.log(operation(fnDivision, 2, 2));

// 5 =>

const newOperation = (callback, a, b ) => callback(a, b);

console.log(newOperation(fnAdd, 2, 2));
console.log(newOperation(fnMinus, 2, 2));
console.log(newOperation(fnMultiply, 2, 2));
console.log(newOperation(fnDivision, 2, 2));


