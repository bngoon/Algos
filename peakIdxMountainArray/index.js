function peakOfMountainArray(arr) {
    let left = 0; // index of the first element in the array
    let right = arr.length - 1 // index of the last element in the array
    let idx = -1 // index of the peak element

    while (left <= right) { // while the left index is less than or equal to the right index
        let mid = left + Math.floor((right - left) / 2) // calculate the middle index
        if (arr[mid] > arr[mid + 1]) { // if the element at the middle index is greater than the element at the next index
            idx = mid // set the index of the peak element to the middle index
            right = mid - 1 // set the right index to the middle index minus 1
        } else {
            left = mid + 1 // set the left index to the middle index plus 1
        }
    }

    return idx; // return the index of the peak element
}