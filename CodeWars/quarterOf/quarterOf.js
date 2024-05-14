function quarterOf(month) {
    if(month <= 3){
        return 1;
    } else if (month <= 6){
        return 2;
    } else if (month <= 9){
        return 3;
    } else {
        return 4;
    }
}

// Test cases
console.log(quarterOf(2));   // Output: 1
console.log(quarterOf(6));   // Output: 2
console.log(quarterOf(11));  // Output: 4