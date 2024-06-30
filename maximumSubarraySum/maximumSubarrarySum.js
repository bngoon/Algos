function maxiumumSubarraySum(arr){
    if(arr.length === 0) return 0; // handles empty array
    let maxSoFar = 0; //initiallize to 0
    let maxEnding = 0;//initiallize to 0

    for (let i = 0; i < array.length; i++) {
        maxEnding = maxEnding + arr[i] // Add the current element to maxEndingHere

        if (maxEnding < 0) {
            maxEnding = 0; // Reset maxEndingHere to 0 if it becomes negative
        }
        if (maxEnding > maxSoFar) {
            maxSoFar = maxEnding // Update maxSoFar if maxEndingHere is greater
        }
    }
    return maxSoFar; // Return the maximum sum found
}