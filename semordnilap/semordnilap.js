function semordnilap(words) {
    let resultArray = [];
    const set = new Set();
    
    for (let char of words) {
      const reversed = char.split('').reverse().join('');
      if (set.has(reversed) && reversed !== char) {
        resultArray.push([char, reversed])
      }
      set.add(char)
    }
  
  
    return resultArray;
  }
  
  console.log(semordnilap(['diaper', 'repaid', 'kayak', 'lipstick', 'stressed', 'desserts']));
  
