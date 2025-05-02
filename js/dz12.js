// Завдання 1

// Напиши скрипт, який, для об'єкта user, послідовно:
// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of

const user1 = {
  name: "Vlad",
  age: 18,
  hobby: "chess",
  premium: true,
}
user1.mood = 'happy';
user1.hobby = "skydiving";
user1.premium = false;
const key = Object.keys(user1);
for (let keys of key) {
  console.log(`${keys}: ${user1[keys]}`);
  
}

// Завдання 2

// Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.

const user = {
    name: "Vlad",
    age: 18,
    city: "Kiyv",
    height: 180,
}

const countProps = function (obj) {
    const key = Object.keys(obj)
    return key.length
    
}

console.log(countProps(user));


// Завдання 3

// Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".


const work = {
    vlad: 20,
    mukola: 50,
    lev: 100,
    nazar: 110,
    vlad2: 54,
    david: 70,
}

const findBestEmployee = function (employees) {
    let mostValue = '';
    let maxValue = 0;
    for (const employ in employees) {
        // console.log(employ); // ім'я
        // console.log(employees[employ]); // число
        if (employees[employ] > maxValue) {
            maxValue = employees[employ]
            mostValue = employ;
        }
    }
    return `${mostValue}: ${maxValue}`;
    

    
}
console.log(findBestEmployee(work));


// Завдання 4

// Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".

const salary = {
    vlad: 2000,
    mukola: 5000,
    lev: 10000,
    nazar: 11000,
    vlad2: 5400,
    david: 7000,
}

const countTotalSalary = function (employees) {
    // console.log(employees);
    let sum = 0;
    for (const sal in employees) {
        sum += employees[sal];
    }
   return `Загальна сума зарплати дорівнює ${sum}$`
    
    
}
console.log(countTotalSalary(salary));


// Завдання 5

// Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. Повертає масив значень певної властивості prop з кожного об'єкта в масиві.

const getAllPropValues = function (arr, prop) {
    // console.log(arr);
    // console.log(prop);
    let result = [];
    for (const item of arr) {
        // console.log(item);
        // console.log(item[prop]);
        result.push(item[prop]);
    }
    return result
}

const massiv1Product = [
    {
        name: "apple",
        price: 124,
        count: 5,
        weight: "2kg",
    },
    {
        name: "banana",
        price: 150,
        count: 7,
        weight: "4kg",
    },
    {
        name: "strawbery",
        price: 240,
        count: 37,
        weight: "3kg",
    }
]

console.log(getAllPropValues(massiv1Product, "name"));
console.log(getAllPropValues(massiv1Product, "price"));
console.log(getAllPropValues(massiv1Product, "count"));
console.log(getAllPropValues(massiv1Product, "weight"));



// Завдання 6

// Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я продукту (значення властивості name). Повертає загальну вартість продукту (ціна * кількість).

// Викличи функції для перевірки працездатності твоєї реалізації.

const calculateTotalPrice = function (allProdcuts, productName) {
    // console.log(allProdcuts);
    // console.log(productName);
    for (const product of allProdcuts) {
        // console.log(product.name);
        if (product.name === productName) {
            const result = product.price * product.count;
            return `Загальна сума ${product.name} = ${result}`
        }
        
    }
    
}

const massivProduct = [
    {
        name: "apple",
        price: 124,
        count: 5,
        weight: "2kg",
    },
    {
        name: "banana",
        price: 150,
        count: 7,
        weight: "4kg",
    },
    {
        name: "strawbery",
        price: 240,
        count: 37,
        weight: "3kg",
    }
]
console.log(calculateTotalPrice(massivProduct, "apple"));
console.log(calculateTotalPrice(massivProduct, "banana"));
console.log(calculateTotalPrice(massivProduct, "strawbery"));