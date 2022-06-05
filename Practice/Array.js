const strings = ['a', 'b', 'c', 'd']

// access - O(1)
console.log(strings[1])

// push - O(1)
strings.push('e')
console.log(strings)

// pop - O(1)
strings.pop()
console.log(strings)

// insert - O(n)
strings.unshift('x')
console.log(strings)

// insert in middle - O(n)
strings.splice(2, 1, 'hi', 'hello');
console.log(strings)

