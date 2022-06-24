// https://leetcode.com/problems/reverse-linked-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// Time complexity - O(n)
// Space complexity - O(1)
var reverseList = function (head) {
    if (!head) return head;
    let curr = head.next;
    const tail = head;
    while (curr) {
        const temp = curr.next;
        curr.next = head;
        head = curr;
        curr = temp;
    }
    tail.next = null;
    return head;
};
