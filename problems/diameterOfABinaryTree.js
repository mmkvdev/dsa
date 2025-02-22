/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/** https://leetcode.com/problems/diameter-of-binary-tree/
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    if (!root) return 0;

    let diameter = 0;

    const dfs = (node) => {
        if (!node) return 0;
        const leftSubTreeHeight = dfs(node.left);
        const rightSubTreeHeight = dfs(node.right);

        diameter = Math.max(diameter, leftSubTreeHeight + rightSubTreeHeight);
        return 1 + Math.max(leftSubTreeHeight, rightSubTreeHeight);
    }

    dfs(root);
    return diameter;
};
