function greet(name, callback) {
    console.log("Hello, " + name);
    callback(); // Call the callback function
  }
  
  function sayGoodbye() {
    console.log("Goodbye!");
  }
  
  // Using the greet function with a callback
  greet("Alice", sayGoodbye);
  