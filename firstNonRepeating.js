function firstNonRepeatingCharacter(string) {
    const charCounts = {};

    // Count occurrences of each character
    for (const char of string) {
        if (!(char in charCounts)) {
            charCounts[char] = 0;
        }
        charCounts[char]++;
    }

    // Find the first non-repeating character
    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        if (charCounts[char] === 1) {
            return i;
        }
    }

    // If no non-repeating character is found, return -1
    return -1;
}
