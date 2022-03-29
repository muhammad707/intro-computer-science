const { Node, LinkedList } = require('./LinkedList')
const {
  removeDups,
  removeDupsWithoutExtraSpace,
} = require('./ctci_2_linked_list_remove_dups')

let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)
let node4 = new Node(3)
let node5 = new Node(1)
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

let linkedList = new LinkedList(node1)
removeDups(node1)

describe('Remove duplicates from linked list', () => {
  xit('size of linked list should be 3', () => {
    expect(linkedList.size()).toEqual(3)
    expect(linkedList.getValueFromIndex(3)).toEqual(3)
  })
})

describe('Remove duplicates from linked list without using extra space', () => {
  it('size of linked list should be 3', () => {
    expect(linkedList.size()).toEqual(3)
    expect(linkedList.getValueFromIndex(3)).toEqual(3)
  })
})
