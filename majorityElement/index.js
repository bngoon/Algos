function majorityElement(nums){
    let hash = {}

    for(const n of nums){
        if(hash[n] ){
            hash[n]++
        } else {
            hash[n] = 1;
        }
    }
    const half = nums.length / 2
    for(const key of Object.keys(hash)){
        if(hash[key] > half){
            return key
        }
    }
    return - 1
}

console.log(majorityElement([3,1,3]))