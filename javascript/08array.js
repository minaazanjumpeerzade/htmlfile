let fruits = ['apple', 'banana'];
fruits.push('orange');
console.log(fruits);

let fruits1 = ['apple', 'banana', 'orange'];
let lastFruit1 = fruits1.pop();
console.log(lastFruit1);
console.log(fruits1); 


let fruits3 = ['apple', 'banana', 'orange'];
let firstFruit3 = fruits3.shift();
console.log(firstFruit3); 
console.log(fruits3); 

let fruits4 = ['banana', 'orange'];
fruits4.unshift('apple');
console.log(fruits4);

let fruits5 = ['apple', 'banana'];
let moreFruits5 = fruits5.concat('orange', 'kiwi');
console.log(moreFruits5); 

let fruits6 = ['apple', 'banana', 'orange', 'kiwi'];
let citrus = fruits6.slice(2);
console.log(citrus); // Output: ['orange', 'kiwi']
