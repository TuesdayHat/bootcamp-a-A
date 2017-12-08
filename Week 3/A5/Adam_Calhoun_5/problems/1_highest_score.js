/*******************************************************************************
Write a function highestScore(students) that takes in an array of student objects
as a parameter. It should return a string that corresponds to the student with
the highest score. The string should contain that student's initials
concatenated with their id. Assume the array contains at least 1 student object and
the student with the highest score is unique (there are no ties).
Example:

var students = [
 {name: 'Alvin Zablan', id: 128, score: -42},
 {name: 'Eliot Bradshaw', id: 32, score: 57},
 {name: 'Tommy Duek', id: 2, score: 99},
 {name: 'Fred Sladkey', id: 256, score: 94}
];

highestScore(students); //=> 'TD2'
*******************************************************************************/

function highestScore(students) {
  var high = 0;
  var topStudent = {};
  for(var i = 0; i<students.length;i++){
    // var student = students[i];
    if (students[i].score > high){
      high = students[i].score;
      topStudent = students[i];
    }
  }

  var result = getInitials(topStudent.name) + topStudent.id;
  return result
}

function getInitials(name){
  var words = name.split(' ');
  var initials = '';
  for(var j = 0; j<words.length; j++){
    var word = words[j];
    initials += word[0];
  }
  return initials.toUpperCase();
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = highestScore;
