const { Node } = require('../linkedList/LinkedList')
const { TreeNode } = require('./Tree')

/**
 * @param {TreeNode} root - Reference to root of tree
 * @returns {Array} Array of Linked Lists that are created in BFS
 */
function listOfDepth(root) {
  let queue = [],
    res = []
  if (root === null) {
    return null
  }

  queue.push(root)

  while (queue.length > 0) {
    let size = queue.length
    let head = new Node(0)
    let curr = head
    for (let i = 0; i < size; i++) {
      let node = queue.shift()
      curr.next = new Node(node.value)
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
      curr = curr.next
    }
    res.push(head.next)
  }

  return res
}
