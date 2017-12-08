function countScores(people) {
  var scoresObj = {};

  for (var i = 0; i < people.length; i += 1) {
    var personObj = people[i];
    var name = personObj.name; 
    var score = personObj.score;

    if (scoresObj[name]) {
      //if the current name is already in scoresObj, add the associated score
      scoresObj[name] += score;
    } else {
      //if the current name is not found in the object, add the name:score pair
      scoresObj[name] = score;
      //if a key is assigned something, but the key does not exist,
      //the key will be created
    }
  }
  return scoresObj;
}

// var ppl = [ {name: "Anthony", score: 10},
//             {name: "Fred", score : 10},
//             {name: "Anthony", score: -8},
//             {name: "Winnie", score: 12}];
// console.log(countScores(ppl));//=> { Anthony: 2, Fred: 10, Winnie: 12 }
var peeps = [
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2}
];
console.log(countScores(peeps)); //=> { Anthony: 4, Fred: 4, Winnie: 6 }
