/**
 * Write a function to determine the number of bits you would need to flip to convertinteger A to integer B.
 * Example:
 *  Input: 29 (11101), 15 (01111)
 *  Output: 2
 *
 * Solution:
 *  In order to figure out which bits are different in two numbers is getting XOR.
 *  29 (11101) XOR 15 (01111) = 18 (10010) (number of 1s means two numbers differs two bits)
 *
 * @param {number} a - first number
 * @param {number} b - second number
 * @returns {number} - number of bits to be flipped
 */

function conversion(a, b) {
  let count = 0

  for (let c = a ^ b; c !== 0; c = c >> 1) {
    count += c & 1
  }

  return count
}

function conversionV2(a, b) {
  let count = 0

  for (let c = a ^ b; c !== 0; c = c & (c - 1)) {
    count++
  }

  return count
}

console.log(conversion(29, 15))
console.log(conversionV2(29, 15))
