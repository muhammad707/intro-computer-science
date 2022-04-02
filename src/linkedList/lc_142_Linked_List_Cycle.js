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
var getIntersectionNode = function (headA, headB) {
  let res1 = getTailAndSize(headA)
  let res2 = getTailAndSize(headB)

  if (res1.tail !== res2.tail) {
    return null
  }

  let shorter = res1.size <= res2.size ? headA : headB
  let longer = res1.size > res2.size ? headA : headB
  console.log(shorter)
  console.log(longer)
  longer = getKthNode(longer, Math.abs(res1.size - res2.size))

  while (shorter !== longer) {
    shorter = shorter.next
    longer = longer.next
  }

  return longer
}

function getTailAndSize(head) {
  if (head === null) {
    return null
  }

  let size = 1,
    curr = head

  while (curr.next !== null) {
    size++
    curr = curr.next
  }

  return {
    size,
    tail: curr,
  }
}

function getKthNode(head, k) {
  let curr = head
  while (k > 0 && curr !== null) {
    curr = curr.next
    k--
  }
  return curr
}
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let slow = head,
    fast = head
  if (head === null || head.next === null) {
    return null
  }

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next
    slow = slow.next
    if (fast === slow) {
      break
    }
  }

  while (head !== fast && fast !== null) {
    head = head.next
    fast = fast.next
  }

  return fast
}
