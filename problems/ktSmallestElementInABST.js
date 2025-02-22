/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * https://leetcode.com/problems/kth-smallest-element-in-a-bst/
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let visited = [];
    const inOrder = (node) => {
        if (!node) return [];
        inOrder(node.left);
        visited.push(node.val);
        inOrder(node.right);
    }
    inOrder(root);
    return visited[k - 1];
};
