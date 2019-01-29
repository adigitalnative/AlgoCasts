// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// // My first Version
// function intToArray(n) {
//   return n.toString().split('')
// }
//
// function reverseInt(n) {
//   const array = intToArray(n)
//
//   if (array[0] === '-') {
//     // Reverse the length and add the - to the front
//
//     // .reverse() and .unshift() are destructive,
//     // and unshift returns LENGTH of new array not the array.
//     array.reverse().unshift('-')
//
//     // make the array into a string, and return the integer version
//     return parseInt(array.join(''))
//   } else {
//     // Return the integer version of the reversed array
//     return parseInt(array.reverse().join(''))
//   }
//
// }


// After pointing out 'Array.sign()' and -intValue returns the neg version of int
function reverseInt(n) {
  // Reverse the integer
  const reversed = parseInt(n.toString().split('').reverse().join(''))

  // If the value of n is negative, return negative version of reversed value.
  // If it is positive or 0, return the reversed value
  return Math.sign(n) === 1 || Math.sign(n) === 0 ? reversed : -reversed
}

module.exports = reverseInt;
