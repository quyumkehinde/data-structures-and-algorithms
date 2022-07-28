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
    if (!head || !head.next) return false;
    let slow = head.next, fast = head.next.next;
    while (fast && slow) {
        if (fast === slow) return true;
        fast = fast.next?.next;
        slow = slow.next;
    }
    return false;
};