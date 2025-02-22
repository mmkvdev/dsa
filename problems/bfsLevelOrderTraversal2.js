/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/** https://leetcode.com/problems/binary-tree-level-order-traversal-ii/
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if (!root) return [];

    let queue = [root], visited = [];
    while (queue.length) {
        let queueSize = queue.length;
        let level = [];

        for (let i = 0; i < queueSize; i++) {
            let current = queue.shift();
            level.push(current.val);

            current && current.left && queue.push(current.left);
            current && current.right && queue.push(current.right);
        }

        visited.unshift(level);
    }

    return visited;
};
