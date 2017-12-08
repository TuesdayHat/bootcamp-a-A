//Recursion!
//Recursion!
//Recursion!

/* a bunch of functions that call eachother
function sayHello(){
  console.log('Hello World!');
  sayGoodbye();
}

function sayGoodbye(){
  console.log('Goodbye!');
  sayHi();
}

function sayHi(){
  console.log('Hi!');
}
*/

/*
function sayHello(){
  console.log('Hello World');
  sayHello()
}
*/

//this will be an infinite loop

/*
function countDown(num){
  if (num < 0){ // base case
    return;
  }
  console.log(num);
  countDown(num-1); //recusive step
}

countDown(10)

//this one wont
*/

/* TERMINOLOGY
-Base Case => controls how the function stops
-Recusive Step => continue with another call
*/

// function recusiveFactorial(n){
//   if (n <= 1){
//     return n
//   }
//   var result = n * recusiveFactorial(n-1);
//   return result
// }
//
// console.log(recusiveFactorial(5));

/************PROBLEM SET*************/
