// Time complexity - O(N), Space Complexity - O(N)
function removeDups(head) {
  let map = {}
  let curr = head
  let prev = null
  while (curr !== null) {
    if (map[curr.value]) {
      prev.next = curr.next
    } else {
      map[curr.value] = 1
      prev = curr
    }
    curr = curr.next
  }
}

// Time complexity - O(N^2) Space complexity - O(1)

function removeDupsWithoutExtraSpace(head) {
  let curr = head

  while (curr !== null) {
    let runner = curr

    while (runner.next !== null) {
      if (runner.next.value === curr.value) {
        runner.next = runner.next.next
      } else {
        runner = runner.next
      }
    }
    curr = curr.next
  }
}

module.exports = {
  removeDups,
  removeDupsWithoutExtraSpace,
}
