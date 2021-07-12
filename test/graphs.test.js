const findMostCommonTitle = require('../src/graphs/graphs')
const { getUser } = require('../src/data/users')

describe('findMostCommonTitle', function () {
  it('user 30 with 2 degrees of separation', () => {
    expect(findMostCommonTitle(30, getUser, 2)).toBe('Librarian')
  })

  it('user 11 with 3 degrees of separation', () => {
    expect(findMostCommonTitle(11, getUser, 3)).toBe('Graphic Designer')
  })

  it('user 307 with 4 degrees of separation', () => {
    // if you're failing here with "Clinical Specialist, you're probably not filtering users who
    // appear more than once in people's connections
    expect(findMostCommonTitle(306, getUser, 4)).toBe('Environmental Tech')
  })
})
