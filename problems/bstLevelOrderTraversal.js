/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/** https://leetcode.com/problems/binary-tree-level-order-traversal/
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];
    let queue = [root], visited = [];
    while (queue.length) {
        let level = [];
        let levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            let current = queue.shift();
            level.push(current.val);

            current && current.left && queue.push(current.left);
            current && current.right && queue.push(current.right);
        }
        visited.push(level);
    }

    return visited;
};
