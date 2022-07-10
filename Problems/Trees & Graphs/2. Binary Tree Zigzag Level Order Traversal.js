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
 * @return {number[][]}
 */
// Time complexity - O(n)
// Space complexity - O(n
// where n is the number of nodes in the tree.
var zigzagLevelOrder = function (root) {
    if (!root) return [];
    let queue = [root];
    let result = [];
    let step = 1;
    while (queue.length > 0) {
        let values = [];
        let size = queue.length;

        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            if (step % 2 === 0) {
                values.unshift(node.val);
            } else {
                values.push(node.val)
            }

            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
        result.push(values);
        step++;
    }
    return result;
};