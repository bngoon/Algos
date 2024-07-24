function productSum(array, depth = 1){
    let sum = 0;
  
    for(let element of array){ // iterating through array
      if(Array.isArray(element)){ //method to check if array is an array
        sum += productSum(element, depth + 1) // adding sum to recursive call 
        console.log(element)
      } else {
        sum += element // adding sum and element
      }
    }
  
    return sum * depth //return sum * depth 
  }
  console.log(productSum([5,2,[7,-1],3,[6, [-13, 8], 4]]))