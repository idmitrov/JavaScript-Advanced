'use strict';

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.name = firstName + ' ' + lastName;
}

// TESTS

var peter = new Person("Peter", "Jackson");
console.log(peter.name);
console.log(peter.firstName);
console.log(peter.lastName);
