/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

// Time Complexity - O(N) Space Complexity - O(1)
var removeNthFromEnd = function (head, n) {
  let f = head,
    s = head
  while (n-- > 0) {
    f = f.next
  }
  while (f === null) {
    return head.next
  }

  while (f.next !== null) {
    f = f.next
    s = s.next
  }

  s.next = s.next.next
  return head
}
