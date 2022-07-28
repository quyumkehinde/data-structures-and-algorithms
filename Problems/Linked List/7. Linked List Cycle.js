/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let node = head;
    while (node) {
        if (node.visited) return true;
        node.visited = true;
        node = node.next;
    }
    return false;
};