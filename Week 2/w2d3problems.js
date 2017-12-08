// ~~~~~~ 1
var students1 = [
  { name : "Anthony" },
  { name : "Winnie" },
  { name : "Pawandeep" }
];

// Write a function that will print the name of all the students
// Example:
//
// printNames(students1)
// Anthony
// Winnie
// Pawandeep

function printNames(students) {
    for(var i = 0; i<students1.length; i++){
      var current = students1[i];
      var name = current.name;
      console.log(name);
    }
}

// printNames(students1); // uncomment when ready to test

// ~~~~~~ 2
var students2 = [
  {
    name : "Anthony",
    id : 0
  },
  {
    name : "Winnie",
    id : 1
  },
  {
    name : "Pawandeep",
    id : 2
  }
];

// Write a function that will print the name and id of all the students
// Example:
//
// printStudents(students2)
// Anthony is student #0
// Winnie is student #1
// Pawandeep is student #2

function printStudents(students) {
  for(var i = 0; i < students.length; i++){
    var student = students[i];
    console.log(student.name + 'is student # ' + student.id);
  }
}

// printStudents(students2); // uncomment when ready to test

//~~~~~3

// Write a function that will print the name of the student and their highest test score
// Example:
//
// printBestGrade(students3)
// Anthony 84
// Winnie 100
// Pawandeep 92

function printBestGrade(students) {
  for (var i = 0; i < students.length; i++) {
    student = students[i];
    var highest = highestScore(student)
    console.log(student.name, highest);
  }
}


function highestScore(student){
  var array = student.grades
  var highest = 0
  for (var i = 0; i < array.length; i++) {
    var grade = array[i];
    var score = grade.score;
    if (score > highest){
      highest = score;
    }
  }
  return highest
}

// printBestGrade(students3); // uncomment when ready to test


// Write a function that will print the name of the student and their average test score
//
// Example
//
// printAverageGrade(students3)
// Anthony 61.333333333333336
// Winnie 72.66666666666667
// Pawandeep 73.33333333333333

var students3 = [
  {
    name : "Anthony",
    id : 0,
    grades : [{ id : 0, score : 84},{ id : 1, score : 20},{ id : 2, score : 80}]
  },
  {
    name : "Winnie",
    id : 1,
    grades : [{ id : 0, score : 62},{ id : 1, score : 56},{ id : 2, score : 100}]
  },
  {
    name : "Pawandeep",
    id : 2,
    grades : [{ id : 0, score : 79},{ id : 1, score : 92},{ id : 2, score : 49}]
  }
];

function printAverageGrade(students) {
  for (var i = 0; i < students.length; i++) {
    var student = students[i];
    var average = avgScore(student)
    console.log(student.name, average);
  }
}

function avgScore(student){
  var scores = student.grades;
  var result = 0;

  for (var i = 0; i < scores.length; i++) {
    var current = scores[i].score;
    result += current
  }
  return result / (scores.length);
}

// printAverageGrade(students3); // uncomment when ready to test



//~~~~~~3
// Create the data object that this function is expecting
//
// Example
//
// printUsersWebsitesInfo(users3)
// ~~UserName1~~
//   -siteName1.com
//     -load: 21%
//     -# of users: 210000
//     -popularity score: 32
//   -siteName2.com
//     -load: 21%
//     -# of users: 210000
//     -popularity score: 32
// ~~UserName2~~
//   -siteName3.com
//     -load: 21%
//     -# of users: 210000
//     -popularity score: 32
//   -siteName4.com
//     -load: 21%
//     -# of users: 210000
//     -popularity score: 32
//   -siteName5.com
//     -load: 21%
//     -# of users: 210000
//     -popularity score: 32
// ...and so forth, for all the users

var users3 = [
  {
    username: 'azablan',
    sites: [
      {
        url: 'appacademy.io',
        load: 99,
        userCount: 21000,
        pop: 78
      },
      {
        url: 'airbnb.com',
        load: 72,
        userCount: 490000,
        pop: 58
      },
    ],
  },
  {
    username: 'chase',
    sites: [
      {
        url: 'facebook.com',
        load: 99,
        userCount: 21000,
        pop: 78
      },
      {
        url: 'github.com',
        load: 72,
        userCount: 490000,
        pop: 58
      },
    ],
  },
]

function printUsersWebsitesInfo (users) {
  for (var i = 0; i < users.length; i++) {
    var user = users[i];
    console.log("~~" + user.username + "~~");

    for (var j = 0; j < user.sites.length; j++) {
      var site = user.sites[j];
      console.log("  -" + site.url);
      console.log("    -load: " + site.load + "%");
      console.log("    -# of users: " + site.userCount);
      console.log("    -popularity score: " + site.pop);
    }
  }
}

// printUsersWebsitesInfo(users3); // uncomment when ready to test

function peakFinder(){
  var peaks = [];
  for (var i = 0; i < array.length; i++) {
    if ( array[i] === 0 && array[i] > array[i+1]){
      peaks.push(i);
    } else if(i === array.length - 1 && array[i] > array[i-1]) {
      peaks.push(i);
    }else if ((array[i] > array[i+1]) && (array[i] > array[i-1])){
      peaks.push(i);
    }
  }
}

// peakFinder([1, 2, 3, 2, 1]); //=> [2]
// peakFinder([2, 1, 2, 3, 4, 5]); //=> [0, 5]
// peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5]); //=> [2, 6, 8]


// Write a function `divisibleByThreePairSum(array)` that takes an array of numbers.
// It should return an array of all the pairs of indices, whose elements sum to a
// multiple of three.

function divisibleByThreePairSum(array){
  var pairs = [];
  for (var i = 0; i < array.length; i++) {
    var num1 = array[i];
    for (var j = i+1; j < array.length; j++) {
      var num2 = array[j];
      if ((num1+num2) %3 === 0){
        var pair = [i, j];
        pairs.push(pair);
      }
    }
  }
  return pairs;
}

// console.log(divisibleByThreePairSum([1, 6, 3, 4, 2, 0])); //=> [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]
// console.log(divisibleByThreePairSum([8, 3, 5, 9, 2])); //=> [[1, 3]]


function twoDimensionalTotal(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    var subArray = array[i];
    for (var j = 0; j < subArray.length; j++) {
      var num = subArray[j];
      sum+=num
    }
  }
}

var arr1 = [
  [5, 2, 5, 3],
  [12, 13],
];

twoDimensionalTotal(arr1); // => 40

var arr2 = [
  [2],
  [1, 9],
  [1, 1, 1]
]

twoDimensionalTotal(arr2); // => 15
