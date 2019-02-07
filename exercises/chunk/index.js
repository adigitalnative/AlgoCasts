// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {


  // // V1
  // let chunked = []
  //
  // for(const element of array) {
  //   const last = chunked[chunked.length - 1]
  //
  //   if(!last || last.length === size) {
  //     chunked.push([element])
  //   } else {
  //     last.push(element)
  //   }
  // }
  //
  // return chunked

  // V2

  let chunked = []
  let index = 0

  while(index < array.length) {
    chunked.push(array.slice(index, index + size))
    index += size
  }
  return chunked

  // while the index is less than array.length
    // slice the array at index + size
    // iterate index by size

}

module.exports = chunk;
