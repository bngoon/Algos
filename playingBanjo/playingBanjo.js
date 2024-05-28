function areYouPlayingBanjo(name) {
    // Get the first character of the name using bracket notation
    let firstChar = name[0];

    // Check if the first character is 'R' or 'r'
    if (firstChar.toLowerCase() === 'r') {
        // If it is, return that the person plays banjo
        return name + " plays banjo";
    } else {
        // Otherwise, return that the person does not play banjo
        return name + " does not play banjo";
    }
}