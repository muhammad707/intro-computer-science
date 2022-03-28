class Node {
  constructor(val, next = null) {
    this.value = val
    this.next = next
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head
  }

  size() {
    let node = this.head
    let count = 0

    while (node !== null) {
      count++
      node = node.next
    }

    return count
  }

  clear() {
    this.head = null
  }

  getFirst() {
    return this.head
  }

  getValueFromIndex(idx) {
    let i = 1
    let node = this.head
    while (node !== null && i < idx) {
      node = node.next
      i++
    }

    return node.value
  }

  addValueToHead(val) {
    let newNode = new Node(val)

    if (this.head) {
    }
  }

  print() {
    let node = this.head
    let list = []
    while (node) {
      list.push(node.value)
      node = node.next
    }

    return list.join('->')
  }
}

let node1 = new Node(5)
let node2 = new Node(4)
let node3 = new Node(2)
let node4 = new Node(10)
let node5 = new Node(56)
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

let linkedList = new LinkedList(node1)

console.log(linkedList.print())
console.log(linkedList.getValueFromIndex(3))
