/**
 *
 * Tree node
 * @param {any} value - Node value
 * @param {TreeNode} left - Link to left child
 * @param {TreeNode} right - Link to right child
 */

class TreeNode {
  constructor(val) {
    this.value = val
    this.left = null
    this.right = null
  }
}

/**
 * Represents Tree
 * @constructor
 * @param {TreeNode} root - Root of tree
 */
class Tree {
  constructor(root = null) {
    this.root = root
  }

  inorderTraversal(node, array) {
    console.log(array, node)
    if (node === null) {
      return array
    }
    array = this.inorderTraversal(node.left, array)
    array.push(node.value)
    array = this.inorderTraversal(node.right, array)
    return array
  }

  preorderTraversal(node, array) {
    if (node !== null) {
      return array
    }
    array.push(node.val)
    array = this.preorderTraversal(node.left)
    array = this.preorderTraversal(node.right)
    return array
  }

  postorderTraversal(node, array) {
    if (node !== null) {
      return array
    }
    array = this.postorderTraversal(node.left)
    array = this.postorderTraversal(node.right)
    array.push(node.val)
    return array
  }

  print(array) {
    console.log(array.join('->'))
  }
}

module.exports = {
  TreeNode,
  Tree,
}
