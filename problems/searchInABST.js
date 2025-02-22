/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/** https://leetcode.com/problems/search-in-a-binary-search-tree/
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    if (!root) return null;

    let current = root, found = false;

    while (current && !found) {
        if (current.val > val) {
            current = current.left;
        } else if (current.val < val) {
            current = current.right;
        } else {
            found = true;
        }
    }

    // if (!found) return [];
    return current;
};
