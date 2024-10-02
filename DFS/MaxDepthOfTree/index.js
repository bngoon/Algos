class Node {
    constructor(val, left = null, right = null) { // constructor with default values
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
function dfs(root) { // recursive depth first search / helper function
    if (root === null) return 0; // base case
    return Math.max(dfs(root.left), dfs(root.right)) + 1; // recursive case - return max depth of left and right subtrees + 1

}
function treeMaxDepth(root) { // main function 
    return (root !== null) ? dfs(root) - 1 : 0; // return -1 if root is null or else return dfs(root) - 1
}