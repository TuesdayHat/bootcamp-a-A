/* LECTURE: ----=====SCOPE======------*/
//var myName = 'Bootcamp Prep';
// console.log('Global: '+ myName); // evals to Bootcamp Prep
// in this scope myName is 'Bootcamp Prep'
// myName = 'App Academy';
// console.log(myName); // eval to App Academy

// a scope is where our particular variable evaluates to a certain value
//this is GLOBAL scope
// in JS, new function === new scope


//inside of an Inner scope, you can access variables in the Outer scope
//Outer scope CANNOT access Inner scope
// the var keyword attaches a variable to the CURRENT scope
// Inner scopes CANNOT access different Inner scopes
//  (read: a variable from one function cannot be called by a different function)
// Inner scopes can declare new Outer scopes

// function myFunction() {
//   var myName = 'Chase'; //if this doesn't have var in front, global changes
//   console.log('myFunction: '+ myName);
// }
//
// console.log('Global before: '+ myName);
// myFunction(); //eval to Chase
// console.log('Global After: '+ myName);
//
// var favoriteFood = 'pizza'; //global scope
//
// function printFavoriteFood(){
//   //local scope
//   console.log(favoriteFood); //calls the global var
//   // var favoriteDrink = 'coffee'; //variable hoisting error
//   favoriteDrink = 'pepsi';
// }
//
// printFavoriteFood();
// console.log(favoriteDrink); // prints pepsi
/*
var num = -99;

function a(){
  var num = 42;
  console.log(num);
}

function b(){
  var num = 100;
  console.log(num);
}
// these two num variables cannot see each other

console.log('global BEFORE: ' num); //other functions are not called
a();
b(); // var keyword makes a new version of the variable, evn if an identical name
//is global
console.log('global AFTER: ' num);
*/

/*
var location = 'NY';
//GLOBAL

function foo(){
  var location = 'SF';
  //LOCAL SCOPE 1

  function bar(){
    var location = 'LA';
    //LOCAL SCOPE 2
    console.log(location);
    //this will not be called if foo is called
    //UNLESS foo calls bar
  }
  console.log('*', location);
  bar() // can only be called in the foo function
}

//if a thing is called that is not declared in the same scope, JS will look into
//outer scopes for a thing of that name

console.log(location); //eval to NY
//this is back in GLOBAL

foo()
*/
/**********PROBLEM SET************/

/*
var foo = 5;

function bar() {
  var foo = "Anthony";
  foo + " is home"; //does not save anything
  return foo;
}

console.log(foo); // 5
console.log(bar()); // Anthony
console.log(foo); // 5
*/


// var foo = 5;
//
// function bar(foo) {
//   //foo is a parameter
//   return foo + 65; // returns whatever it recieved as the 'foo' parameter + 65
// }
//
// console.log(foo); // 5
// console.log(bar(5)); // 70
// console.log(foo); // 5
// console.log(bar(5)); // 70


// var foo = "Happy";
//
// for (var foo = 0; foo <= 5; foo += 1) {
//   console.log(foo); // count 0 through 5 (inclusive)
//   //reaches foo = 6 then stops, but foo is still 6
// }
//
// console.log(foo); //6

// var bar = 5;
// console.log("1: " + bar); //1: 5
//
// function foo() {
//   var bar = 10;
//   console.log("3: " + bar); //3: 10
//
//   var innerFoo = function() {
//     bar = 15;
//   }
//
//   console.log("4: " + bar); //4: 10
// }
//
// console.log("2: " + bar); //2: 5
// foo();
// console.log("5: " + bar); //5: 5


// var bar = "dance";
//
// function foo() {
//   bar = 10;
//
//   var innerFoo = function() {
//     var bar = 15;
//   }
//
//   console.log("2: " + bar); //2: 10
//   innerFoo();
//   console.log("3: " + bar); //3: 10
// }
//
// console.log("1: " + bar); //1: dance
// foo();
// console.log("4: " + bar); //4: 10

//---------------------------------------

function countOfLetter(string, char){
  var letters = string.toLowerCase().split('');
  var count = 0;
  for (var i = 0; i < letters.length; i++) {
    if(letters[i] === char){
      count++
    }
  }
  console.log(count);
}

// countOfLetter('mississippi', 's'); // => 4
// countOfLetter('MISSISSIPPI', 'p'); // => 2
// countOfLetter('BOOTCAMP', 't'); // => 1

// function countChar(char, letters, i){
//   var count = 0;
//   for(var j = i+1;j < letters.length; j++){
//     if (char === letters[j]){
//       return 1
//     }
//   }
// }
//
// function countRepeats(string){
//   var count = 0;
//   var letters = string.split('')
//   for(var i = 0; i < letters.length; i++){
//     var char = letters[i];
//     count += countChar(char, letters, i);
//   }
//   console.log(count);
// }

function countRepeats(string){
  var countsObj = charCounts(string);
  var numRepeat = 0;
  for(var key in countsObj){
    var num = countsObj[key];
    if (num[key] > 1){
      numRepeat += 1
    }
  }
  return numRepeat
}

function charCounts(string){
  var counts = {};
  for (var i = 0; i < string.length; i++) {
    var char = string[i];
    if (counts[char] === undefined){
      counts[char] = 1
    } else {
      counts[char] += 1
    }
  }
  return counts;
}

// countRepeats('alvin'); //=> 0
// countRepeats('aaaalvin'); //=> 1
// countRepeats('pops'); //=> 1
// countRepeats('mississippi'); //=> 3
// countRepeats('hellobootcampprep'); //=> 4
