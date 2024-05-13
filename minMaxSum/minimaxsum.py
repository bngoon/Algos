def miniMaxSum(arr):
    arr.sort()
    # Calculate the sum of the four smallest numbers the slice notation selects everything to index 4
    min_sum = sum(arr[:4])
    # Calculate the sum of the four largest numbers the slice notation here selects and adds the sum after index 1
    max_sum = sum(arr[1:])
    print(min_sum, max_sum)
