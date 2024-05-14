Description:
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

function removeString(string){
    if(string.endsWith('!')) {
        return string.slice(0,-1);
    } else {
        return string
    }
}
console.log(removeString("Hi!"));     // Expected output: "Hi"
console.log(removeString("Hello were booming!"));      // Expected output: "Hello were booming"