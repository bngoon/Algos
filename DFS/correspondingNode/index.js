function TreeNode(val){
    this.val
    this.left = this.right = null
}

function getTargetCopy(original, cloned, target) {
    // Base Case 1: if the root is null, return null
    if(!original)  {
        return null
    }

    // If the current node in the original tree is target node, return the cloned node
    if(original === target) {
        return cloned;
    }
    //Recursively traverse the left and right subtrees
    let leftCopy = getTargetCopy(original.left, cloned.left, target);
    if(leftCopy) {
        return leftCopy;
    }
    let rightCopy = getTargetCopy(original.right, cloned.right, target);
    if(rightCopy) {
        return rightCopy;
    }
    return null
}