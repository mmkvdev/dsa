/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (!head || k === 0) return head;
    const { ptr: listLength, tail } = (function () {
        let tail = head;
        let ptr = 1;

        while (tail.next) {
            ptr++;
            tail = tail.next;
        }

        return { ptr, tail };
    })();

    // compute effective rotations
    let rotateBy = k % listLength;
    if (rotateBy === 0) return head;

    // finding the breakpoint
    let newTailNode = head;
    for (let i = 1; i < listLength - rotateBy; i++) {
        newTailNode = newTailNode.next;
    }

    let newHeadNode = newTailNode.next;
    newTailNode.next = null;
    tail.next = head;

    return newHeadNode;
};
