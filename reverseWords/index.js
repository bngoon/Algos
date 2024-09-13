// '''Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.'''



// Example 1:

// Input: s = "the sky is blue"
// Output: "blue is sky the"

function reverseWords(s){
    s = s.trim() //remove trailing white spaces
    let words = s.split(' ') //splits strings by spaces and turns into array
    words = words.filter(word => word.length > 0)
    words.reverse() //method to reverse array of words
    const reversed = words.join(' ') //joins the words with a single space
    
    return reversed 
}