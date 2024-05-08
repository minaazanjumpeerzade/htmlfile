// Function with default parameters
function greet(name = "Guest", message = "Hello") {
    console.log(`${message}, ${name}!`);
  }
  
  
  greet();
  greet("Alice"); 
  greet("Bob", "Hi there"); 
  