function peakOfMountainArray(arr) {
    let left = 0;
    let right = arr.length - 1
    let idx = -1
    
    while(left <= right){
        let mid = left + Math.floor((right - left) / 2)
        if(arr[mid] > arr[mid + 1]){
           idx = mid
           right = mid - 1
    } else {
           left = mid + 1 
       }
    }    
    
    return idx  ;
}