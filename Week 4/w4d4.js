function longestBigram(sentence){
  var longest = ['', ''];
  var words = sentence.split(' ');
  for (var i = 0; i< words.length-1; i++){
    var word1 = words[i];
    var word2 = words[i + 1];
    // console.log(word1, word2);
    if ((word1.length + word2.length) > (longest[0].length + longest[1].length)){
      longest = [words[i], words[i+1]];
    }
  }
  return longest.join(' ');
}

// console.log(longestBigram('measure twice cut once')); // => 'measure twice'
// console.log(longestBigram("One must have a mind of winter")); // => 'must have'
// console.log(longestBigram("go home to eat")); // => 'go home'
// console.log(longestBigram("his last assessment is fun")); // => 'last assessment'

function maxAdjacentSum(arr){
  var max = 0;
  for (var i = 0; i<arr.length; i++){
    var num1 = arr[i];
    var num2 = arr[i+1];
    if ((num1+num2) > max){
      max = num1+num2
    }
  }
  return max
}

// var arr1 = [5, 6, 11, 3];
// console.log(maxAdjacentSum(arr1)); // => 17
//
// var arr2 = [3, 2, 13, 5, 4, 7];
// console.log(maxAdjacentSum(arr2)); // => 18

function opposingSums(arr){
  var result = [];
  for (var i = 0; i<(arr.length/2); i++){
    var curr = arr[i];
    var opp = arr[arr.length - (i+1)];
    result.push(curr+opp);
  }
  return result;
}

var arr1 = [3, 2, 11, 4, 7, 9];
console.log(opposingSums(arr1)); // => [ 12, 9, 15 ]

var arr2 = [1, 2, 3, 4]
console.log(opposingSums(arr2)); // => [ 5, 5 ]
