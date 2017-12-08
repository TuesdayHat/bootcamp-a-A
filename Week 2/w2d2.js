// objects
var obj = { name: 'Bob', age: 4};
//key "name" with value of "Bob"
//key "age" with value of 4

console.log(obj); // print everything
console.log(obj.name); //print the name key pair only
console.log(obj.age); // print the age key pair only
console.log(obj.pet); //key does not exist, therefore undefined

obj.pet = dog //makes a new key pair where there wasn't one before
console.log(obj.pet); //prints the new pet: dog key pair

obj.pet; // resolves to dog; dot notation
obj['pet']; // also resolves to dog bracket notation
var aKey = 'age'
obj[aKey] // resolves to 4, because variable aKey contains 'age'
obj.aKey // resolves to undefined, literally looking for a key named aKey

//keys of an object are ALWAYS strings
//Arrays are ordered
//Objects are not not ordered
console.log('-----------------------------------------')

var school = {
  name: 'App Academy',
  location: 'NY',
  course: 'Bootcamp Prep',
  age: 4,
  isOpen: true,
  students: ['Chase', 'Alvin', 'Tom'],
}

console.log(school.students[1]); //will select an element from an array within
//an object
console.log(school.course);

for( var k in school){
  console.log(k); // prints the keys
  console.log(school[k]); // prints th values
}

console.log('--------------------------------------------');

var dog = {
  name: 'max',
  age: 4,
  bark: function() {
    console.log('bark!');
  }
}

dog.bark();
//a function that is part of an object is called a Method

console.log('--------------------------------------------');

var cat = {
  name: 'Sennecy',
  meow: function() {
    console.log(cat.name + ' meows!');
    //console.log(cat['name'] + ' meows!');
    //console.log(this.name+ ' meows!'); all of these work

    console.log(this);
    console.log( this === cat)
  }
}
cat.meow();
//object.this => .this refers to the object that called the method

console.log('----------------------------------------------')
