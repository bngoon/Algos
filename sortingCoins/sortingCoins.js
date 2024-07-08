function nonConstructibleChange(coins){
    let currentChangeCreated = 0; // initialize to 0
    let sortedCoins = coins.sort((a, b) => a - b); // sort the coins array

    for (let i = 0; i < sortedCoins.length; i++) {//iterate through the sorted coins array
        let coin = sortedCoins[i];//set variable to index of sortedCoins array
        if(coin > currentChangeCreated + 1){// check if the value of coin is greater than currentchagne + 1
            break;
        }
        currentChangeCreated += coin//add values together 
    }
    return currentChangeCreated + 1;
}