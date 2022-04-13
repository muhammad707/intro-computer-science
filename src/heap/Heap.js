class Heap {
  constructor(comparator = (a, b) => a - b) {
    this.array = []
    this.comparator = (i1, i2) => comparator(this.array[i1], this.array[i2])
  }

  /**
   * Insert new element
   * Time complexity - O(log n) where n is length of array
   * @param {any} value
   */

  offer(value) {
    this.array.push(value)
  }

  /**
   * Swap two elements in heap
   * @param {number} i
   * @param {number} j
   */

  swap(i, j) {
    ;[this.array[i], this.array[j]] = [this.array[j], this.array[i]]
  }
}
