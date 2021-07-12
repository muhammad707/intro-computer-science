const preorderTraversal = (node, array) => {
  if (!node) {
    return array;
  }
  array.push(node.value)
  array = preorderTraversal(node.left, array)
  arr = preorderTraversal(node.right, array)
  return array
}

const inorderTraversal = (node, array) => {
  if (!node) {
    return array;
  }
  array = inorderTraversal(node.left, array)
  array.push(node.value)
  arr = inorderTraversal(node.right, array)
  return array
}

const postorderTraversal = (node, array) => {
  if (!node) {
    return array;
  }
  array = postorderTraversal(node.left, array)
  arr = postorderTraversal(node.right, array)
  array.push(node.value)
  return array
}


module.exports = {
  preorderTraversal,
  inorderTraversal,
  postorderTraversal
}