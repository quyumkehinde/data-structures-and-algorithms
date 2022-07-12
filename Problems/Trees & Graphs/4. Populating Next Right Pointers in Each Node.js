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
    if (!root || !root.left) return root;
    let queue = [root], index = 0;
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
            noOfNodes *= 2;
            nextEdge += noOfNodes;
        } else {
            node.next = queue[index + 1];
        }
        index++;
    }
    return root;
};

// Time complexity - O(n)
// Space complexity - O(1)
var connect = function (root) {
    let current = root;
    while (current && current.left) {
        let temp = current.left;
        while (current) {
            current.left.next = current.right;
            current.right.next = current.next ? current.next.left : null;
            current = current.next;
        }
        current = temp;
    }
    return root;
};
