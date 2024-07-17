function validateSubsequence(array, sequence){
    let arrayPointer = 0; 
    let sequencePointer = 0;
  
    while(arrayPointer < array.length && sequencePointer < sequence.length){
      if(array[arrayPointer] === sequence[sequencePointer]){
        sequencePointer++
      }
      arrayPointer++
    }
    return sequencePointer === sequence.length 
    
  }
  
  let array =[5,1,22,25,6,-1,8,10]
  let sequence = [1,6,-1,10]
  
  console.log(validateSubsequence(array, sequence))