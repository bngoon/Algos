function majorityElement(nums) {
    let hash = {}
    // let count = 1;
    for(let i = 0; i < nums.length; i++){
        let count = 1
        if(!(nums[i] in hash)){
            hash[nums[i]] = count
        } else {
          count++
          console.log(count)
          nums[i] = count
          console.log(nums[i])
          
          
        }
        console.log(hash)

     
    }
  
  };
  majorityElement([1,2,3,4,4])