function simpleSum(ar) {
  let arrSum = 0;
  for (let i = 0; i < ar.length; i++) {
    arrSum += ar[i];
  }
  return arrSum;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const total = simpleSum(numbers);
console.log(total); // Output: 15 (1 + 2 + 3 + 4 + 5 = 15)
