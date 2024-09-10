class Node {
    constructor(val, left = null, right = null){
        this.val = val
        this.left = left
        this.right = right
    }
}

function levelOrderTraversal(root){
    let res = []
    let queue = [root]

    while(queue.length > 0){
        const n = queue.length;
        let new_level = [];
        for(let i = 0; i < n; i++){
            const node = queue.shift()
            new_level.push(node.val)
            for(const child of [node.left, node.right]){
                if(child) queue.push(child)
            }
        }
        res.push(new_level)
    }
    return res
}