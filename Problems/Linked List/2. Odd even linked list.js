// https://leetcode.com/problems/odd-even-linked-list/
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
// Time complexity - O(n) where n is the length of the linked list
// Space complexity - O(1)
var oddEvenList = function (head) {
    if (!head?.next) return head;
    const evenHead = head.next;
    let currOdd = head;
    let currEven = head.next;
    let curr = currEven.next;
    let i = 3;
    while (curr) {
        if (i % 2 === 0) {
            currEven.next = curr;
            currEven = curr;
        } else {
            currOdd.next = curr;
            currOdd = curr;
        }
        curr = curr.next;
        i++;
    }
    currEven.next = null;
    currOdd.next = evenHead;
    return head;
};
