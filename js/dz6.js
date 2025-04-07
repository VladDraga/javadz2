// Задача 1

let i1 = 0;
while (i1 <= 10) {
    console.log(i1);
    i1 += 1
}


// Задача 2

for (let i2 = 0; i2 <= 20; i2 += 1) {
     if (i2 % 2 !== 0) {
         continue;
    }
    console.log(i2);
 }

// Задача 3

let num = 7;
for (let i3 = 0; i3 <= 10; i3 += 1) {
    console.log(`${num} * ${i3} = ${num * i3}`);
}

// Задача 4

const number = Number(prompt("Введіть любе число до 10"));
for (let i4 = 0; i4 <= 10 ; i4 += 1){
    if (i4 >= number) {
        break;
    }
    console.log(i4);
}

// Задача 5

let i5 = 0;
while (i5 <= 20) {
    console.log(i5);
    i5 += 1
      if (i5 % 3 === 0) {
          continue;
     }
}