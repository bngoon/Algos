function insertionSort(pairs){
    const n = pairs.length // initialize length of the pairs array
    const res = [] //initialize empty array to store the stae of the pairs array after each iteration


    for(let i = 0; i < n; i++){// Loop through each element of the 'pairs' array starting from the first element (i.e., index 0).
        let j = i -1; //start wit h the previous index i - 1. Will compare the current element with the elements before it.
        
        // This while loop is supposed to move elements of 'pairs' that are greater than the current element's 'key'
        // to one position ahead of their current position. However, this logic seems incorrect due to the comparison.
        while(j >= 0 && pairs[j].key > pairs[j + 1].key ){
            j-=1 // Decrement 'j' to move back through the array.
        }
        res.push([...pairs])
    }
    return res
}



// Example array of pairs, where each pair is expected to be an object with 'key' and 'value' properties.
let pairs = [
    { key: 5, value: "apple" }, 
    { key: 2, value: "banana" }, 
    { key: 9, value: "cherry" }
  ];
  
  // Call the insertionSort function and log the result to the console.
  console.log(insertionSort(pairs));