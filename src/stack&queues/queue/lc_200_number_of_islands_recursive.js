/*
  Leetcode: https://leetcode.com/problems/number-of-islands/

  Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
  An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

  Solution: 
    BFS recursive solution
    1. If i, j is 1, we have to check its corresponding neighbors until we find 0
    2. count number of islands

    Time complexity: O(n) where n = row*col
    Space complexity: O(n) where n = row*col
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let rows = grid.length,
    cols = grid[0].length
  let visited = {}
  let res = 0
  function fill(r, c) {
    if (
      !(
        r >= 0 &&
        r < rows &&
        c >= 0 &&
        c < cols &&
        !visited[[r, c]] &&
        grid[r][c] === '1'
      )
    ) {
      return 0
    }
    visited[[r, c]] = 1

    fill(r + 1, c)
    fill(r - 1, c)
    fill(r, c - 1)
    fill(r, c + 1)
    return undefined
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (!visited[[i, j]] && grid[i][j] !== '0') {
        fill(i, j)
        res++
      }
    }
  }
  return res
}
