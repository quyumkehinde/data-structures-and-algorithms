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
 * @return {void} Do not return anything, modify root in-place instead.
 */
// Time complexity - O(n) where n is the number of nodes
// Space complexity - O(h) where h is the height of the binary tree
var flatten = function (root) {
    if (!root) return root;
    let prev = null;
    function dfs(node) {
        if (!node) return;
        dfs(node.right);
        dfs(node.left);
        node.right = prev;
        node.left = null;
        prev = node;
    }
    dfs(root);
    return root;
};
