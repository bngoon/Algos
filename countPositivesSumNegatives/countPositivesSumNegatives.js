function countPositivesSumNegatives(input) {
    //check if the input is null or an empty array 
    if(!input || input.length === 0){
        return [];
    }

    let positive = 0;
    let negative = 0;

    for(let i = 0; i < input.length; i++){
        if (input[i] > 0) {
            positive++; // count positive numbers
        } else if (input[i] < 0){
            negative += input[i]; // Sum negative numbers
        }
    }

    return [positive, negative]

}

