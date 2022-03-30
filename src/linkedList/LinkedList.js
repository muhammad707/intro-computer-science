class Node {
  constructor(val) {
    this.value = val
    this.next = null
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

    if (!this.head) {
      this.head = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
  }

  addValueToTail(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
    } else {
      let node = this.head
      while (node.next !== null) {
        node = node.next
      }
      node.next = newNode
    }
  }

  addValueByIndex(idx, val) {
    let curr = this.head
    let prev = null
    let i = 1

    while (curr.next !== null && i < idx) {
      prev = curr
      curr = curr.next
      i++
    }
    let newNode = new Node(val)
    prev.next = newNode
    newNode.next = curr
  }

  deleteHead() {
    this.head = this.head.next
  }

  deleteTail() {
    let prev = null
    let curr = this.head

    while (curr.next !== null) {
      prev = curr
      curr = curr.next
    }
    prev.next = null
  }

  deleteNodeByIndex(idx) {
    let prev = null
    let curr = this.head
    let i = 1
    while (curr.next !== null && i < idx) {
      prev = curr
      curr = curr.next
      i++
    }
    prev.next = curr.next
  }

  print() {
    let node = this.head
    let list = []
    while (node) {
      list.push(node.value)
      node = node.next
    }

    console.log(list.join('->'))
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

module.exports = {
  Node,
  LinkedList,
}
