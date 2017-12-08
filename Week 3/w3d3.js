/*********************MATH FUNCTIONS*************************/

/*
Math.floor() => takes in a number and rounds don to the nearest integer
Math.ceil() => rounds up, as above
Math.round() => rounds to nearest integer
Math.sqrt() => square root
Math.pow(x, y) => takes in two numbers,
                  raises the first number to the second number power
Math.sign() => is x positive, negative, or 0
Math.abs() => absolute value
Math.PI => pi; 3.1415and so on
Math.Random() => random number between 0 and 1
            ex: Math.ceil(Math.random()*6) => roll 1d6
*/


/**********************CALLBACKS****************************/
//a callback is a function that is passed into another function


function foo(cb){
  console.log(cb); // prints [Function: sayHello]
  cb(); // prints 'Hello World'
  var result = cb()
  console.log(result); //prints 42
}

function sayHello(){
  console.log('Hello World!');
  return 42
}

// foo(sayHello) // correct
//foo(sayHello()) // wrong -- passes in the result of the cb

function addAndCallback(num1, num2, cb){
  var sum = num1 + num2;
  var result = cb(sum);
  console.log(result);
}

function yell(data){
  console.log(data + '!!!');
}

function half(num){
  return num / 2;
}

// addAndCallback(10, 12, yell);
// addAndCallback(90, 10, Math.sqrt)
/**********************PROBLEM SET**************************/

function myForEach(arr, cb){
  for (var i = 0; i < arr.length; i++) {
    var el = arr[i];
    cb(el, i, arr);
  }
}

function printInfo(ele, i, arr) {
  console.log(ele, "is at position", i, "in array", arr);
}

// myForEach(['a', 'b', 'c'], printInfo); // prints
// a is at position 0 in array [ 'a', 'b', 'c' ]
// b is at position 1 in array [ 'a', 'b', 'c' ]
// c is at position 2 in array [ 'a', 'b', 'c' ]


function printHalf(num) {
  console.log(num / 2);
}

// myForEach(['10', '50', '120'], printHalf); // prints
// 5
// 25
// 60
//-------------------------------------------------------


function mySelect(arr, cb){
  var array = [];
  for (var i = 0; i < arr.length; i++) {
    var ele = arr[i];
    if(cb(ele, i, arr)){
      array.push(ele);
    }
  }
  return array;
}

function isEven(num) {
  return num % 2 === 0;
}

// console.log(mySelect([1,2,3,4,5,6], isEven)); // => [ 2, 4, 6 ]


function isNegative(num) {
  return num < 0;
}

// console.log(mySelect([12, -14, 4, -10.2, 0], isNegative)); // => [ -14, -10.2 ]

//---------------------------------------------------

function myMap(arr, cb){
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(cb(arr[i], i, arr));
  }
  return result;
}

function doubler(num) {
  return num * 2;
}

// console.log(myMap([2, 4, 6, 1], doubler)); // => [ 4, 8, 12, 2 ]
//
// console.log(myMap([9, 25, 100, 36, 81], Math.sqrt)); // => [ 3, 5, 10, 6, 9 ]


//---------------------------------------------------
function countAdjacentSums(arr, num){
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    var current = arr[i];
    var next = arr[i+1];
    if (next+current === num){
      count +=1
    }
  }
  return count;
}

// console.log(countAdjacentSums([1, 5, 1], 6)) //=> 2
// console.log(countAdjacentSums([7, 2, 4, 6], 7)) //=> 0
// console.log(countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13)) //=> 3

//----------------------------------------------------

function signFlipCount(array){
  var count = 0;
  for(var i = 1; i < array.length; i++){
    var prev = array[i-1];
    var curr = array[i];
    //if (prev < 0 && curr > 0 || prev > 0 && curr < 0)
    if(Math.sign(curr) * Math.sign(prev) < 0){
      count +=1;
    }
  }
  return count;
}

// console.log(signFlipCount([5, 6, 10, 3])); //=> 0
// console.log(signFlipCount([-12, 0, -3, -5])); //=> 0
// console.log(signFlipCount([-12, 10, -3, -5])); //=> 2
// console.log(signFlipCount([1, -2, -3, -4])); //=> 1
// console.log(signFlipCount([-1, 11.3, -3, 100])); //=> 3

//----------------------------------------------------

function powerSequence(base, length){
  var result = [];
  for(var i = 1; i <= length; i++){
    result.push(Math.pow(base, i));
  }
  return result;
}

// console.log(powerSequence(3, 4)); // => [ 3, 9, 27, 81 ]
// console.log(powerSequence(2, 6)); // => [ 2, 4, 8, 16, 32, 64 ]
// console.log(powerSequence(8, 3)); // => [ 8, 64, 512 ]

//----------------------------------------------------
function collapseString(str){
  var result = [];
  for (var i = 0; i < str.length; i++) {
    var current = str[i];
    if (current !== str[i+1]){
      result.push(current);
    }
  }
  return result.join('');
}

console.log(collapseString('apple')); //=> 'aple'
console.log(collapseString('AAAaalviiiiin!!!')); //=> 'Aalvin!'
console.log(collapseString('hello   app academy')); //=> 'helo ap academy'
