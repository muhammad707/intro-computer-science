// create a function that accepts two paraments: an empty maze and a starting coordinate
// the maze will be an array of arrays of objects. the objects will look like:
// {
//   "n": true,
//   "e": true,
//   "s": true,
//   "w": true,
//   "visited": false
// }
//
// the outer array (that contains arrays) represents the y axis. the inner arrays (that contains
// objects) are represent the x axis. maze[y][x]
//
// the starting coordinates will be a pair, an array of two numbers, [x, y]. the first
// number will be the x position and the second will be the y position
//
// generateMaze will return the same maze (you can operate on the parameter itself)
//
// a function called randomizeDirection is globally available. it will return to you an array of
// ['n', 'e', 's', 'w'] in random order. in order to be able unit test this, these return values
// are pre-determined. if you want to have a truly random return, call setOrder(null) (another
// globally available function.) if you call it too frequently to pass the unit test, you'll see an
// error in the console.
//
// it will also attempt to draw your maze as you write your algorithm. you'll see two lines for each
// cell since neighbors each has its own walls. writeMaze assumes your data is well formatted . if you
// have unvisted cells, they'll be highlighted in red
//
// if you'd like to see the utlities functions, they're kept in this CodePen:
// https://codepen.io/btholt/pen/bLEryO?editors=0010
//
// I highly suggest you work on one unit test at a time. Mark the others `xit('...', () => ...)` instead of
// `it('...', () => ...)` so they won't run.
const {randomizeDirection} = require('./utils')
const generateMaze = (maze, [xStart, yStart]) => {
  nextNode(xStart, yStart, maze)
  return maze
}

const getModifier = key => {
  if (key === 'n') {
    return [0, 1]
  }
  if (key === 's') {
    return [0, -1]
  }
  if (key === 'e') {
    return [1, 0]
  }
  return [-1, 0]
}

const getOpposite = key => {
  if (key === 'n') {
    return 's'
  }
  if (key === 's') {
    return 'n'
  }
  if (key === 'e') {
    return 'w'
  }
  return 'e'
}

const nextNode = (x, y, maze) => {
  const node = maze[y][x];
  node.visited = true;
  randomizeDirection().forEach(direction => {
    const [xMod, yMod] = getModifier(direction)

    if (maze[y + yMod] && maze[y + yMod][x+xMod] && !maze[y+yMod][x+xMod].visited) {
      node[direction] = false
      maze[y + yMod][x+xMod][getOpposite(direction)] = false
      nextNode(x+xMod, y+yMod, maze)
    }
  })
  return false;
}

module.exports = generateMaze;