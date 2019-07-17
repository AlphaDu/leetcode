/**
 * Definition for singly-linked list.

 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let lenA = 0
    let lenB = 0
    let pA = headA
    let pB = headB
    while (pA || pB) {
        if (pA) { lenA ++ }
        if (pB) { lenB ++ }
    }

    pA = headA
    pB = headB

    let step = Math.abs(lenA - lenB)
    for (let i = 0;i < step; i ++) {

        if (lenA > lenB) {
            pA = pA.next
        } else {
            pB = pB.next
        }

    }

    while (pA && pB) {

        if (pA === pB) {
            return pA
        } else {
            pA = pA.next
            pB = pB.next

        }
    }

    return null
};
