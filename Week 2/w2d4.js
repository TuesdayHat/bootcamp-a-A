/*strings vs Arrays
Similarities:
-#length
-#indexOf
-#slice
-others
*/
// var string = 'hello';
// var array = ['h', 'e', 'l', 'l', 'o'];
//
// // console.log(string.length === array.length) // ==> true
//
// /* DIFFERENCES
//   strings are immutable (unchangeable)
//   arrays are mutable (changeable)
// */
//
// array[0] = 'x' // result: array === ['x', 'e', 'l', 'l', 'o']
// string[0] = 'x' // result: string === 'hello'; no change


/*
DEBUGGING:
1) run the code
2) understand the output
3) trace how Javascript ran the code
4) print fucking everything

IF THAT FAILS:
1) ask someone
2) burn it and start over
*/

//------------PROBLEM SET-------------------

// var str = "abcdef";
// var letter = "e";
// str.split("").indexOf(letter) === -1; // WWJD?
//
// 'abcdef'.split("")
// ['a', 'b', 'c', 'd', 'e', 'f'].indexOf(e)
// 4
// 4 === -1
// false

function howHigh(height) {
  return (height + " feet high!");
}

function jump(height) {
  return "I'm jumping " + howHigh(height);
}

// console.log(jump(5)) //=> "I'm jumping 5 feet high!";
// console.log(jump(12)) //=> "I'm jumping 12 feet high!";

function unique(array) {
  var uniqueArray = [];

  for (var i = 0; i < array.length; i += 1) {
    var ele = array[i];

    if (uniqueArray.indexOf(ele) === -1) {
      uniqueArray.push(ele);
      console.log(uniqueArray);
    }
  }
  return uniqueArray
}

// unique([1,23,2,4,5,1,23]) //=> [1, 23, 2, 4, 5];


function isHappy(person) {
  if (person.happiness > 5) {
    return true;
  }
  return false;
}

function isHappyGroup(group) {
  var amount = 0;

  for (var i = 0; i < group.length; i += 1) {
    //check each member of the group
    var person = group[i];
    //define an individual person
    //person is an object

    if (isHappy(person)) {
      //calls isHappy function
      //if the person's happiness value is more than 5, run this code
      amount += 1;
      // console.log(isHappy(person))
    }
    // console.log();
  }

  if (amount > 5) {
    return true;
  }

  return false;
}

var people = [
  { happiness : 15},
  { happiness : 13},
  { happiness : 3},
  { happiness : 20},
  { happiness : 9},
  { happiness : 7},
  { happiness : 17},
  { happiness : 1}
];

// console.log(isHappyGroup(people)) //=> true;
// // isHappyGroup(people) //=> true;

var magicify = function(number) {
  // console.log(number - 34);
  return (number - 34);
}

var isMagicNumer = function(number) {
  var magicNumb = magicify(number);

  if (magicNumb % 13 === 0 || magicNumb < 0) {
    return true;
  }

  return false;
}

// console.log(isMagicNumer(26)) //=> true;
// console.log(isMagicNumer(50)) //=> false;

function fizzBuzz(max) {
  var array = [];
  var i = 1;

  while(i < max) {
    if (i % 5 === 0 || i % 3 === 0 && (i%15 !== 0)) {
      array.push(i);
    }
    i += 1;
  }

  return array;
}

console.log(fizzBuzz(19)) //=> [3, 5, 6, 9, 10, 12, 18]
