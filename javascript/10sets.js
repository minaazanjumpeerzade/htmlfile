let mySet = new Set();

mySet.add(1); 
mySet.add('Hello');
mySet.add(true);

console.log(mySet); 


let mySet1 = new Set([1, 2, 3, 4]);

console.log(mySet1); 

let mySet2 = new Set([1, 2, 3]);

mySet2.add(4);
console.log(mySet2);

mySet2.delete(2);
console.log(mySet2);

console.log(mySet2.has(3));
console.log(mySet2.has(5));

mySet2.clear();
console.log(mySet2);



