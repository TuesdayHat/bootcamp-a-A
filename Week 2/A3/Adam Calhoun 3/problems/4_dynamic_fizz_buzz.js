/*******************************************************************************
Write a function that dynamicFizzBuzz(max, num1, num2) that returns an array
of numbers up to the max. Each number should be either divisible by num1 or num2,
BUT NOT BOTH.

Examples:

dynamicFizzBuzz(20, 5, 3) => [3, 5, 6, 9, 10, 12, 18]
dynamicFizzBuzz(20, 4, 6) => [4, 6, 8, 16, 18]
*******************************************************************************/

function dynamicFizzBuzz(max, num1, num2){
  var array = [];
  var common = leastCommon(num1, num2)
  //helper function that finds the least common multiple of num1 and num2
  for(i = 0; i < max; i++){
    if((i%num1 === 0 || i%num2 === 0) && i%common !== 0){
      array.push(i);
    }
  }
  return array
}

function leastCommon (num1, num2){
  for(var i = 1; i <= (num1*num2); i++){
    if (i%num1 === 0 && i%num2 === 0){
      return i
    }
  }
}
//I feel like this didn't need a helper function, but there it is.

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = dynamicFizzBuzz;
