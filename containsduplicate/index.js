function containsDuplicate(nums) {
    let numCount = {} // create empty hash

    for(let num of nums){//iterate through each item of nums
        if(num in numCount){//checks if item is present in hash
            numCount[num]++ // increment the value for each time found in iteration
        } else {
            numCount[num] = 1; // Initialize the found for num if it's not in numCount
        }
    }
    for(let num in numCount){ //checks if number appears more than once
        if(numCount[num] > 1){
            return true //duplicate found
        }
    }
    return false //no duplicates found
}