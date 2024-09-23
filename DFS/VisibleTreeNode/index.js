class Node{
    constructor(val, left = null, right = null){ 
        this.val = val
        this.left = left
        this.right = right
    }
};

function dfs(root, maxSoFar){
    if(!root) return 0; // base case if root is null
    let total = 0;

    //Check if current node is visible
    if (root.val >= maxSoFar) total++ 

    total += dfs(root.left, Math.max(maxSoFar, root.val)); // recursively call dfs to go left
    total += dfs(root.right, Math.max(maxSoFar, root.val)); // recursively call dfs to go right

    return total; // return total count of visible nodes
}

function visibleNodes(root) {
    return dfs(root, -Infinity); // call dfs with maxSoFar as -Infinity, ensures all nodes in the tree are considered visbile initially
}

