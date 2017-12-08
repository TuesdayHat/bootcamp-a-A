/******************************************************************************
Write a function unique(array) that returns an array where all the duplicates
of the input array have been removed; in other words, every element remaining
is unique.

Hint: use indexOf

Example:
unique([1, 1, 2, 3, 3]) => [1, 2, 3]
*******************************************************************************/

function unique(array) {
  var result = [];
  for (i = 0; i < array.length; i++){
    if(result.indexOf(array[i]) > -1){
      continue
    } else {
      result.push(array[i])
    }
  }
  return result

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = unique
