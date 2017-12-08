// function highestScore(students) {
//   var high = 0;
//   var topStudent = {};
//   for(var i = 0; i<students.length;i++){
//     // var student = students[i];
//     console.log(students[i].score);
//     if (students[i].score > high){
//       high = students[i].score
//       topStudent = students[i];
//     }
//   }
//
//   var result = getInitials(topStudent.name) + topStudent.id;
//   return result
// }
//
// function getInitials(name){
//   var words = name.split(' ');
//   var initials = '';
//   for(var j = 0; j<words.length; j++){
//     var word = words[j];
//     initials += word[0];
//   }
//   return initials.toUpperCase();
// }
//
// var students = [
//  {name: 'Alvin Zablan', id: 128, score: -42},
//  {name: 'Eliot Bradshaw', id: 32, score: 57},
//  {name: 'Tommy Duek', id: 2, score: 99},
//  {name: 'Fred Sladkey', id: 256, score: 94}
// ];
//
// console.log(highestScore(students)); //=> 'TD2'
