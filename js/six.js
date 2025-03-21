// Задача 1

let i = 0;
while (i <= 10) {
    console.log(i);
    i += 1
}


// Задача 2

for (let i = 0; i <= 20; i += 1) {
     if (i % 2 !== 0) {
         continue;
    }
    console.log(i);
 }

// Задача 3

let num = 7;
for (let i = 0; i <= 10; i += 1) {
    console.log(`${num} * ${i} = ${num * i}`);
}

// Задача 4

const number = Number(prompt("Введіть любе число до 10"));
for (let i = 0; i <= 10 ; i += 1){
    if (i >= number) {
        break;
    }
    console.log(i);
}

// Задача 5

let i = 0;
while (i <= 20) {
    console.log(i);
    i += 1
      if (i % 3 === 0) {
          continue;
     }
}