def miniMaxSum(arr):
  arr.sort()
  min_sum = sum(arr[:4])  # Calculate the sum of the four smallest numbers
  max_sum = sum(arr[1:])  # Calculate the sum of the four largest numbers
  print(min_sum, max_sum)