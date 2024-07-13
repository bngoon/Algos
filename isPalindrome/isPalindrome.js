function isPalindrome(s) {
    let lastIndex = s.length - 1;
    let firstIndex = 0;

    while (firstIndex < lastIndex) {
        if (s[firstIndex] !== s[lastIndex]) {
            return false;
        }
        firstIndex++;
        lastIndex--;
    }
    return true;
}
