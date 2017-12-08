function longWordCount(string) {
  var array = string.split(" ");
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    if(array[i].length >= 7){
      count += 1;
    }
  }
  // return count;
  console.log(count);
}

// longWordCount(""); // => 0
// longWordCount("short words only"); // => 0
// longWordCount("one reallylong word"); // => 1
// longWordCount("two reallylong words inthisstring"); // => 2
// longWordCount("allwordword longwordword wordswordword"); // => 3
// longWordCount("seventy schfifty five"); // => 1

function factorial(n){
  var num = 1
  for (var i = n; i > 0; i--){
    num = num*i
  }
  //return num;
  console.log(num);
}

// factorial(1); // => 1
// factorial(4); // => 24
// factorial(5); // => 120
// factorial(10); // => 3628800

function lcm (num1, num2){
  for(var i = 1; i <= (num1*num2); i++){
    if (i%num1 === 0 && i%num2 === 0){
      return i
    }
  }
}

// console.log(lcm(2, 3)); // => 6
// console.log(lcm(6, 10)); // => 30
// console.log(lcm(24, 26)); // => 312

function hipsterfy (string){
  var words = string.split(' ');
  // console.log(words);
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    words[i] = makeHip(word);
  }
  return words.join(' ');
}

function makeHip (word){
  var vowels = "aeiou".split('');
  var letters = word.split('');
  for(i = letters.length; i > -1; i--){
    if (vowels.indexOf(letters[i]) > -1){
      letters[i] = null //this feels like it shouldn't work, but it does.
      return letters.join('')
    }
  }
}

// console.log(makeHip('proper'));

console.log(hipsterfy("proper")); // => "propr"
console.log(hipsterfy("proper tonic panther")); // => "propr tonc panthr"
console.log(hipsterfy("towel flicker banana")); // => "towl flickr banan"
console.log(hipsterfy("runner anaconda")); // => "runnr anacond"
console.log(hipsterfy("turtle cheeseburger fries")); // => "turtl cheeseburgr fris"
