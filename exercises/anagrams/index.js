// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


// V2: Sort the thing!
function anagrams(stringA, stringB) {
  return cleanAndSortString(stringA) === cleanAndSortString(stringB)

}

function cleanAndSortString(string) {
  return string.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}

// //V1
//
// function toMap(string) {
//   const charMap = {}
//
//   for(const char of string) {
//     charMap[char] = charMap[char] + 1 || 1
//   }
//
//   return charMap
// }
//
// function anagrams(stringA, stringB) {
//   cleanA = cleanString(stringA)
//   cleanB = cleanString(stringB)
//
//   if (cleanA.length !== cleanB.length) {
//     return false
//   } else {
//
//     const aCharMap = toMap(cleanA)
//     const bCharMap = toMap(cleanB)
//
//     for (let char in aCharMap) {
//       if (aCharMap[char] !== bCharMap[char]) {
//         return false
//       }
//     }
//
//     return true
//   }
//
//
// }
//
// function cleanString(string) {
//   return string.replace(/[^\w]/gi, '').toLowerCase()
// }



module.exports = anagrams;
