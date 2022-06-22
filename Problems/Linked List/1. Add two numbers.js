// https://leetcode.com/problems/add-two-numbers/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// Time complexity - O(n)
// Space complexity - O(n)
// where n is the length of the longest ListNode
var addTwoNumbers = function (l1, l2) {
    let current1 = l1;
    let current2 = l2;
    let remainder = 0;
    const head = new ListNode();
    let curr = head;
    while (current1 || current2 || remainder) {
        let sum = remainder;
        if (current1) {
            sum += current1.val;
            current1 = current1.next;
        }
        if (current2) {
            sum += current2.val;
            current2 = current2.next;
        }
        let node = new ListNode(sum);
        if (sum >= 10) {
            node.val = sum % 10;
        }
        remainder = Math.floor(sum / 10);
        curr.next = node;
        curr = node;
    }

    return head.next;
};
