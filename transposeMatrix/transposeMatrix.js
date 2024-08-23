function transpose(matrix) {
    let newMatrix = [];

    for(let i = 0; i < matrix[0].length; i++){
        newMatrix.push([])
    }

    for(let row = 0; row < matrix[0].length; row++){
        for(let column = 0; column < matrix.length; column++){
            newMatrix[row][column] = matrix[column][row]
        }
    }
    return newMatrix
};

// Example usage:
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];