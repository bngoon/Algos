function migratoryBirds(arr) {
    // Initialize a Map to count occurrences of each bird ID
    const counts = new Map();

    // Count each bird ID in the input array
    for (let birdId of arr) {
        if (counts.has(birdId)) {
            counts.set(birdId, counts.get(birdId) + 1);
        } else {
            counts.set(birdId, 1);
        }
    }

    // Find the bird ID with the maximum count
    let maxCount = 0;
    let mostFrequentBirdId = -1;
    counts.forEach((count, birdId) => {
        if (count > maxCount) {
            maxCount = count;
            mostFrequentBirdId = birdId;
        }
    });

    return mostFrequentBirdId;
}