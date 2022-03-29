const { Node, LinkedList } = require('./LinkedList')
const { returnKthToLast } = require('./ctci_2_linked_list_return_kth_to_last')
let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(6)
let node4 = new Node(3)
let node5 = new Node(1)
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

describe('Return 2nd element to last', () => {
  it('value should be 3', () => {
    expect(returnKthToLast(node1, 2)).toEqual(3)
  })
  it('value should be 6', () => {
    expect(returnKthToLast(node1, 3)).toEqual(6)
  })
})
