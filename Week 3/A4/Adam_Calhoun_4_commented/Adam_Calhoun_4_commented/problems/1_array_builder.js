// 7/7 specs passed
//
// Hey Adam, find my comments marked with `-AZ`
// Excellent work. Your code is looking very sharp overall!
//
/*******************************************************************************
Write a function `arrayBuilder(count)` that takes in a count object and returns
an array filled with the appropriate numbers of elements. The order of
the elements in the array does not matter, but repeated elements should be
grouped.

Examples:

arrayBuilder({'cats': 2, 'dogs': 1}); //=> ['cats', 'cats', 'dogs']
arrayBuilder({}); //=> []
*******************************************************************************/

function arrayBuilder(count) {
  //count will be an object
  var result = [];
  for (var key in count){
    var num = count[key];
    for (i = 0; i < num; i++){  // `var i = 0 ...` -AZ
      result.push(key);
    }
  }
  return result;

}

// Perfect! Great style here as well!
// Don't forget to use the `var` keyword when declaring variables, otherwise
// the variable will be part of the global scope. More on this topic later in
// week 3 -AZ


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = arrayBuilder;
