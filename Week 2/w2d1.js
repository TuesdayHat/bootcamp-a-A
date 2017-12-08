// function royalWe(sentence) {
//   var array = sentence.split(' ');
//   for (i = 0; i < array.length; i++){
//     console.log (array[i])
//     if (array[i].toUpperCase === 'I'){
//       array[i] = 'we'
//     } else if (array[i].toLowerCase === 'mine'){
//       array[i] = 'ours'
//     } else if (array[i].toLowerCase === 'my'){
//       array[i] = 'our'
//     } else if (array[i].toLowerCase === 'me'){
//       array[i] = 'us'
//     } else {
//       continue
//     }
//   }
//   return array.join(' ')
//
// }
//
// // console.log(royalWe("I want to go to the store"))
// // console.log(royalWe("This is my house and you will respect me"))
// // console.log(royalWe("This is mine"))
// // console.log(royalWe("Jump for my love"))
// royalWe("I want to go to the store")


function mirrorArray(array){
  var mirror = [];
  for (i = array.length - 1; i >= 0; i--){
    mirror.push(array[i]);
  }
  console.log(array.concat(mirror))
}

// mirrorArray([1,2,3]);
// mirrorArray(['a', 'b', 'c', 'd']);

function avgValue(array){
  var result = 0;
  for (i = 0; i < array.length; i++){
    result += array[i];
  }
  result = result / array.length
  console.log(result)
}

// avgValue([10, 20]);
// avgValue([2, 3, 7]);
// avgValue([100, 60, 64]);
function isVowel(word){
  if (word.indexOf(a) > -1){
    return true;
  } else if (word.indexOf(e) > -1){
    return true;
  }else if (word.indexOf(i) > -1){
    return true;
  }else if (word.indexOf(o) > -1){
    return true;
  }else if (word.indexOf(u) > -1){
    return true;
  } else{
    return false;
  }
}

function removeVowels (word){
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var newWord = '';
  for (var i = 0; i < wor.length; i++){
    var char = word[i];
    if (vowels.indexOf(char) === -1){
      newWord += char;
    }
  }
  return newWord;
}

function abbreviate(sentence){
  var array = sentence.split(' ');
  var newWords = [];
  for (i = 0; i < array.length; i++){
    var word = array[i];
    if (word.length > 4) {
      var abbrev = removeVowels(word);
      newWords.push(abbrev);
    } else {
      newWords.push(word)
    }
  }
  return newWords.join(' ');

}
