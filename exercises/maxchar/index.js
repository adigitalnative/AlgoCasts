// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

  // // My Solution
  // let map = {}
  // let maxChar = {
  //   char: "",
  //   value: 0
  // }
  //
  // str.split('').forEach(char => {
  //   map[char] ? map[char] += 1 : map[char] = 1
  // })
  //
  // Object.keys(map).forEach(char => {
  //   if(map[char] > maxChar.value) {
  //     maxChar.char = char
  //     maxChar.value = map[char]
  //   }
  // })
  //
  // return maxChar.char

  //Given Solution
  const charMap = {}
  let max = 0
  let maxChar = ""

  for(const char of str) {
    charMap[char] = charMap[char] + 1 || 1 // Cool way to do this without an if stmt

    if(charMap[char] > max) {
      max = charMap[char]
      maxChar = char
    }
  }

  return maxChar
}

module.exports = maxChar;
