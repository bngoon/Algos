function minMaxSum(arr) {
  let minSum = 0;
  let maxSum = 0;

  // Calculate the minimum sum by summing the first four elements

  for (let i = 0; i < 4; i++) {
    minSum += arr[i];
  }
  for (let i = 1; i < 5; i ++) {
    maxSum += arr[i];
  }
  console.log(minSum, maxSum)
}

let arr = [1, 3, 5, 7, 9];
minMaxSum(arr);