/*******************************************************************************
Write a function magicNumbers(max) that returns an array of numbers up to
the max. Each number should be either divisible by 4 or 6, BUT NOT BOTH.

Example:

magicNumbers(20) => [4, 6, 8, 16, 18]
*******************************************************************************/

function magicNumbers(max) {
  var array = [];
  for (var i = 0; i < max; i++){
    if ((i%4 === 0 || i%6 === 0) && i%12 !== 0){  // this condition is all you need. -AZ
      array.push(i);
    } else {    // this else statement is not needed
      continue  // since you are checking if the number is not divisible by 12,
    }           // this will automatically skip numbers divisible by both. -AZ
  }
  return array
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = magicNumbers;
