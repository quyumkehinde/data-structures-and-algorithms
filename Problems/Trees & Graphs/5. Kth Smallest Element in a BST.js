//https://leetcode.com/problems/kth-smallest-element-in-a-bst/
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
 * @param {number} k
 * @return {number}
 */// Time complexity - O(n) 
// Space complexity - O(h)
// where h is the maximum height of the tree
var kthSmallest = function (root, k) {
    let counter = 0, val = null;
    function dfs(node) {
        if (!node || counter > k) {
            return;
        }
        dfs(node.left);
        counter++;
        if (counter === k) {
            val = node.val;
        }
        dfs(node.right);
    }

    dfs(root);
    return val;
};