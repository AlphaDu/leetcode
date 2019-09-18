/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function ListNode (val) {
  this.val = val
  this.next = null
}
var removeNthFromEnd = function(head, n) {
  let origin = new ListNode()
  origin.next = head
  const goStep = (h, n) => n === 0 ? h : goStep(h.next, n - 1)

  let slow = origin
  let fast = goStep(origin,  n)
  const isLast = head => !head.next
  while(!isLast(fast)) {
    slow = slow.next
    fast = fast.next
  }

  let deleting = slow.next
  slow.next = deleting.next
  return origin.next
};
