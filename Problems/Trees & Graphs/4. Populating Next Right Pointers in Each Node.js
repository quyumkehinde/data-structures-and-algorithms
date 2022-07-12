// https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
// Time complexity - O(n)
// Space complexity - O(n)
var connect = function (root) {
    if (!root) return root;
    let queue = [root];
    let index = 0;
    let noOfNodes = 1, nextEdge = 0;
    while (index < queue.length) {
        const node = queue[index];
        if (node.left) {
            queue.push(node.left);
        }
        if (node.right) {
            queue.push(node.right)
        }
        if (index === nextEdge) {
            node.next = null;
            noOfNodes *= 2;
            nextEdge += noOfNodes;
        } else {
            node.next = queue[index + 1];
        }
        index++;
    }
    return root;
};