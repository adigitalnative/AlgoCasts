// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // // V1 using .reverse()
  // return str.split('').reverse().join('')


  // V2 using a for loop
  let reversed = ""

  for(let char of str) {
    reversed = char + reversed
  }
  return reversed

  // // V3 using array helper
  // return str.split('').reduce((rev, char) => char + rev, '')
}

module.exports = reverse;
