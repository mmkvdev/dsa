/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/** https://leetcode.com/problems/maximum-depth-of-binary-tree/
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (root === null) return 0;

    let depth = 0;
    const calculateHeight = (node) => {
        if (node === null) return 0;
        
        const leftSubTreeHeight = calculateHeight(node.left);
        const rightSubTreeHeight = calculateHeight(node.right);

        return 1 + Math.max(leftSubTreeHeight, rightSubTreeHeight);
    }

    return calculateHeight(root);
};
