//for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//while loop
let j = 0;
while (j < 7) {
    console.log(j);
    j++;
}

//dowhile
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);

//for..in
const person = { name: 'John', age: 30, gender: 'male' };
for (let key in person) {
    console.log(key + ': ' + person[key]);
}
//for..of
const numbers = [1, 2, 3, 4, 5];
for (let number of numbers) {
    console.log(number);
}

//break,continue
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}
