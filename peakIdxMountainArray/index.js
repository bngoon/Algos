function peakIdxMountainArray(arr){
    let left = 0;
    let right = arr.length - 1;
    let boundaryIdx = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if(arr[mid] > arr[mid + 1]){
            boundaryIdx = mid;
            right = mid -1
        } else {
            left = mid + 1
        }
    }
    return boundaryIdx
}