class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
function dfs(root) {
    if (root === null) return 0;
    return Math.max(dfs(root.left), dfs(root.right)) + 1;

}
function treeMaxDepth(root) {
    return (root !== null) ? dfs(root) - 1 : 0;
}