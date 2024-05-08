function multiply(x, y, z) {
    return x * y * z;
  }
  
  console.log(multiply(2, 3, 4));  
  
  
  function curriedMultiply(x) {
    return function(y) {
      return function(z) {
        return x * y * z;
      };
    };
  }
  
  
  const multiplyByTwo = curriedMultiply(2);
  const multiplyByTwoAndThree = multiplyByTwo(3);
  
  console.log(multiplyByTwoAndThree(4)); 
  