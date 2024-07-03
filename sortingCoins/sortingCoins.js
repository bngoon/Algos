function nonConstructibleChange(coins){
    let currentChangeCreated = 0;
    let sortedCoins = coins.sort((a,b) (a - b));

    for (let i = 0; i < sortedCoins.length; i++) {
        let coin = sortedCoins[i];
        if(coin > currentChangeCreated + 1){
            break;
        }
        currentChangeCreated += coin
    }
    return currentChangeCreated + 1;
}