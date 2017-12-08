// 10/10 specs passed
//
// Hey Adam, find my comments marked with `-AZ`
// Excellent work! Code is looking very sharp overall.
// In particular, be sure to use semicolons.

/*******************************************************************************
Write a function reverseRange(start, end) that returns an array that contains all
numbers between 'start' and 'end' (exclusive) in reverse-sequential order. Use a
loop to do this.

Examples:

range(2,7) => [6, 5, 4, 3]
range(4,2) => []
*******************************************************************************/

function reverseRange(start, end) {
  // Use the var keyword when declaring varianles, otherwise something particular is
  // happening that can lead to bugs. More on this topic later in the course -AZ
  // var array = [];
  array = [];
  for (var i = end-1; i> start; i--){
    array.push(i);
  }
  return array  // semicolon -AZ
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverseRange;
