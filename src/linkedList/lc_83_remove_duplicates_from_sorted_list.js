/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (head === null) {
    return null
  }
  let curr = head.next,
    prev = head

  while (prev.next !== null) {
    if (prev.val === curr.val) {
      prev.next = curr.next
    } else {
      prev = prev.next
    }
    curr = curr.next
  }
  return head
}

/*
  Time Complexity - O(N)
  Space Complexity O(1)
*/
