// https://leetcode.com/problems/binary-tree-inorder-traversal/
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
 * @return {number[]}
 */

// Recursive solution
// Time complexity - O(n)
// Space complexity - O(n)
// where n is the number of nodes in the tree
var inorderTraversal = function (root) {
    let result = [];
    const inorder = (node) => {
        if (!node) {
            return;
        } else {
            inorder(node.left);
            result.push(node.val);
            inorder(node.right);
        }
    }
    inorder(root);
    return result;
};

// Iterative method
// Time complexity - O(n)
// Space complexity - O(n)
// where n is the number of nodes in the tree
var inorderTraversal = function (root) {
    let result = [];
    let stack = [];
    let curr = root;
    while (curr || stack.length > 0) {
        if (!curr) {
            const node = stack.pop();
            result.push(node.val);
            curr = node.right;
        } else {
            stack.push(curr);
            curr = curr.left;
        }
    }
    return result;
};

