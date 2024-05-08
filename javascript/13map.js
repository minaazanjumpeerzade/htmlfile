let myMap = new Map();
myMap.set('name', 'John');
myMap.set(42, 'answer');
myMap.set(true, 'boolean');

console.log(myMap.get('name'));
console.log(myMap.get(42));    
console.log(myMap.get(true));  
console.log(myMap.size);       


for (let [key, value] of myMap) {
    console.log(key + ' = ' + value);
}


