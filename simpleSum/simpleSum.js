function simpleSum(array){
  let sumArray = 0; // initialize variable to 0
  for(let i = 0; i < array.length; i++){//iterate through the array 
    sumArray += array[i] // adding the value of sumArray, intially it is 0. with the value of the current iteration 
  }
  return sumArray //returning the sumArray
}

const numbers = [1, 2, 3, 4, 5];
const total = simpleSum(numbers);
console.log(total); // Output: 15 (1 + 2 + 3 + 4 + 5 = 15)
