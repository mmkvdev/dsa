/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    // finding the mid point of the linked list
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // second half is the node after the midpoint of the list
    let secondHalf = slow.next;

    // disconnect both the halves
    slow.next = null;

    let prev = null;

    // reverse the second half
    while (secondHalf) {
        let tmp = secondHalf.next;
        secondHalf.next = prev;
        prev = secondHalf;
        secondHalf = tmp;
    }

    let firstHalf = head;

    // merge both the halves alternatively
    while (prev) {
        let temp1 = firstHalf.next;
        let temp2 = prev.next;

        firstHalf.next = prev;
        prev.next = temp1;
        firstHalf = temp1;
        prev = temp2;
    }
};
