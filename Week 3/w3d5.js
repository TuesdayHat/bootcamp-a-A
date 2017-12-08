function objectSelect(obj, cb){
  var build = {};
  for(var key in obj){
    // console.log(key);
    if ( cb(obj[key], key) ){
      build[key] = key;
      // console.log(build);
    }
  }
  // console.log(build);
}

var obj = {
  one: "one",
  two: "something else",
  three: "three",
  four: "another thing."
};

function isEqual(a, b) {
  return a === b;
}

var matchingPairs = objectSelect(obj, isEqual);

//matchingPairs; //=> {
//   one: "one",
//   three: "three"
// }

function splitHalfArray(array){
  var firstHalf = array.splice(0, array.length/2);
  // console.log(firstHalf);
  var secHalf = array.splice(array.length/2, array.length);
  // console.log(secHalf);
  var result = [firstHalf, secHalf];
  return result;
}

// console.log(splitHalfArray([1, 2, 3, 4, 5])); // => [ [ 1, 2 ], [ 4, 5 ] ]
// console.log(splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f'])); // => [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]

function threeUniqueVowels(string){
  var vowels = "aeiou".split('');
  var count = 0;
  for(var i = 0; i < vowels.length; i++){
    if (string.indexOf(vowels[i]) > -1){
      count++;
    }
    if (count >= 3){
      return true;
    }
  }
  return false;
}

// console.log(threeUniqueVowels('delicious')); // => true
// console.log(threeUniqueVowels('bootcamp prep')); // => true
// console.log(threeUniqueVowels('bootcamp')); // => false
// console.log(threeUniqueVowels('dog')); // => false
// console.log(threeUniqueVowels('go home')); // => false


function vowelShift(str){
  var vowels = 'aeiou'.split('');
  var array = str.split('');
  for (var i = 0; i < array.length; i++){
    var index = vowels.indexOf(array[i]);
    if (array[i] === 'u'){
      array[i] = 'a';
    } else if(index > -1){
      array[i] = vowels[index+1];
    }
  }
  return array.join('');
}

console.log(vowelShift('bootcamp')); // => 'buutcemp'
console.log(vowelShift('hello world')); // => 'hillu wurld'
console.log(vowelShift('on the hunt')); // => 'un thi hant'
