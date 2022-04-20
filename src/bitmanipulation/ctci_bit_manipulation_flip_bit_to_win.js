/**
 * You have an integer and you can flip exactly one bit from a O to a 1. Write code to
  find the length of the longest sequence of 1 s you could create.
  EXAMPLE
  Input: 1775
  Output: 8

  Solution: We need to keep the track of number of current and previous 1s sequence. When we see 0 we have to update prevLength
  1. If next bit is 1, prevLength = currentLength
  2. If next bit is 0, we cannot merge two secuences so we will set prevLength = 0

  @param {number} n - number that longest 1s should be found in
  @returns {number} length of longest consecutive 1s
 */

function flipBit(n) {
  let currentLength = 0,
    prevLength = 0,
    maxLength = 1

  while (n !== 0) {
    if ((n & 1) === 1) {
      currentLength++
    } else if ((n & 1) === 0) {
      prevLength = (a & 2) === 0 ? 0 : currentLength
      currentLength = 0
    }

    maxLength = Math.max(prevLength + currentLength, maxLength)
  }

  return maxLength
}
