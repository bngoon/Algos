from main import Solution


def test_fib():
    solution = Solution()
    assert solution.fib(0) == 0, "Test case fib(0) failed"
    assert solution.fib(1) == 1, "Test case fib(1) failed"
    assert solution.fib(5) == 5, "Test case fib(5) failed"
    assert solution.fib(10) == 55, "Test case fib(10) failed"