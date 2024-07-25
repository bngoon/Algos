function fizzBuzz(n) { 
    // Declare an array to store the results 
    let result = []; 
  
    // Loop from 1 to n (inclusive) 
    for (let i = 1; i <= n; ++i) { 
      // Check if i is divisible by both 3 and 5 
      if (i % 3 === 0 && i % 5 === 0) { 
        // Add "FizzBuzz" to the result array 
        result.push("FizzBuzz"); 
      } 
      // Check if i is divisible by 3 
      else if (i % 3 === 0) { 
        // Add "Fizz" to the result array 
        result.push("Fizz"); 
      } 
      // Check if i is divisible by 5 
      else if (i % 5 === 0) { 
  
        // Add "Buzz" to the result array 
        result.push("Buzz"); 
      } 
      else { 
        // Add the current number as a string to the 
        // result array 
        result.push(i.toString()); 
      } 
    } 
    // Return the result array 
    return result; 
  } 
  
  console.log(fizzBuzz(20))