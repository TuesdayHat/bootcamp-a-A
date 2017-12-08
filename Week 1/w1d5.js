function isInside(array, ele){
  if (array.indexOf(ele) > -1){
    return true
  }else{
    return false
  }
}

// console.log(isInside(['chase', 'phi', 'eliot'], 'eliot'));
// console.log(isInside(['chase', 'phi', 'eliot'], 'fred'));

function reverseStr(string){
  var strArray = []
  for (var i = string.length-1; i > -1; i--){
    strArray.push(string[i])
  }
  return strArray.join('')
}

// console.log(reverseStr('bootcamp'));
// console.log(reverseStr('App Academy'));

function luckySevens(max){
  var i = 7;
  var array = [];
  while (i <= max){
    if (i%7 === 0){
      array.push(i);
    }
    i++;
  }
  return array;
}

// console.log(luckySevens(25));
// console.log(luckySevens(42));

function copyMachine(element, num){
  var array = [];
  var i = 0;
  while (i <= num){
    array.push(element);
    i++;
  }
  console.log(array);
}

// copyMachine('candy', 0);
// copyMachine('candy', 2);
// copyMachine('bread', 4);
// copyMachine(11, 6);

function everyOtherWord(sentence){
  var array = sentence.split(' ');
  var split = []
  var i = 0;
  while (i < array.length){
    if (i%2 === 0){
      split.push(array[i])
    }
    i++
  }
  console.log(split)
}

everyOtherWord('hello how are you doing on this lovely day?');
everyOtherWord('the weather is wonderful');
