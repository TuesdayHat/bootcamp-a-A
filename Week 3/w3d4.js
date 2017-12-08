//science experiment
//spits out multiple lines of numbers, where each line describes the previous one
//exmaple:
// 1
// 11
// 21
// 1211
// 111221
// 312211 and so on. Lines determines how many iterations to do

// function description (num, lines) {
//   var arrLines = [num];
//   for (var i = 0; i < lines; i++){
//     var count = counter(arrLines);
//   }
// }
//
// function counter (array, num) {
//   if()
// }


/***************Problem Set******************/

function favoriteWord (letter, sentence){
  var words = sentence.split(' ');
  var favorite = words[0];
  for(var i = words.length-1; i > -1; i--){
    var word = words[i];
    if (wordCounter(letter, word) >= wordCounter(letter, favorite)){
      favorite = word;
    }
  }
  if (sentence.indexOf(letter) === -1){
    return '';
  }
  return favorite;
}

function wordCounter (letter, word){
  var counter = 0;
  for (var i = 0; i < word.length; i++) {
    var char =word[i];
    if (char === letter){
      counter++;
    }
  }
  return counter;
}

// console.log(favoriteWord('p', 'sinful caesar sipped his snifter')) // => 'sipped'
// console.log(favoriteWord('a', 'sinful caesar sipped his snifter')) //=> 'caesar'
// console.log(favoriteWord('x', 'sinful caesar sipped his snifter')) //=> ''
// console.log(favoriteWord('s', 'sinful caesar sipped his snifter')) //=> 'sinful'


function mindPsAndQs (str){
  var longest = 0;
  var streak = 0;
  for(var i = 0; i<str.length; i++){
    if (str[i] === 'P' || str[i] === 'Q'){
      streak++
      if (streak > longest){
        longest = streak;
      }
    } else {
      //streak broke
      streak = 0
    }
  }
  return longest
}

console.log(mindPsAndQs('BOOTCAMP')); // => 1
console.log(mindPsAndQs('APCDQQPPC')); // => 4
console.log(mindPsAndQs('PQPQ')); // => 4
console.log(mindPsAndQs('PPPXQPPPQ')); // => 5
