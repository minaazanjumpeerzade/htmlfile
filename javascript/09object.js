let person = {
    name: 'John',
    age: 30,
    city: 'New York'
};
console.log(person.name); 
console.log(person['age']);


person.job = 'Software Engineer'; 
console.log(person.job); 

person.age = 31;
console.log(person.age);

delete person.city; 
console.log(person);
