def reverseArray(a):
    return a[::-1]


# Test case 1: Reversing an array of integers
arr_int = [1, 2, 3, 4, 5]
print(reverseArray(arr_int))  # Output: [5, 4, 3, 2, 1]

# Test case 2: Reversing an array of strings
arr_str = ["apple", "banana", "orange", "grape"]
print(reverseArray(arr_str))  # Output: ['grape', 'orange', 'banana', 'apple']

# Test case 3: Reversing an empty array
arr_empty = []
print(reverseArray(arr_empty))  # Output: []

# Test case 4: Reversing an array with one element
arr_single = [42]
print(reverseArray(arr_single))  # Output: [42]

# Test case 5: Reversing an array with mixed data types
arr_mixed = [1, "two", 3.0, [4, 5], {"key": "value"}]
print(reverseArray(arr_mixed))  # Output: [{'key': 'value'}, [4, 5], 3.0, 'two', 1]
