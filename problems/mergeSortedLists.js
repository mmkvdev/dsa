/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * https://leetcode.com/problems/merge-two-sorted-lists/
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let newList = new ListNode();
    let tmp = newList;

    while (list1 && list2) {
        if (list1.val > list2.val) {
            tmp.next = list2;
            list2 = list2.next;
        } else {
            tmp.next = list1;
            list1 = list1.next;
        }

        tmp = tmp.next;
    }

    tmp.next = list1 || list2;

    return newList.next;
};
