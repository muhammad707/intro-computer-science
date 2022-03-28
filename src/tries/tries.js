// in order to pass the unit tests, you will need to create a function called createTrie that accepts a list of strings
// as a parameter and returns an object with a method on it called "`complete`. complete is a method that when called
// with a string will return an array of up to length three that are autocompleted suggestions of how to finish that string.
// for the sake of this exercise, it does not matter which order these strings are returned in or if there are more than three
// possible suggestions, which three you choose
//
// feel free to see the dataset here:  https://codepen.io/btholt/pen/jZMdmp
//
// I suggest working on one unit test at a time, use `xit` instead of `it` to not run unit tests
// the edge cases are for fun and for this exercise you don't necessarily need to pass them

class Node {
  children = []
  value = ''
  terminus = false
  constructor(string) {
    this.value = string[0] || ''
    if (string.length > 1) {
      this.children.push(new Node(string.substr(1)))
    } else {
      this.terminus = true
    }
  }

  add(string) {
    const value = string[0]
    const next = string.substr(1)
    for (let i = 0; i < this.children.length; i++) {
      const child = this.children[i]
      if (child.value === value) {
        if (next) {
          child.add(next)
        } else {
          child.terminus = true
        }
        return
      }
    }
    this.children.push(new Node(string))
  }
  // you don't have to use this data structure, this is just how I did it
  // you'll almost definitely need more methods than this and a constructor
  // and instance variables
  _complete(search, built, suggestions) {
    if (suggestions.length >= 3 || (search && search[0] !== this.value)) {
      return suggestions
    }
    if (this.terminus) {
      suggestions.push(`${built}${this.value}`)
    }
    this.children.forEach(child =>
      child._complete(search.substr(1), `${built}${this.value}`, suggestions),
    )
    return suggestions
  }
  complete(string) {
    return this.children
      .map(child => child._complete(string, '', []))
      .reduce((acc, item) => acc.concat(item))
  }
}

const createTrie = words => {
  // you do not have to do it this way; this is just how I did it
  const root = new Node('')
  words.forEach(word => root.add(word.toLowerCase()))
  // more code should go here

  return root
}

module.exports = createTrie;