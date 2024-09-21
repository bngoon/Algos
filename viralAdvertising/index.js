function viralAdvertising(n){
    let shared = 5; // People who receive the ad on day 1
    let cumulative = 0; //Total number of people who have liked the ad

    for(let day = 1; day <= n; day++){ // Loop through n days
        shared = Math.floor(shared / 2) //Shared becomes half
        cumulative += liked //add to get cumulative likes
        shared = liked * 3 //Each person who liked shares with 3 others

    }
    return cumulative //return total likes by end of day n
}