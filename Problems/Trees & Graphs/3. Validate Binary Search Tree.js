// https://leetcode.com/problems/validate-binary-search-tree/
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
 * @return {boolean}
 */
var isValidBST = function (root) {
    if (!root) return false;
    return checkValid(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);

    function checkValid(node, min, max) {
        if (!node) return true;

        if (node.val <= min || node.val >= max) {
            return false;
        }

        return checkValid(node.left, min, node.val) && checkValid(node.right, node.val, max);
    }
};
