function applyOperation(x, y, operation) {
    return operation(x, y);
  }
  
  function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  console.log(applyOperation(5, 3, add));       
  console.log(applyOperation(5, 3, subtract));  
  