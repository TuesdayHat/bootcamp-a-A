function catBuilder(name, color, thing){
  var cat = {
    name: '',
    color: '',
    thing: [],
  }
  cat.name = name;
  cat.color = color;
  cat.thing = [thing];
  return cat;
}

// var cat1 = catBuilder('Whiskers', 'black', ['scratching-post', 'yarn']);
// console.log(cat1);
//
// var cat2 = catBuilder('Nyan', 'rainbow', ['poptarts']);
// console.log(cat2);

var bootcamp = {
 name: 'App Academy',
 color: 'Red',
 population: 120,
};

function printObject(obj){
  for (var k in obj){
    console.log(k + ' '+ '--' + ' ' + obj[k])
  }
}

// printObject(bootcamp);


function getFullname(person) {
  console.log(person.firstName + ' ' + person.lastName)
}

// var p1 = {firstName: 'John', lastName: 'Doe'};
// getFullname(p1); // => 'John Doe'
//
// var p2 = {firstName: 'Charlie', lastName: 'Brown', age: 9};
// getFullname(p2); // => 'Charlie Brown'

function valuePair (obj1, obj2, key){
  var result = []
  result.push(obj1[key])
  result.push(obj2[key])
  console.log(result)
}
//
// var object1 = {name: 'One', location: 'NY', age: 3};
// var object2 = {name: 'Two', location: 'SF'};
//
// valuePair(object1, object2, 'location'); // => [ 'NY', 'SF' ]
// valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]

function doesKeyExist (obj, key) {
  if (obj[key] === undefined){
    console.log(false)
  }
  console.log(true)
}

// alternately
function keyExist (obj, key){
  return obj[key] !== undefined;
}

//
// var obj1 = {bootcamp: 'App Academy', course: 'Bootcamp Prep'}
// doesKeyExist(obj1, 'course'); // => true
// doesKeyExist(obj1, 'name'); // => false
function ageCheck(person){
  for(var k in person){
    if (person.age >= 18){
      return true
    }
  }
}

function adults (people){
  var result = [];
  for(var i = 0; i < people.length; i++){
    person = people[i];
    if (ageCheck(person) === true){
      result.push(person.name)
    }
  }
  console.log(result)
}

// var ppl = [
//   {name: 'John', age: 20},
//   {name: 'Jim', age: 13},
//   {name: 'Jane', age: 18},
//   {name: 'Bob', age: 7}
// ];

// adults(ppl); // => [ 'John', 'Jane' ]

function hasFavoriteFood (obj, food) {
  return (obj.favoriteFoods.indexOf(food) > -1)
}

// var dog = {
//   name: 'Fido',
//   favoriteFoods: ['chicken', 'sausage', 'scooby snacks']
// }
//
// hasFavoriteFood(dog, 'sausage'); // => true
// hasFavoriteFood(dog, 'cat food'); // => false
//
// var person = {
//   name: 'Al',
//   favoriteFoods: ['pizza', 'burgers', 'ramen']
// }
//
// hasFavoriteFood(person, 'burgers'); // => true
// hasFavoriteFood(person, 'fish'); // => false

function checker(person, people){
  var total = 0
  for(var i = 0; i < people.length; i++){
    if(people[i] === person){
      total += (people[i].score);
    }
  }
  return total;
  // console.log(total)
}

function list(person, people){
  // var array = [];
  var split = people.indexOf(person);
  var newList = people;
  while (split > -1){
    newList = newList.slice(split, split+1);
    split = newList.indexOf(person);
  }
  return newList;
  // console.log(newList);
}

function countScores (people) {
  var result = {
    name: '',
    score: 0,
  };
  for(var i = 0; i < people.length; i++){
    var person = people[i];
    console.log(person);
    result.score = checker(person, people);
    result.name = person.name;
    people = list(person, people);
  }
  console.log(result);
}

var ppl = [ {name: "Anthony", score: 10},
            {name: "Fred", score : 10},
            {name: "Anthony", score: -8},
            {name: "Winnie", score: 12}];

var countPpl = countScores(ppl);
countPpl; //=> { Anthony: 2, Fred: 10, Winnie: 12 }
//
// var peeps = [
//   {name: "Anthony", score: 2},
//   {name: "Winnie", score: 2},
//   {name: "Fred", score: 2},
//   {name: "Winnie", score: 2},
//   {name: "Fred", score: 2},
//   {name: "Anthony", score: 2},
//   {name: "Winnie", score: 2}
// ];
// countScores(peeps); //=> { Anthony: 4, Fred: 4, Winnie: 6 }
