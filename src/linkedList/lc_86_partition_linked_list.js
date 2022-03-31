const { Node, LinkedList } = require('./LinkedList')

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

function partition2(head, x) {
  let curr = head,
    runner = head

  while (runner.next !== null) {
    if (runner.value < x) {
      let node = new Node(runner.value)
      node.next = curr.next
      curr.next = node
      curr = curr.next
      console.log(runner.value)
    }
    runner = runner.next
  }
}

let node1 = new Node(1)
let node2 = new Node(4)
let node3 = new Node(3)
let node4 = new Node(2)
let node5 = new Node(5)
let node6 = new Node(2)
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = node6

const linkedList = new LinkedList(node1)
linkedList.print()
partition2(node1, 3)

linkedList.print()
