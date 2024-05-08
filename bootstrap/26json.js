const person = {
    "name": "John Doe",
    "age": 30,
    "city": "New York"
  };
  
  const jsonString = JSON.stringify(person);
  
  console.log(jsonString);
  
  const parsedPerson = JSON.parse(jsonString);
  
  console.log(parsedPerson);
  