function findSemordnilapPairs(words) {
    // Initialize an empty array to store pairs of semordnilap words.
    const semordnilapPairs = [];
    
    // Create a Set from the array of words for quick lookup.
    const wordSet = new Set(words);

    // Iterate over each word in the input array.
    words.forEach(word => {
        // Reverse the current word by splitting it into characters, reversing the array of characters, and joining them back into a string.
        const reversedWord = word.split('').reverse().join('');
     
        
        // Check if the reversed word is in the Set and that the word is not equal to its reverse.
        if (wordSet.has(reversedWord) && word !== reversedWord) {
            
            
            // If the reversed word exists in the Set and is not the same as the original word, it's a semordnilap pair.
            // Add the pair to the semordnilapPairs array.
            semordnilapPairs.push([word, reversedWord]);
            
            // Remove both words from the Set to avoid duplicate pairs.
            wordSet.delete(word);
            wordSet.delete(reversedWord);
        }
    });

    // Return the array of semordnilap pairs.
    return semordnilapPairs;
}

// Example usage
const words = ["desserts", "stressed", "hello", "olleh", "world", "desserts"];

// Output the result of the function, which should be pairs of semordnilap words.
console.log(findSemordnilapPairs(words)); 

