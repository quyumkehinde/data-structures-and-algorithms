// https://leetcode.com/problems/reverse-linked-list-ii/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
// Time complexity - O(n)
// Space complexity - O(1)
var reverseBetween = function (head, left, right) {
    if (!head.next) return head;

    let firstTail = null;
    let index = 0;
    let secondTail = head;
    let current = head;
    if (left > 1) {
        firstTail = head;
        index = 1;
        while (index < left - 1) {
            firstTail = firstTail.next;
            index++;
        }
        secondTail = firstTail.next;
        current = firstTail.next;
    }

    let start = null;
    while (++index <= right) {
        const temp = current.next;
        current.next = start;
        start = current;
        current = temp;
    }
    secondTail.next = current;
    if (left < 2) return start;
    firstTail.next = start;
    return head;
};