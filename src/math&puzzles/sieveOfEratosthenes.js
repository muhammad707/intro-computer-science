/**
 * Find all prime numbers less or equal to certain number
 * @param {number} num - maximum number which all prime numbers are supposed to be found until
 * @returns {array}
 */

function sieveOfEratosthenes(num) {
  let flags = Array(num + 1).fill(false)
  let count = 0
  let prime = 2
  init(flags)
  while (prime <= Math.sqrt(num)) {
    crossOff(flags, prime)
    prime = getNextPrime(flags, prime)
  }

  return flags
}

/**
 * Function sets all flags to true other than 0 and 1
 * @param {array} flags - boolean array
 * @returns {void}
 */
function init(flags) {
  for (let i = 2; i < flags.length; i++) {
    flags[i] = true
  }
}

/**
 * Cross off remaining multiples of prime.
 * @param {array} flags - boolean array that needs to be crossed
 * @param {number} prime - prime number that all exponents are crossed off
 * @returns {void}
 */

function crossOff(flags, prime) {
  for (let k = prime * prime; k < flags.length; k += prime) {
    flags[k] = false
  }
}

/**
 * Get next prime number that is less than maximum
 * @param {array} flags
 * @param {number} prime
 * @returns {number}
 */

function getNextPrime(flags, prime) {
  let next = prime + 1

  while (next < flags.length && !flags[next]) {
    next++
  }
  return next
}

let primes = sieveOfEratosthenes(50)
let arr = []
for (let i = 2; i < primes.length; i++) {
  if (primes[i]) {
    arr.push(i)
  }
}

console.log(arr)
