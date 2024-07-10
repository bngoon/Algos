function transpose(matrix) {
    // Initialize the new matrix with the same number of columns as the original matrix has rows
    let newMatrix = [];
    
    // Loop to create the necessary structure of the new matrix (transpose)
    for(let i = 0; i < matrix[0].length; i++) {
        newMatrix.push([]); // Each new row is an empty array
    }
    
    // Loop through each element of the original matrix
    for(let y = 0; y < matrix.length; y++) {
        for(let x = 0; x < matrix[0].length; x++) {
            newMatrix[x][y] = matrix[y][x]; // Swap rows and columns
        }
    }
    
    return newMatrix; // Return the transposed matrix
}

// Example usage:
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];