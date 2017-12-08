/*******************************************************************************
Write a function `hipsterfy(sentence)` that takes takes a string containing
several words as input. Remove the last vowel from each word. 'y' is not a vowel.

Examples:

hipsterfy("proper"); // => "propr"
hipsterfy("proper tonic panther"); // => "propr tonc panthr"
hipsterfy("towel flicker banana"); // => "towl flickr banan"
hipsterfy("runner anaconda"); // => "runnr anacond"
hipsterfy("turtle cheeseburger fries"); // => "turtl cheeseburgr fris"
*******************************************************************************/

function hipsterfy (string){
  var words = string.split(' ');
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    words[i] = makeHip(word);
  }
  return words.join(' ');
}

// Nice use a of a helper function here -AZ

function makeHip (word){
  var vowels = "aeiou".split('');
  var letters = word.split('');
  for(i = letters.length; i > -1; i--){ // use var to declare variables, `var i = ...`
    if (vowels.indexOf(letters[i]) > -1){
      letters[i] = null //this feels like it shouldn't work, but it does.
      return letters.join('')
    }
  }
}

// Very interesting use of `null` here!
//
// Yep, it seems to be the case that when we join any null values in an array,
// they will be treated as empty:
//
// var arr = ['hello', null, 'world'];
// arr.join(' '); // => 'hello world';
//
// Very cool! Apparently this is also true for `undefined`.-AZ

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = hipsterfy;
