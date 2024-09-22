function preOrderTraversal(root){
    let res = []; // initialize result array

    function preOrder(node){ // recursive function to traverse the tree
        if(!node) return; // checks if the node is null

        res.push(node.val); // adds the node value to the result array
        preOrder(node.left); //traverse the left subtree
        preOrder(node.right); //traverse the right subtree
    }
    preOrder(root); // call the recursive function
    return res; // return the result array
}