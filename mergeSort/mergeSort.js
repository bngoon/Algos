function sum(number) {
if (number === 0) {
    return 0
}
return number + sum(number - 1)
    
}

console.log(sum(3))


// O(n) big o notation 
// recursion requires a base case 
// takes large array splits in half and sorts 


function merge(arr1, arr2) {
    let results = []
      let i = 0
      let j = 0
    
        while (i < arr1.length && j < arr2.length) {
            if (arr2[j] > arr1[i]){
                results.push(arr1[i])
                i++
    
            } else {
                results.push(arr2[j])
                j++
            }
        }
    
      while (i < arr1.legnth) {
        results.push(arr1[i])
        i++
      }
      while (j < arr2.length) {
        results.push(arr2[j])
        j++
      }
    
        return results
    }


    function mergeSort(arr){
        if (arr.length <= 1) return arr
        let mid = Math.floor(arr.length / 2)
        let left = mergeSort(arr.slice(0, mid))
        let right = mergeSort(arr.slice(mid))
        return merge(left, right)
      }
        
      
      
      console.log(mergeSort([14, 22, 78, 63, 74, 1, 10]))

    console.log(merge([2, 14, 99, 100], [1, 10, 50]))