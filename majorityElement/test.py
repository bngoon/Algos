import pytest
from main import Solution  # Make sure to import the Solution class from main.py

def test_majority_element():
    solution = Solution()
    
    # Use the same function name `majorityElement` as defined in main.py
    assert solution.majority_element([3, 3, 4]) == 3, "Test Case 1 Failed"
    assert solution.majority_element([2, 2, 1, 1, 1, 2, 2]) == 2, "Test Case 2 Failed"
    assert solution.majority_element([1, 1, 1, 1, 2, 2, 3, 3]) == 1, "Test Case 3 Failed"
    assert solution.majority_element([1]) == 1, "Test Case 4 Failed"
    assert solution.majority_element([1, 2, 2, 2, 3, 3, 2]) == 2, "Test Case 5 Failed"

if __name__ == "__main__":
    pytest.main()
