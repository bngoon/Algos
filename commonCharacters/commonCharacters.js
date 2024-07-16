function commonCharacters(strings){
    if (strings.length === 0) return []; //checks if the length of the string is 0 

    const charSets = strings.map(str => new Set(str)); //converts each string to a set of characters
    let commonSet = charSets[0] // get the intersection of all sets
    for(let i = 1; i < charSets.length; i++){
        commonSet = new Set([...commonSet].filter(char => charSets[i].has(char)));
    }
    return Array.from(commonSet);
}