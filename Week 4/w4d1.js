/*
function laligatArray(array) {
  var result = [];
  for (var i = 0; i < array.length; i++){
    result.push(laligatSum(array[i]));
  }
  return result;
}

function laligatSum(num){
  var result = 0;
  for (var i = 2; i <= num; i++){
    if (isPrime(i) === true){
      result += i;
    }
    // console.log(i);
    // console.log(isPrime());
    // console.log('------------------');
  }
  return result;
}

function isPrime(num){
  if (num < 2){
    return false
  }
  for(var i = 2; i<num; i++){
    if (num%i === 0){
      return false
    }
  }
  return true
}

console.log(laligatArray([10, 11, 20, 15])); // => [ 17, 28, 77, 41 ]
console.log(laligatArray([1, 2, 3, 4, 5])); // => [ 0, 2, 5, 5, 10 ]
*/

// function isPalindrome(sentence) {
//   var letters = removeSpaces(sentence);
//   //returns an array
//   var firstHalf = letters.slice(0, Math.ceil(letters.length/2));
//   // console.log(firstHalf);
//   var secondHalf = letters.slice(Math.ceil(letters.length/2), letters.length);
//   // console.log(secondHalf);
//   for(var i = 0; )
// }

function isPalindrome(sentence){
  var letters = removeSpaces(sentence);
  for (var i = 0; i < letters.length; i++){
    var curr = letters[i]
    var otherEnd = letters.length -i;
    if (curr !== letters[otherEnd - 1]){
      return false;
    }
  }
  return true;
}

function removeSpaces(string){
  var result = string.split('');
  for(var i = 0; i < result.length; i++){
    if (result[i] === ' '){
      result[i] = null
    }
  }
  return result.join('')
}

// console.log(isPalindrome('rats live on no evil star')); // => true
// console.log(isPalindrome('stella won no wallets')); // => true
// console.log(isPalindrome('racecar')); // => true
// console.log(isPalindrome('hello world')); // => false

function moreDotLessDash(string){
  var dots = 0;
  var dashes = 0;
  var letters = string.split('');
  for (var i = 0; i < letters.length; i++){
    if (letters[i] === '.'){
      dots++;
    }else if(letters[i] === '-'){
      dashes++;
    }
  }
  if (dots > dashes){
    return true
  }
  return false
}

console.log(moreDotLessDash('2-D arrays are fun. I think.')); // => true
console.log(moreDotLessDash('.-.-.')); // => true
console.log(moreDotLessDash('.-')); // => false
console.log(moreDotLessDash('..--')); // => false
