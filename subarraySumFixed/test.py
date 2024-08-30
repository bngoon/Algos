# test.py
import pytest
from main import subarray_sum_fixed  # Import the function from main.py

def test_subarray_sum_fixed():
    # Test cases
    assert subarray_sum_fixed([1, 2, 3, 4, 5], 3) == 12  # 3+4+5
    assert subarray_sum_fixed([-1, -2, -3, -4, -5], 2) == -3  # -1 + -2 or -2 + -1
    assert subarray_sum_fixed([1, 2, 3, 4, 5], 2) == 9  # 4+5
    assert subarray_sum_fixed([1, 2, 3, 4], 4) == 10  # 1+2+3+4
    assert subarray_sum_fixed([1, 2, 3, 4], 1) == 4  # Single largest element
