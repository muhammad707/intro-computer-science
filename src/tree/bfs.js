const breadthFirstTraverse = (queue, array) => {

  if (!queue || !queue.left) return array;
  while (queue.length) {
    const elem = queue.shift()
    array.push(elem.value)
    if (elem.left) queue.push(elem.left)
    if (elem.right) queue.push(elem.right)
  }
  return array
}

module.exports = breadthFirstTraverse
