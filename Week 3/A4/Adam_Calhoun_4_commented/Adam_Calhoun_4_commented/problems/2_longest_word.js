/*******************************************************************************
Write a function longestWord(sentence) that retuns the longest word of a sentence.
If there are ties, the function should return the later word.

Examples:

longestWord('app academy is cool'); // => 'academy'
longestWord('hate having hungry hippos'); // => 'hippos'
longestWord('bootcamp'); // => 'bootcamp'
longestWord(''); // => ''
*******************************************************************************/

function longestWord(sentence) {
  var split = sentence.split(" ");
  var long = '';
  for(var i = 0; i < split.length; i++){
    var word = split[i];
    if (word.length >= long.length){
      long = word;
    }
  }
  return long;
}

// Nice maxValue strategy! -AZ

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = longestWord;
