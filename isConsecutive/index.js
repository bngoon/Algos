function isConsecutive(nums){
    // if array has one element return, it is consecutive
    if(nums.length === 1) return true

    let min = Math.min(...nums) // create shallow copy of nums and find the min number in the array
    let n = nums.length // get the length of the array

    let numSet = new Set(nums) // create a new set from the array

    for(let i = 0; i < n; i++){
        if(!numSet.has(min + i)) return false
    }
    return true
}