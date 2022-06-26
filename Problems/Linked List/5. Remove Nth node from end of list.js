// https://leetcode.com/problems/remove-nth-node-from-end-of-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// Time complexity - O(n)
// Space complexity - O(1)
var removeNthFromEnd = function (head, n) {
    if (!head.next) {
        if (n == 1) return null;
        if (n == 0) return head;
    };
    let length = 0;
    let curr = head;
    while (curr) {
        length++;
        curr = curr.next;
    }
    curr = head;
    let prev = null;
    const nodeIndex = length - (n - 1);
    if (nodeIndex === 1) {
        head = head.next;
        return head;
    } else {
        for (let i = 1; i < nodeIndex; i++) {
            prev = curr;
            curr = curr.next;
        }
        prev.next = curr.next;
        return head;
    }
};