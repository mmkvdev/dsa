/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/** https://leetcode.com/problems/subtree-of-another-tree/
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    const isSameTree = (a, b) => {
        if (!a && !b) return true;
        if (!a || !b) return false;

        return a.val === b.val && isSameTree(a.left, b.left) && isSameTree(a.right, b.right);
    }

    const dfs = (node) => {
        if (!node) return false;

        if (isSameTree(node, subRoot)) {
            return true;
        }

        return dfs(node.left) || dfs(node.right);
    }

    return dfs(root);
};
