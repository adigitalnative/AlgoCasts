// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  // Using slice, one line version (but would probably break out the arrow function for readability)
  return str.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ")

  // // My first blush version
  // return str.split(" ").map(word => {
  //   array = word.split("")
  //   array[0] = array[0].toUpperCase()
  //   return array.join("")
  // }).join(" ")

}

module.exports = capitalize;
