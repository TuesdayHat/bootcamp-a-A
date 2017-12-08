function isPrime(num){
  if (num < 2){
    return false;
  }

  for (var j = 2; j<num; j++){
    if(num % j === 0){
      console.log(num % j);
      return false;
    }
  }
  return true;
}


// console.log(isPrime(1));
// console.log(isPrime(7));
// console.log(isPrime(4));


function previousPrimeArray(array) {
  var result = [];
  for(var i = 0; i < array.length; i++){
    if(isPrime(array[i])){
      result.push(lastPrime(array[i]));
    }else{
      result.push(array[i]);
    }
  }
  return result;
}

function isPrime(num){
  if (num <2){
    return false;
  }
  for (var j = 2; j<num; j++){
    if(num%j === 0){
      return false;
    }
  }
  return true;
}

function lastPrime(num){
  for(var i = num - 1; i > 2; i--){
    if (isPrime(i)){
      return i
    }
  }
  return null
}

console.log(previousPrimeArray([10, 12, 11, 7, 16])); // => [ 10, 12, 7, 5, 16 ]
console.log(previousPrimeArray([17, 24, 29, 5, 2, 4])); // => [ 13, 24, 23, 3, null, 4 ]
