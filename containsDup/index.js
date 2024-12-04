function containsDup(nums){
    const set = new Set(nums);

    return set.size !== nums.length
}

function containsDup2(nums){
    let numSet = new Set();

    for(let num of nums){
        if(numSet.has(num)) return true;
        numSet.add(num)
    } 
    return false;
}