function insertionSort(pairs) {
    const n = pairs.length;
    const res = [];
  
    for (let i = 1; i < n; i++) {
      let current = pairs[i];
      let j = i - 1;
  
      // Move elements that are greater than current to one position ahead of their current position.
      while (j >= 0 && pairs[j].key > current.key) {
        pairs[j + 1] = pairs[j];
        j -= 1;
      }
  
      // Insert the current element into its correct position.
      pairs[j + 1] = current;
  
      // Save the current state of pairs to the result array.
      res.push([...pairs]);
    }
  
    return res;
  }



// Example array of pairs, where each pair is expected to be an object with 'key' and 'value' properties.
let pairs = [
    { key: 5, value: "apple" }, 
    { key: 2, value: "banana" }, 
    { key: 9, value: "cherry" }
  ];
  
  // Call the insertionSort function and log the result to the console.
  console.log(insertionSort(pairs));