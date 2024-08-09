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
  
  
  function getNthFib(n){
    if(n === 1) return 0;
    if(n === 2) return 1;
      return getNthFib(n-1) + getNthFib(n -2)
    }
  
  function getFib(n){
    if(n === 1 || n === 2) return n -1;
    return getFib(n - 1) + getFib(n - 2)
  }
  
  console.log(getFib(8))
  
  function isValid(array, sequence){
    let i = 0;
    let j = 0;
  
    while( i <array.length && j < sequence.legnth){
      if(array[i] === sequence[j]){
        j++
      }
      i++
    }
    return j === sequence.length
  }
  function commonCharacters(strings){
    let resultArray = []
    let firstString = strings[0] 
  
    for(let letter of firstString){
      if(strings.every(string => string.includes(letter))){
        if(!(resultArray.includes(letter))){
          resultArray.push(letter)}
        }
        strings = strings.map(string => string.replace(letter, ''))
      }  
      
     return resultArray
    }
  
  
  function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < arr.length - 1; j++){
        if(arr[j] > arr[ j + 1]){
          let temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j + 1] = temp 
        }
      }  
    }
    console.log(arr)
    return arr
    
  }
  
  bubbleSort([5, 7 ,2 , 3 ,4 ,6 ,2 ,1])
  console.log(bubbleSort([5, 7 ,2 , 3 ,4 ,6 ,2 ,1]))
  
  function bubbleSort(arr, n = arr.length){
    if (n == 1)  return arr; 
  
    for(let i = 0; i < n -1; i++){
      if(arr[i] > arr[i + 1]){
        let temp = arr[i]
        arr[i] = arr[ i + 1]
        arr[i + 1] = temp
      }
    }
    return bubbleSort(arr, n-1)
  }
  
  console.log(bubbleSort([1,4,1,2,6,4,6,4,75,54]))

  function commonCharacters(strings){
    let resultArray = [];
    let firstString = strings[0];
  
    for(let char of firstString){
      if(strings.every(str => str.includes(char))){
        if(!(resultArray.includes(char))){
          resultArray.push(char)
        }
        strings = strings.map(str => str.replace(char, ''))
      }
    }
    return resultArray
  }

  function semordnilap(words){
    let resultArray = [];
    let pair = new Set();
    
      for(let word of words){
        let reversed = word.split('').reverse().join('')
        if(pair.has(reversed) && reversed !== word){
          resultArray.push([reversed, word])
        }
          pair.add(word)
      }
          return resultArray 
    }


    function generateDocument(characters, document){
      let charCount = {}
      
      for(let char of characters){
        if(!(char in charCount)){
          charCount[char] = 0;
        }
        charCount[char]++
      }
      
      for(let char of document){
        if(!(char in charCount) || charCount[char] === 0){
          return false
        }
      charCount[char]--
      }
      return true
    }
    
    console.log(generateDocument('ass', 'ass'))
    
    function bubbleSort(array){
      for(let i = 0; i < array.length; i ++){
        for(let j = 0; j < array.length - 1; j++){
          if(array[j] > array[j + 1]){
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp
          }
        }
      }
      return array
    }
    
    console.log(bubbleSort([1,4,1,4,5,6,1,3]))
    
    function semordnilap(words){
      let resultArray = [];
      let pairs = new Set();
    
      for(let element of words){
        let reversed = element.split('').reverse().join('')
        if(pairs.has(reversed) && reversed !== element){
          resultArray.push([reversed, element])
        }
        pairs.add(element)
      }
      return resultArray



      function count(string) {
        let hash = {}
      
        for(let i = 0; i < string.length; i++){
          let letter = string[i];
          if(letter in hash){
            hash[letter]++
         } else {
           hash[letter] = 1
          }
        }
        return hash
        }
      
      function bubbleSort(arr){
      
      
        for(let i = 0; i < arr.length; i++ ){
          for(let j = 0; j < arr.length - 1; j++){
            if(arr[j] > arr[j + 1]){
              let temp = arr[j];
              arr[j] = arr[j+1]
              arr[j + 1] = temp
            }
          }
        }
        return arr
       
      }
      
      console.log(bubbleSort([5, 4, 3, 2, 1]))
      
      
      function semordnilap(words){
        let pairs = new Set ();
        let result = [];
      
        for(let word of words){
          let reversed = word.split('').reverse().join('')
          console.log(reversed)
          if(pairs.has(reversed) && reversed !== word){
            result.push([word, reversed])
          }
          pairs.add(word)
        }
        console.log(result)
        return result  
      }
      
      
      semordnilap(['diaper', 'abc', 'repaid', 'bba'])