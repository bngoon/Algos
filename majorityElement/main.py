from collections import defaultdict
from typing import List

class Solution:
    def majority_element(self, nums: List[int]) -> int:
        n = len(nums)
        freq = defaultdict(int)

        # Calculate frequencies
        for num in nums:
            freq[num] += 1

        # Debugging output
        print(f"Frequencies: {dict(freq)}")

        # Find majority element
        majority_count = n // 2
        for key, val in freq.items():
            if val > majority_count:
                return key
        
        return 1
