function countChar(string){
    let hash = {}; //initliaze hash

    for(let letter of string){ //iterate through string with for of 
        if(letter in hash){ // checks if current index is in the hash
            hash[letter]++ //add to the hash
        }else {
            hash[letter] = 1 // set to 1
        }
    }
    return hash //return the hash object { a: 2, b: 1 }
}

console.log(countChar('aba'))