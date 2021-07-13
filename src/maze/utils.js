const _ = require('lodash')

let genEmptyMaze
let randomizeDirection
let writeMaze
let setOrder
;(function () {
  genEmptyMaze = (x, y) => {
    const maze = []

    for (let i = 0; i < y; i++) {
      let row = []
      for (let j = 0; j < x; j++) {
        row.push({
          n: true,
          e: true,
          s: true,
          w: true,
          visited: false,
        })
      }
      maze.push(row)
    }
    return maze
  }

  const ORDER_1 = [
    ['e', 's', 'n', 'w'],
    ['s', 'w', 'e', 'n'],
    ['e', 'w', 'n', 's'],
    ['e', 'n', 'w', 's'],
    ['n', 'w', 's', 'e'],
    ['s', 'w', 'n', 'e'],
    ['s', 'w', 'n', 'e'],
    ['s', 'w', 'e', 'n'],
    ['n', 'w', 's', 'e'],
    ['e', 'n', 'w', 's'],
    ['s', 'e', 'w', 'n'],
    ['e', 's', 'w', 'n'],
    ['n', 'e', 's', 'w'],
    ['w', 'n', 's', 'e'],
    ['w', 'e', 's', 'n'],
    ['n', 'w', 's', 'e'],
    ['s', 'n', 'w', 'e'],
    ['s', 'w', 'n', 'e'],
    ['e', 'w', 'n', 's'],
    ['s', 'w', 'n', 'e'],
    ['s', 'e', 'n', 'w'],
    ['n', 's', 'e', 'w'],
    ['w', 'e', 's', 'n'],
    ['s', 'e', 'w', 'n'],
    ['s', 'e', 'w', 'n'],
  ]

  const ORDER_2 = [
    ['n', 's', 'w', 'e'],
    ['n', 'e', 'w', 's'],
    ['w', 'n', 'e', 's'],
    ['s', 'w', 'n', 'e'],
    ['e', 'n', 'w', 's'],
    ['e', 's', 'n', 'w'],
    ['n', 'w', 's', 'e'],
    ['n', 's', 'e', 'w'],
    ['w', 'e', 's', 'n'],
    ['w', 'e', 'n', 's'],
    ['s', 'e', 'n', 'w'],
    ['s', 'w', 'n', 'e'],
    ['n', 'w', 'e', 's'],
    ['w', 'n', 's', 'e'],
    ['n', 'w', 'e', 's'],
    ['n', 'w', 'e', 's'],
    ['s', 'e', 'w', 'n'],
    ['s', 'e', 'n', 'w'],
    ['s', 'e', 'w', 'n'],
    ['w', 's', 'e', 'n'],
    ['w', 's', 'e', 'n'],
    ['e', 'w', 'n', 's'],
    ['e', 'w', 'n', 's'],
    ['w', 's', 'e', 'n'],
    ['w', 'e', 'n', 's'],
    ['s', 'n', 'w', 'e'],
    ['n', 's', 'e', 'w'],
    ['w', 'e', 's', 'n'],
    ['n', 's', 'w', 'e'],
    ['n', 's', 'e', 'w'],
    ['w', 'e', 'n', 's'],
    ['e', 'n', 'w', 's'],
    ['e', 'n', 's', 'w'],
    ['e', 'w', 's', 'n'],
    ['e', 'n', 'w', 's'],
    ['w', 'e', 'n', 's'],
    ['n', 'w', 'e', 's'],
    ['w', 's', 'n', 'e'],
    ['w', 's', 'n', 'e'],
    ['w', 'e', 'n', 's'],
    ['s', 'n', 'w', 'e'],
    ['w', 'e', 'n', 's'],
    ['s', 'w', 'n', 'e'],
    ['n', 'e', 'w', 's'],
    ['n', 'w', 's', 'e'],
    ['s', 'n', 'e', 'w'],
    ['w', 'e', 's', 'n'],
    ['s', 'w', 'e', 'n'],
    ['n', 's', 'e', 'w'],
    ['s', 'n', 'e', 'w'],
    ['n', 'e', 'w', 's'],
    ['w', 'e', 'n', 's'],
    ['e', 'w', 's', 'n'],
    ['w', 's', 'e', 'n'],
    ['s', 'n', 'w', 'e'],
    ['w', 'e', 'n', 's'],
    ['n', 'e', 'w', 's'],
    ['n', 'e', 'w', 's'],
    ['s', 'e', 'n', 'w'],
    ['w', 'n', 's', 'e'],
    ['w', 'e', 's', 'n'],
    ['e', 's', 'w', 'n'],
    ['e', 'n', 'w', 's'],
    ['e', 'n', 's', 'w'],
  ]

  const ORDER_3 = [
    ['s', 'n', 'w', 'e'],
    ['w', 's', 'n', 'e'],
    ['s', 'n', 'w', 'e'],
    ['n', 'w', 'e', 's'],
    ['n', 's', 'w', 'e'],
    ['w', 'e', 'n', 's'],
    ['e', 's', 'n', 'w'],
    ['e', 's', 'w', 'n'],
    ['n', 'e', 'w', 's'],
    ['w', 'e', 's', 'n'],
    ['n', 'w', 's', 'e'],
    ['w', 'n', 'e', 's'],
    ['e', 'w', 'n', 's'],
    ['w', 's', 'n', 'e'],
    ['s', 'e', 'w', 'n'],
    ['s', 'e', 'n', 'w'],
    ['e', 'n', 'w', 's'],
    ['e', 's', 'n', 'w'],
    ['e', 's', 'n', 'w'],
    ['s', 'w', 'n', 'e'],
    ['w', 's', 'n', 'e'],
    ['s', 'w', 'n', 'e'],
    ['n', 's', 'e', 'w'],
    ['w', 'n', 'e', 's'],
    ['n', 'w', 's', 'e'],
    ['s', 'e', 'n', 'w'],
    ['w', 'n', 'e', 's'],
    ['e', 'w', 's', 'n'],
    ['s', 'w', 'n', 'e'],
    ['w', 'n', 'e', 's'],
    ['w', 'n', 's', 'e'],
    ['s', 'w', 'e', 'n'],
    ['s', 'n', 'w', 'e'],
    ['s', 'n', 'w', 'e'],
    ['w', 's', 'n', 'e'],
    ['e', 's', 'w', 'n'],
    ['s', 'n', 'w', 'e'],
    ['e', 's', 'n', 'w'],
    ['n', 'e', 's', 'w'],
    ['w', 'n', 's', 'e'],
    ['w', 'e', 'n', 's'],
    ['w', 's', 'n', 'e'],
    ['w', 'e', 's', 'n'],
    ['s', 'e', 'n', 'w'],
    ['e', 's', 'n', 'w'],
    ['s', 'n', 'e', 'w'],
    ['w', 'e', 's', 'n'],
    ['s', 'e', 'w', 'n'],
    ['s', 'n', 'e', 'w'],
    ['s', 'w', 'n', 'e'],
    ['e', 'w', 's', 'n'],
    ['s', 'e', 'w', 'n'],
    ['n', 's', 'e', 'w'],
    ['e', 's', 'n', 'w'],
    ['e', 'n', 'w', 's'],
    ['e', 's', 'n', 'w'],
    ['w', 'n', 'e', 's'],
    ['s', 'n', 'e', 'w'],
    ['w', 'n', 's', 'e'],
    ['n', 's', 'w', 'e'],
    ['s', 'n', 'w', 'e'],
    ['w', 'e', 's', 'n'],
    ['n', 'e', 'w', 's'],
    ['s', 'n', 'w', 'e'],
    ['e', 'w', 'n', 's'],
    ['s', 'w', 'e', 'n'],
    ['e', 'w', 's', 'n'],
    ['w', 's', 'e', 'n'],
    ['w', 's', 'n', 'e'],
    ['w', 'e', 's', 'n'],
    ['s', 'e', 'w', 'n'],
    ['s', 'e', 'w', 'n'],
    ['w', 's', 'e', 'n'],
    ['w', 's', 'e', 'n'],
    ['e', 's', 'n', 'w'],
    ['e', 'n', 's', 'w'],
    ['e', 'w', 'n', 's'],
    ['e', 'n', 'w', 's'],
    ['n', 's', 'w', 'e'],
    ['s', 'n', 'w', 'e'],
    ['e', 's', 'w', 'n'],
    ['e', 'n', 's', 'w'],
    ['n', 'w', 's', 'e'],
    ['s', 'w', 'n', 'e'],
    ['e', 'w', 'n', 's'],
    ['n', 's', 'w', 'e'],
    ['n', 's', 'w', 'e'],
    ['n', 'e', 'w', 's'],
    ['e', 'n', 's', 'w'],
    ['e', 'n', 'w', 's'],
    ['w', 'e', 'n', 's'],
    ['s', 'n', 'w', 'e'],
    ['e', 's', 'n', 'w'],
    ['n', 's', 'e', 'w'],
    ['n', 's', 'w', 'e'],
    ['w', 's', 'n', 'e'],
    ['e', 'w', 's', 'n'],
    ['n', 's', 'w', 'e'],
    ['e', 's', 'w', 'n'],
    ['w', 'e', 'n', 's'],
    ['n', 's', 'w', 'e'],
    ['s', 'n', 'w', 'e'],
    ['w', 's', 'e', 'n'],
    ['s', 'e', 'w', 'n'],
    ['n', 's', 'w', 'e'],
    ['e', 'w', 'n', 's'],
    ['n', 'e', 's', 'w'],
    ['s', 'n', 'e', 'w'],
    ['n', 'e', 's', 'w'],
    ['n', 'e', 'w', 's'],
    ['s', 'w', 'e', 'n'],
    ['e', 'w', 's', 'n'],
    ['n', 's', 'w', 'e'],
    ['w', 's', 'n', 'e'],
    ['n', 's', 'w', 'e'],
    ['w', 's', 'e', 'n'],
    ['s', 'w', 'e', 'n'],
    ['w', 'n', 's', 'e'],
    ['w', 'n', 's', 'e'],
    ['n', 'w', 'e', 's'],
    ['n', 's', 'w', 'e'],
    ['s', 'w', 'e', 'n'],
    ['s', 'w', 'n', 'e'],
    ['e', 'n', 's', 'w'],
    ['w', 'e', 'n', 's'],
    ['e', 'w', 'n', 's'],
    ['e', 'n', 's', 'w'],
    ['w', 'n', 's', 'e'],
    ['e', 'n', 's', 'w'],
    ['e', 's', 'n', 'w'],
    ['s', 'e', 'n', 'w'],
    ['n', 'w', 's', 'e'],
    ['n', 's', 'e', 'w'],
    ['s', 'n', 'e', 'w'],
    ['e', 'n', 's', 'w'],
    ['n', 'w', 'e', 's'],
    ['e', 'w', 'n', 's'],
    ['e', 's', 'w', 'n'],
    ['w', 'e', 'n', 's'],
    ['w', 'n', 's', 'e'],
    ['s', 'w', 'n', 'e'],
    ['e', 's', 'w', 'n'],
    ['n', 'w', 's', 'e'],
    ['e', 'n', 's', 'w'],
    ['n', 'w', 'e', 's'],
    ['n', 's', 'w', 'e'],
    ['w', 's', 'n', 'e'],
    ['s', 'e', 'w', 'n'],
    ['n', 'e', 'w', 's'],
    ['w', 's', 'n', 'e'],
    ['n', 'e', 's', 'w'],
    ['w', 's', 'e', 'n'],
    ['n', 'e', 's', 'w'],
    ['s', 'w', 'n', 'e'],
    ['n', 'e', 'w', 's'],
    ['w', 'e', 's', 'n'],
    ['n', 's', 'e', 'w'],
    ['w', 's', 'n', 'e'],
    ['s', 'e', 'n', 'w'],
    ['w', 'e', 'n', 's'],
    ['n', 's', 'w', 'e'],
    ['s', 'w', 'e', 'n'],
    ['s', 'w', 'e', 'n'],
    ['s', 'n', 'e', 'w'],
    ['w', 'n', 'e', 's'],
    ['w', 's', 'e', 'n'],
    ['e', 'n', 's', 'w'],
    ['s', 'n', 'e', 'w'],
    ['s', 'n', 'w', 'e'],
    ['n', 'w', 's', 'e'],
    ['s', 'n', 'w', 'e'],
    ['n', 's', 'w', 'e'],
    ['s', 'e', 'n', 'w'],
    ['e', 'n', 's', 'w'],
    ['s', 'n', 'w', 'e'],
    ['w', 's', 'e', 'n'],
    ['s', 'n', 'e', 'w'],
    ['s', 'e', 'n', 'w'],
    ['s', 'e', 'w', 'n'],
    ['s', 'w', 'n', 'e'],
    ['e', 'w', 's', 'n'],
    ['e', 's', 'w', 'n'],
    ['e', 'w', 'n', 's'],
    ['e', 'n', 'w', 's'],
    ['w', 'e', 's', 'n'],
    ['w', 's', 'n', 'e'],
    ['e', 'w', 's', 'n'],
    ['s', 'w', 'e', 'n'],
    ['e', 'w', 's', 'n'],
    ['n', 's', 'e', 'w'],
    ['s', 'w', 'e', 'n'],
    ['s', 'w', 'n', 'e'],
    ['s', 'w', 'n', 'e'],
    ['s', 'e', 'n', 'w'],
    ['s', 'n', 'w', 'e'],
    ['n', 'w', 's', 'e'],
    ['e', 's', 'w', 'n'],
    ['s', 'w', 'n', 'e'],
    ['w', 'e', 's', 'n'],
    ['e', 's', 'w', 'n'],
    ['s', 'e', 'w', 'n'],
    ['e', 'w', 'n', 's'],
    ['e', 'n', 'w', 's'],
    ['s', 'w', 'n', 'e'],
    ['s', 'e', 'w', 'n'],
    ['w', 's', 'e', 'n'],
    ['e', 'n', 'w', 's'],
    ['e', 'n', 'w', 's'],
    ['e', 's', 'w', 'n'],
    ['w', 'e', 'n', 's'],
    ['n', 'w', 's', 'e'],
    ['n', 's', 'w', 'e'],
    ['w', 'n', 'e', 's'],
    ['s', 'e', 'n', 'w'],
    ['e', 'w', 'n', 's'],
    ['n', 's', 'w', 'e'],
    ['e', 's', 'w', 'n'],
    ['e', 'w', 's', 'n'],
    ['w', 'e', 'n', 's'],
    ['n', 's', 'e', 'w'],
    ['n', 'e', 's', 'w'],
    ['e', 'w', 's', 'n'],
    ['n', 'e', 'w', 's'],
    ['e', 's', 'w', 'n'],
    ['w', 's', 'e', 'n'],
  ]

  let order = ORDER_1
  let trackedOrder = []

  setOrder = num => {
    trackedOrder = []
    switch (num) {
      case 1:
        order = _.cloneDeep(ORDER_1)
        break
      case 2:
        order = _.cloneDeep(ORDER_2)
        break
      case 3:
        order = _.cloneDeep(ORDER_3)
        break
      default:
        order = null
    }
  }

  logOrder = () => console.log(JSON.stringify(trackedOrder, null, 0))

  randomizeDirection = () => {
    if (order === null) {
      const next = _.shuffle(['n', 'e', 's', 'w'])
      trackedOrder.push(next)
      return next
    } else if (order.length) {
      return order.shift()
    } else {
      console.warn(
        "🚨 warning: you've called randomizeDirection more than you should have for this test; it probably won't pass the unit test 🚨",
      )
      return _.shuffle(['n', 'e', 's', 'w'])
    }
  }

  writeMaze = (maze, domNode, printCoordinates) => {
    const border = '1px solid black'
    const table = domNode
    const rows = []
    maze.forEach((row, y) => {
      const tr = document.createElement('tr')
      row.forEach((node, x) => {
        const td = document.createElement('td')
        td.className = node.visited ? '' : 'unvisited'
        td.style.borderTop = node.n ? border : void 0
        td.style.borderLeft = node.w ? border : void 0
        td.style.borderRight = node.e ? border : void 0
        td.style.borderBottom = node.s ? border : void 0
        if (printCoordinates) {
          td.innerText = `${x} ${y}`
        }
        tr.appendChild(td)
      })
      rows.push(tr)
    })
    rows.reverse().forEach(row => table.appendChild(row))
  }
})()

module.exports = {
  genEmptyMaze,
  randomizeDirection,
  writeMaze,
  setOrder,
}
