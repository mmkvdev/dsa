/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) return [];
    let queue = [root], res = [];

    while (queue.length) {
        let queueSize = queue.length;
        
        for (let i = 0; i < queueSize; i++) {
            let current = queue.shift();
            if (i === queueSize-1) res.push(current.val);
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
    }
    return res;
};
