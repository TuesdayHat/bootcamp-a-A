/*******************************************************************************
Write a function reverseRange(start, end) that returns an array that contains all
numbers between 'start' and 'end' (exclusive) in reverse-sequential order. Use a
loop to do this.

Examples:

range(2,7) => [6, 5, 4, 3]
range(4,2) => []
*******************************************************************************/

function reverseRange(start, end) {
  array = [];
  for (var i = end-1; i> start; i--){
    array.push(i);
  }
  return array
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverseRange;
