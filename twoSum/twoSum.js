function twoSum(nums, target) {
  const hash = {}; // Create an object to store numbers and their indices
  for (let i = 0; i < nums.length; i++) {
      const numberNeeded = target - nums[i]; // Calculate the complement
      if (numberNeeded in hash) { // Check if the complement exists in the hash
          return [hash[numberNeeded], i]; // Return the indices of the two numbers
      }
      hash[nums[i]] = i; // Store the current number and its index in the hash
  }
};



function twoSum(nums, target){
  for(let i = 0; i < nums.length; i++){
    for(let j = 1; j <nums.length; j++){
      if(nums[i] + nums[j] === target){
        return [i, j]
      }
    }
  }

};