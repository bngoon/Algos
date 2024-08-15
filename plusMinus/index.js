function plusMinus(arr){
    let n = arr.length
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;

    for(let num of arr){
        if(num > 0){
            positiveCount++
        } else if (num < 0){
            negativeCount--
        } else {
            zeroCount++
        }
    }
    const positiveRatio = (positiveCount / n).toFixed(6)
    const negativeRatio = (negativeCount / n).toFixed(6)
    const zeroRatio = (zeroCount / n).toFixed(6)

    console.log(positiveRatio);  // Printing the positive ratio
    console.log(negativeRatio);  // Printing the negative ratio
    console.log(zeroRatio);      // Printing the zero ratio
}

plusMinus([-4, 3, -9, 0, 4, 1]);