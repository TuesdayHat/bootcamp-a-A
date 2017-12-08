function objectSize (obj) {
  var result = 0;
  for (var key in obj){
    result++
  }
  console.log(result);
}
/************ OR ************/
function objectSize2 (obj){
  return Object.keys(obj).length; //makes an array of all the keys in an object
}

var obj1 = {
  name: 'Fido',
  age: '4'
}

// objectSize(obj1); // => 2

var obj2 = {
  name: 'App Academy',
  course: 'Bootcamp Prep',
  locations: ['SF', 'NY']
}

// objectSize(obj2); // => 3
//----------------------------------
function power(num, exp){
  var result = num;
  if (num === 0){
    return 0
  } else if (exp === 0) {
    return 1
  }
  for (i = 1; i < exp; i++){
    result = result*num;
  }
  return result;
}
/************ OR ************/
function power2(num, exp){
  var product = 1;
  for (var i = 0; i < exp; i++){
    product *= num;
  }
  return product;
}


// console.log(power(2, 5)); // => 32
// console.log(power(2, 10)); // => 1024
// console.log(power(9, 2)); // => 81
// console.log(power(9, 3)); // => 729
// console.log(power(11, 0)); // => 1
// console.log(power(11, 1)); // => 11

//---------------------------------

function reverb(string){
  var vowels = 'aeiou'.split('');
  var echo = '';
  for (i = string.length-1; i > -1; i--){
    if (vowels.indexOf(string[i]) > -1){
      echo = string.slice(i, (string.length))
      return string + echo
    }
  }
  return string;
}

console.log(reverb('running')); // => 'runninging'
console.log(reverb('wild')); // => 'wildild'
console.log(reverb('debugged')); // => 'debuggeded'
console.log(reverb('my')); // => 'my'
