function getNthFib(n){
    if(n === 2) return 1
    
    const fib = [0, 1];
    for(let i = 2; i < n; i++){
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[n - 1]
  }
  
  
  console.log(getNthFib(0))
  
  function semordnilap(words){
    let resultArray = [];
    const pairs = new Set();
    
    for(let word of words){
      let reversed = word.split('').reverse().join('');
      console.log(reversed)
      if(pairs.has(reversed) && reversed !== word){
        resultArray.push([word, reversed])
      }
      pairs.add(word);
      console.log(word)
      
    }
    
    return resultArray;
    
  }
  
  console.log(semordnilap(['diaper', 'repaid', 'kayak', 'abc']))
  
  