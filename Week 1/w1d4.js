//self testing -- turning all the letters in a string
//into an array

function stringToArray(string){
  var array = []
  for (var i = 0; i < string.length; i++){
    array[i] = string[i]
    //assign whatever is in index i of the string to
    //the same place in the array; iterate.
  }
  return array
}

//console.log(stringToArray('Hello World'))

function logEach(array){
  for (var i = 0; i < array.length; i++){
    console.log(i + ' ' + array[i]);
  }
}

//logEach(["Anthony", "John", "Carson"]);

function range(start, end){
  array = []
  for (var i = start; i<=end; i++){
    array.push(i)
  }
  return array
}

// console.log(range(1,4))
//console.log(range(4,2))

function sumArray(array){
  var sum = 0
  for (var i = 0; i <array.length; i++){
    sum += array[i]
  }
  return sum
}

// console.log(sumArray([5, 6, 4]))
// console.log(sumArray([7, 3, 9, 11]))

function capWords(array){
  var capped = []
  for (var i = 0; i <array.length; i++){
    capped[i] = array[i].toUpperCase()
  }
  return capped
}

// console.log(capWords(['hello', 'boOtCaMp', 'PREP!']));

function maxValue(array){
  var result = null
  for (var i = 0; i < array.length; i++){
    if (array[i] > result){
      result = array[i];
    }else{
      continue
    }
  }
  return result
}

// console.log(maxValue([12, 6, 43, 2]));
// console.log(maxValue([]));
// console.log(maxValue([-4, -10, 0.43]));
