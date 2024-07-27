function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) { //outter loop: iterates over the entire array
        for (let j = 0; j < arr.length - 1; j++) { // inner loop iterates over the array, stopping before the last stored element
            if(arr[j] > arr[j + 1]){ // compares current element with the next element
                let temp = arr[j] // if current element is greater swap them / store the current element in a temp variable
                arr[j] = arr[j + 1] // assign the next element to the current postion
                arr[j + 1 ] = temp // assing the temporary variable to the next position 
            }
            
        }
        
    }
    return arr
}











let arr = [5, 3, 8, 4, 2];
console.log(bubbleSort(arr)); // Output: [2, 3, 4, 5, 8]