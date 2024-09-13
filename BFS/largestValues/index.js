function largestValues(root){
    if(root === null) return [];
    let queue = [root];
    let result = [];
    while(queue.length > 0){
        let max = -Infinity;
        let len = queue.length;
        for(let i = 0; i < len; i++){
            let node = queue.shift();
            max = Math.max(max, node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        result.push(max);
    }
    return result;
}