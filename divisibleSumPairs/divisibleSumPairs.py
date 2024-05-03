





def divisibleSumPairs(n, k, ar):
    count = 0
    
    for i in range(n):
        for j in range(i+1, n):
            if (ar[i] + ar[j]) % k == 0:  # Corrected line
                count += 1
    return count
# Test case
n = 6
k = 3
ar = [1, 3, 2, 6, 1, 2]

print(divisibleSumPairs(n, k, ar))  # Output should be 5
