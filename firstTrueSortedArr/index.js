function findBoundary(arr) {
    let left = 0;
    let right = arr.length -1
    let firstIndex = -1
    while(left <= right){
        const mid = Math.floor((left + right) / 2)
        if(arr[mid]){
            firstIndex = mid
            right = mid - 1
        } else {
            left = mid -1
        }
    }
    return firstIndex
        
}