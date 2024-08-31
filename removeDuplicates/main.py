from typing import List


class Solution:
    def remove_duplicates(self, nums: List[int]) -> int:
        slow = 0
        for fast in range(len(nums)):
            if nums[slow] != nums[fast]:
                slow += 1
                nums[slow] = nums[fast]
        return slow
    
#nums [1 1 2 2 3 4 5 6 7]