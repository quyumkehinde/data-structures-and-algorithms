/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// Method 1: This method traverse through the two linked lists to get their length, substract the longer from the smaller,
// traverse the longer by the difference then compare each nodes in the two lists. 

// Time complexity - O(m+n)
// Space complexity - O(1)
var getIntersectionNode1 = function (headA, headB) {
    if (!headA || !headB) return null;

    function traverse(node, target) {
        let index = 0;
        while (index < target) {
            node = node.next;
            index++;
        }
        return node;
    }

    let currA = headA, lengthOfA = 0;
    while (currA) {
        lengthOfA += 1;
        currA = currA.next;
    }

    let currB = headB, lengthOfB = 0;
    while (currB) {
        lengthOfB += 1;
        currB = currB.next;
    }
    currA = headA, currB = headB;

    if (lengthOfA > lengthOfB) {
        currA = traverse(headA, lengthOfA - lengthOfB);
    }

    if (lengthOfB > lengthOfA) {
        currB = traverse(headB, lengthOfB - lengthOfA);
    }

    let result = null;
    while (currA && currB) {
        if (currA === currB) {
            result = currA;
            break;
        }
        currA = currA.next;
        currB = currB.next;
    }
    return result;
};

// Method 2: Checks the nodes of thehttps://leetcode.com/explore/interview/card/top-interview-questions-medium/107/linked-list/785/discuss/1092898/JS-Python-Java-C++-or-Easy-O(1)-Extra-Space-Solution-w-Visual-Explanation
// Time complexity - O(m+n)
// Space complexity - O(1)
var getIntersectionNode = function (headA, headB) {
    if (!headA || !headB) return null;

    let currA = headA, currB = headB;
    while (currA !== currB) {
        currA = currA ? currA.next : headB;
        currB = currB ? currB.next : headA;
    }
    return currA;
};