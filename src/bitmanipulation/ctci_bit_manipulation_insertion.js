/**
 * You are given two 32-bit numbers, N and M, and two bit positions, i and j. Write a method
  to insert Minto N such that M starts at bit j and ends at bit i. You can assume that the bits j through
  i have enough space to fit all of M.
  @param {number} N - first binary number
  @param {number} M - second binary number
  @param {number} j - index 1
  @param {number} i index 2
  @returns {number} M placed in N from j through i
 */

function updateBits(N, M, j, i) {
  let allOnes = ~0
  let left = allOnes << (j + 1)
  let right = (1 << i) - 1
  let mask = left | right

  let n_cleared = N & mask
  let m_shifted = M << 1
  return n_cleared | m_shifted
}

console.log(updateBits(1024, 19, 6, 2))
