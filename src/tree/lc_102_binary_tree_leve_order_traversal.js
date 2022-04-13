/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let queue = []
  if (root === null) {
    return []
  }
  let res = []
  queue.push(root)
  while (queue.length > 0) {
    let size = queue.length
    let currentLevel = []
    for (let i = 0; i < size; i++) {
      let node = queue.shift()
      currentLevel.push(node.val)

      if (node.left !== null) {
        queue.push(node.left)
      }
      if (node.right !== null) {
        queue.push(node.right)
      }
    }
    res.push(currentLevel)
  }

  return res
}
