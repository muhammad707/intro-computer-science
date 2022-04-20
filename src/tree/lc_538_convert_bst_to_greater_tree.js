/**
 * Leetcode Task: https://leetcode.com/problems/convert-bst-to-greater-tree/
 *
 * Description: Given the root of a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus the sum of all keys greater than the original key in BST.
 *
 * Solution:
 *  1. Traverse every node of the tree and update its value. Given original + sum of all keys greater than original key, we have to look at right child nodes.
 * keep global value to store sum of values of node and update every visited node by adding total to original key
 * 1. Go right
 * 2. Update value
 * 3. Go left
 *
 * Time complexity - O (n) (we are visiting every node of tree)
 * Space complexity - O (n)
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Recursive solution
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function (root) {
  let sum = 0
  let prev = null
  function rec(root) {
    if (root === null) {
      return 0
    }
    rec(root.right, sum)
    console.log(root)
    sum += root.val
    root.val = sum
    rec(root.left, sum)
  }

  rec(root)
  return root
}

/**
 * Iterative Solution
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function (root) {
  let total = 0
  let stack = []
  let node = root

  while (node || stack.length > 0) {
    while (node) {
      stack.push(node)
      node = node.right
    }

    node = stack.pop()
    total += node.val
    node.val = total

    node = node.left
  }

  return root
}
