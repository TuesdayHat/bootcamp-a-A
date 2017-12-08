function printTenReverse (){
  for (i = 10; i >= 0; i--){
    console.log(i)
  }
}

//printTenReverse()

function printTen (){
  for (i = 0; i <=10; i++)
    if (i % 2 === 0){
      console.log(i + " is even")
    }else{
      console.log(i + " is odd")
    }
}

// printTen()

//print all odd numbers from 12 to 0
function problemOne(){
  for (var i = 12; i>=0; i--){
    if (i %2 !== 0){
      console.log(i)
    }
  }
}

// problemOne()

function printfives(max){
  for (var i = 0; i <= max;i+=5){
    console.log(i)
  }
}

// printfives(20)

function printReverse(max, min){
  for (var i = max -1; i > min;i--){
    console.log(i)
  }
}

// printReverse(20,12)

function sumNums(max){
  var sum = 0
  for (i = 0; i <= max; i++){
    sum += i
  }
  console.log(sum)
}

// sumNums(365)

function isFactorOf (number, factor){
//   for (i = 1; number < factor; i++){
//     if (number / factor === 1){
//       return true
//     }else if (number > factor) {
//       number = number / factor
//     }else{
//       return false
//     }
//   }
}
//console.log(isFactorOf(6, 2))

function fizzBuzz(max){
  for (var i = 0; i<=max; i++){
    if (i%3===0&&i%5===0){
      continue;
    }
    if (i%3 === 0 || i%5===0){
      console.log(i)
    }
    }
  }


fizzBuzz(20)
