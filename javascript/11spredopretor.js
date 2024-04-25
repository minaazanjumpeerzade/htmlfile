const numbers = [1, 2, 3];
console.log([...numbers]);

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log([...array1 , ...array2]);


const obj1 = { foo: 'bar', x: 42 };
const obj2 = { baz: 'qux', y: 13 };
const mergedObj = { ...obj1, ...obj2 }; 
console.log({...obj1, ...obj2});