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
    let firstTail = head;
    let current = head;
    let i = 1;
    while (i < left) {
        firstTail = current;
        current = current.next;
        i++;
    }
    let start = null, secondTail = current;
    while (i <= right) {
        const temp = current.next;
        current.next = start;
        start = current;
        current = temp;
        i++;
    }
    firstTail.next = start;
    secondTail.next = current;
    return left === 1 ? start : head;
};