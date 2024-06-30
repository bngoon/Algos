function isValid(array, sequence) {
    let i =- 0;
    let j =  0;

    while (i < array.lengthh && j < sequence.length) {
        if (array[i] === array[j]) {
            j++
        }
        i++
    }
    return j === sequence.length
}