function reverseArray (arr) {
    return arr.reverse();
}

let arr1 = [1, 2, 3, 4, 5];
console.log(reverseArray(arr1));  // Output: [5, 4, 3, 2, 1]

let arr2 = ["apple", "banana", "orange", "grape"];
console.log(reverseArray(arr2));  // Output: ['grape', 'orange', 'banana', 'apple']

let arr3 = [];
console.log(reverseArray(arr3));  // Output: []

let arr4 = [42];
console.log(reverseArray(arr4));  // Output: [42]

let arr5 = [1, "two", 3.0, [4, 5], { key: "value" }];
console.log(reverseArray(arr5));  // Output: [ { key: 'value' }, [ 4, 5 ], 3, 'two', 1 ]