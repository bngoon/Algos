function getMiddle(s) {
    // Check if the length of the string is even
    if (s.length % 2 === 0) {
      // Return the middle two characters for even length strings
      return s[(s.length / 2) - 1] + s[s.length / 2];
    } else {
      // Return the middle character for odd length strings
      return s[Math.floor(s.length / 2)];
    }
  }
  