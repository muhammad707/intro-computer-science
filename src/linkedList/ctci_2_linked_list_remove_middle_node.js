const { LinkedList, Node } = require('./LinkedList')

function removeMiddleNode(head) {
  let slow = head,
    fast = head

  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }
  if (s === null || s.next === null) {
    return false
  }
  slow.value = slow.next.value
  slow.next = slow.next.next
  return true
}

let node1 = new Node('a')
let node2 = new Node('b')
let node3 = new Node('c')
let node4 = new Node('d')
let node5 = new Node('e')
let node6 = new Node('f')
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = node6

const linkedList = new LinkedList(node1)
linkedList.print()
console.log(removeMiddleNode(node1))
linkedList.print()
