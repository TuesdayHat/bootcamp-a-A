// for(var i = 1; i<=5; i++){
//   console.log('i:', i);
//   for(var a = 1; a < 4; a++){
//     console.log('\t a:', a);
//     // if (a%2 !== 0){
//     //   i++
//     //   //you can make an inner loop alter the counter for an outer one
//     }
//   }
// }
// //12 total iterations
//

// var names = ['Alvin', 'Chase', 'Patrick', 'Clayton'];
// for (var i = 0; i < names.length; i++){
//   var name1 = names[i];
//   for(var j = i+1; j<names.length; j++){
//     var name2 = names[j]
//     console.log(name1 + ' - ' + name2);
//   }
// }
//makes a list of unique pairs within the Arrays
//does so by making sure j is always > i
//which makes sure j does not check what i has already checked


var multi = [
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i']
];

// console.log(multi[0]); // look up first layer of a multidim array
// console.log(multi[2][1]); // look up second layer down

function print2D(array){
  for(var i = 0; i < array.length; i++){
    var subArray = array[i]; //row
    console.log(subArray);
    for(var j = 0; j<subArray.length; j++){
      var ele = subArray[j]; // column
      console.log('\t', ele)
    }
  }
}

// print2D(multi);

//~~~~~~1
// Create the data object that this function is expecting
//
// Example
//
// printUsers(users1)
// 0: UserName1
// 1: UserName2
// ...and so forth, for all the users

var users1 = [
  {id: 0, username: 'Alice'},
  {id: 1, username: 'Bob'},
  {id: 2, username: 'Carol'},
];

function printUsers(users) {
  for (var i = 0; i < users.length; i++) {
    var user = users[i];
    console.log(user.id + ": " + user.username);
  }
}

printUsers(users1); // uncomment when ready to test
