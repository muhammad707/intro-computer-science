const { preorderTraversal, inorderTraversal, postorderTraversal } = require('../src/tree/dfs')

describe('tests', function () {
  const tree = {
    value: 8,
    left: {
      value: 4,
      left: {
        value: 3,
        left: {
          value: 2,
          left: null,
          right: null,
        },
        right: null,
      },
      right: {
        value: 5,
        left: null,
        right: {
          value: 7,
          left: {
            value: 6,
            left: null,
            right: null,
          },
        },
      },
    },
    right: {
      value: 12,
      left: {
        value: 10,
        left: {
          value: 9,
          left: null,
          right: null,
        },
        right: {
          value: 11,
          left: null,
          right: null,
        },
      },
    },
  }

  it('preorderTraverse', () => {
    expect(preorderTraversal(tree, [])).toEqual([
      8, 4, 3, 2, 5, 7, 6, 12, 10, 9, 11,
    ])
  })

  it('inorderTraverse', () => {
    expect(inorderTraversal(tree, [])).toEqual([
      2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
    ])
  })

  it('postorderTraverse', () => {
    expect(postorderTraversal(tree, [])).toEqual([
      2, 3, 6, 7, 5, 4, 9, 11, 10, 12, 8,
    ])
  })
})
