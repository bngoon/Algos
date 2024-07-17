function commonCharacters(words) {
    const resultArray = [];
  
    // Loop through each character in the first word
    for (const letter of words[0]) {
      // Check if the letter is present in every word
      if (words.every(word => word.includes(letter))) {
        // If so, add it to the result array
        resultArray.push(letter);
        // Replace the first occurrence of the letter in each word to avoid duplicate counting
        words = words.map(word => word.replace(letter, ''));
      }
    }
  
    return resultArray;
  }
  
  // Example usage:
  let strings = ["bella", "label", "roller"];
  console.log(commonCharacters(strings)); // Outputs: ["e", "l"]