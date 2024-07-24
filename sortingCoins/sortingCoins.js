function nonConstructibleChange(coins){
    let sortedCoins = coins.sort((a,b ) => a-b);
    let currentChangeCreated = 0;

    for(let coin of sortedCoins){
        if(coin > currentChangeCreated + 1){
        break;
        }
        currentChangeCreated += coin
    }
    return currentChangeCreated + 1
}