function returnKthToLast(head, k) {
  let curr = head
  let runner = head

  while (k-- > 1) {
    runner = runner.next
  }
  while (runner.next !== null) {
    runner = runner.next
    curr = curr.next
  }

  return curr.value
}

module.exports = {
  returnKthToLast,
}
