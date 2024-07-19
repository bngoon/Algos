function reverse(s){
   const strToArray = s.split('')

   strToArray.reverse();

   return strToArray.join('')
}

console.log(reverse('Booker'))


function reverseInt(n){
    const reversed = n.toString().split('').reverse().join('')
    return parseInt(reversed) * Math.sign(n)
}
console.log(reverseInt(-15))










// function palindrome(str){
//     let leftIdx = 0 
//     let rightIdx = str.length -1;

//     while(leftIdx > rightIdx){
//         if(leftIdx[i] !== rightIdx[i]){
//             return false
//         }
//         leftIdx++
//         rightIdx--
//     }
//     return true
// }
function palindrome(str){
    const reversed = str.split('').reverse().join('')

    if(str === reversed ){
        return true
    }
    return false
}
console.log(palindrome('kayak'))




function maxChar(str){
    let letterCount = {}

    for (let i = 0; i < str.length; i++){
        if(!(str[i] in letterCount)){
            letterCount[str[i]] = 0
        }
        letterCount[str[i]]++
    }
    for(const [key, value] of Object.entries(letterCount)){
        console.log(key, value);
    }   
        
    return letterCount
}

console.log(maxChar(("abccccccccccccd")))






