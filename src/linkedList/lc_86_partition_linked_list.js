/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

// Space Complexity - O(N) Time Complexity - O(N)
var partition = function (head, x) {
  let left = null,
    right = null,
    curr = head,
    leftHead = null,
    rightHead = null
  while (curr !== null) {
    if (curr.val < x) {
      if (left === null) {
        left = new ListNode(curr.val)
        leftHead = left
      } else {
        left.next = new ListNode(curr.val)
        left = left.next
      }
    } else {
      if (right === null) {
        right = new ListNode(curr.val)
        rightHead = right
      } else {
        right.next = new ListNode(curr.val)
        right = right.next
      }
    }
    curr = curr.next
  }
  if (left === null) {
    return rightHead
  }
  left.next = rightHead

  return leftHead
}
