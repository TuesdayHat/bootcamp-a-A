/*******************************************************************************
Write a function disemvowel(string) that takes in a string and returns the
string with all vowels removed.

Examples:

disemvowel('bootcamp'); // => 'btcmp'
disemvowel('PREP'); // => 'PRP'
disemvowel('hello world'); // => 'hll wrld'
*******************************************************************************/

function disemvowel(string) {
  var vowels = 'aeiouAEIOU'.split('');
  var arrStr = string.split('');

  for(var i = 0; i<arrStr.length; i++){
    if (vowels.indexOf(arrStr[i]) > -1){
      arrStr[i] = null;
    }
  }
  return arrStr.join('');
}

// Perfect. 


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = disemvowel;
