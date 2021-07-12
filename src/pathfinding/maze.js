const NO_ONE = 0
const BY_A = 1
const BY_B = 2

findShortestPathLength = (maze, [xA, yA], [xB, yB]) => {
  const visited = maze.map((row, y) => {
    return row.map((point, x) => {
      return {
        closed: point === 1,
        length: 0,
        openedBy: NO_ONE,
        x,
        y,
      }
    })
  })

  visited[yA][xA].openedBy = BY_A
  visited[yB][xB].openedBy = BY_B

  let aQueue = [visited[yA][xA]]
  let bQueue = [visited[yB][xB]]
  let iteration = 0

  while (aQueue.length && bQueue.length) {
    iteration++
    const aNeighbors = aQueue.reduce((acc, neighbor) => {
      return acc.concat(getNeighbors(visited, neighbor.x, neighbor.y))
    }, [])
    aQueue = []
    for (let i = 0; i < aNeighbors.length; i++) {
      const neighbor = aNeighbors[i]
      if (neighbor.openedBy === BY_B) {
        return neighbor.length + iteration
      } else if (neighbor.openedBy === NO_ONE) {
        neighbor.length = iteration
        neighbor.openedBy = BY_A
        aQueue.push(neighbor)
      }
    }

    const bNeighbors = bQueue.reduce((acc, neighbor) => {
      return acc.concat(getNeighbors(visited, neighbor.x, neighbor.y))
    }, [])
    bQueue = []
    for (let i = 0; i < bNeighbors.length; i++) {
      const neighbor = bNeighbors[i]
      if (neighbor.openedBy === BY_A) {
        return neighbor.length + iteration
      } else if (neighbor.openedBy === NO_ONE) {
        neighbor.length = iteration
        neighbor.openedBy = BY_B
        bQueue.push(neighbor)
      }
    }
  }

  return -1
}

const getNeighbors = (visited, x, y) => {
  const neighbors = []
  if (y - 1 >= 0 && !visited[y - 1][x].closed) {
    // left
    neighbors.push(visited[y - 1][x])
  }

  if (y + 1 < visited.length && !visited[y + 1][x].closed) {
    // right
    neighbors.push(visited[y + 1][x])
  }

  if (x + 1 < visited[0].length && !visited[y][x + 1].closed) {
    // down
    neighbors.push(visited[y][x + 1])
  }
  if (x - 1 >= 0 && !visited[y][x - 1].closed) {
    // up
    neighbors.push(visited[y][x - 1])
  }
  return neighbors
}

module.exports = {
  findShortestPathLength,
}
