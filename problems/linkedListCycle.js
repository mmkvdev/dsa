/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * https://leetcode.com/problems/linked-list-cycle/ 
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let current = head;
    let prev = head;

    while (current && current.next) {
        current = current.next.next;
        prev = prev.next;

        if (current === prev) return true;
    }

    return false;
};
