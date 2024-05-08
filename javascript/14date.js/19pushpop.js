let fruits = ["apple", "banana", "orange", "grape", "kiwi"];

// Remove the last element
let lastFruit = fruits.pop();
console.log("Last fruit removed:", lastFruit);
console.log("Remaining fruits after pop:", fruits);

// Remove the first element
let firstFruit = fruits.shift();
console.log("First fruit removed:", firstFruit);
console.log("Remaining fruits after shift:", fruits);

// Add new fruits to the beginning
let newLength = fruits.unshift("mango", "pineapple");
console.log("New length after unshift:", newLength);
console.log("Fruits after unshift:", fruits);

// Find a fruit that contains the letter 'g'
let foundFruit = fruits.find(fruit => fruit.includes("g"));
console.log("Fruit found with 'g':", foundFruit);

// Filter fruits that contain the letter 'a'
let filteredFruits = fruits.filter(fruit => fruit.includes("a"));
console.log("Fruits containing 'a':", filteredFruits);
