'use strict';

function Person(firstName, lastName) {
 var first = firstName,
     last = lastName;

 Object.defineProperty(this, 'firstName', {
     get: function() {
         return first;
     },
     set: function(value) {
         first = value;
     }
 });

 Object.defineProperty(this, 'lastName', {
     get: function() {
         return last;
     },
     set: function(value) {
         last = value;
     }
 }); 

 Object.defineProperty(this, 'fullName', {
     get: function() {
         return first + ' ' + last;
     },
     set: function(value) {
         var names = value.split(' ');
         first = names[0];
         last = names[1];
     }
    });
}

// TESTS

var person = new Person("Peter", "Jackson");

// Getting values
console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);

// Changing values
person.firstName = "Michael";
console.log(person.firstName);
console.log(person.fullName);

person.lastName = "Williams";
console.log(person.lastName);
console.log(person.fullName);

// Changing the full name should work too
person.fullName = "Alan Marcus";
console.log(person.fullName);
console.log(person.firstName);
console.log(person.lastName);