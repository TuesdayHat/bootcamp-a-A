/*******************************************************************************
Write a function isPalindrome(sentence) that returns true if the characters of the
sentence string form a palindrome, false otherwise. A palindrome is a word or
phrase that is that is the same forwards and backwards.

Examples:

isPalindrome('rats live on no evil star'); // => true
isPalindrome('stella won no wallets'); // => true
isPalindrome('racecar'); // => true
isPalindrome('hello world'); // => false
*******************************************************************************/
//attempt the first, without looping


function isPalindrome(sentence) {
  var letters = sentence.split(' ');
  var firstHalf = letters.splice(0, Math.floor(letters.length/2));
  var secondHalf = letters.splice(Math.floor(letters.length/2), 0);
  if (firstHalf === secondHalf){
    return true
  }
  // else {
  //   return false
  // }
}


//second attempt

// function isPalindrome(sentence){
//   var letters = sentence.split(' ');
//   for (var i = 0; i < letters.length; i++){
//     var curr = letters[i]
//     var otherEnd = letters.length -i;
//     if (curr !== letters[otherEnd - 1]){
//       return false;
//     }
//   }
//   return true;
// }


//third attempt
function isPalindrome(sentence){
  var letters = removeSpaces(sentence);
  for (var i = 0; i < letters.length; i++){
    var curr = letters[i] // missing semicolon -AZ
    var otherEnd = letters.length -i;
    if (curr !== letters[otherEnd - 1]){
      return false;
    }
  }
  return true;
}

// Nice!!!! Well written and great helper function design. -AZ


function removeSpaces(string){
  var result = string.split('');
  for(var i = 0; i < result.length; i++){
    if (result[i] === ' '){
      result[i] = null  // missing semicolon -AZ
    }
  }
  return result.join('')
}
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = isPalindrome
