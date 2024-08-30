from typing import List

def subarray_sum_fixed(nums: List[int], k:int) -> int:
    window_sum = 0

    for i in range(k):
        window_sum += nums[i]
    largest = window_sum

    for right in range(k, len(nums)):
        left = right - k
        window_sum += nums[right]
        window_sum -= nums[left]
        largest = max(largest, window_sum)
    return largest