'use strict';

/*
    UNCOMMENT THE TASKS TO CHECK THE CODE
*/

// // TASK 01
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.name = firstName + ' ' + lastName;
// }

// var peter = new Person("Peter", "Jackson");
// console.log(peter.name);
// console.log(peter.firstName);
// console.log(peter.lastName);

// // TASK 02
// function Person(firstName, lastName) {
//  var first = firstName,
//      last = lastName;

//  Object.defineProperty(this, 'firstName', {
//      get: function() {
//          return first;
//      },
//      set: function(value) {
//          first = value;
//      }
//  });

//  Object.defineProperty(this, 'lastName', {
//      get: function() {
//          return last;
//      },
//      set: function(value) {
//          last = value;
//      }
//  }); 

//  Object.defineProperty(this, 'fullName', {
//      get: function() {
//          return first + ' ' + last;
//      },
//      set: function(value) {
//          var names = value.split(' ');
//          first = names[0];
//          last = names[1];
//      }
//     });
// }

// var person = new Person("Peter", "Jackson");

// // Getting values
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.fullName);

// // Changing values
// person.firstName = "Michael";
// console.log(person.firstName);
// console.log(person.fullName);

// person.lastName = "Williams";
// console.log(person.lastName);
// console.log(person.fullName);

// // Changing the full name should work too
// person.fullName = "Alan Marcus";
// console.log(person.fullName);
// console.log(person.firstName);
// console.log(person.lastName);

// // TASK 03
// // var array = [1, 2, 3, 4];
// // var array = [1, 2, [3, 4],
// //     [5, 6]
// // ];

// var array = [0, ["string", "values"], 5.5, [
//     [1, 2, true],
//     [3, 4, false]
// ], 10];

// Array.prototype.flaten = function() {
//     var flatenArray = [];

//     var extractArray = function(arr) {
//         if (arr.constructor === Array) {
//             for (var i = 0; i < arr.length; i += 1) {
//                 extractArray(arr[i]);
//             }
//         } else {
//             flatenArray.push(arr);
//         }

//         return flatenArray;
//     }

//     return extractArray(this);
// }

// // console.log(array); // ORIGINAL ARRAY IS NOT TOUCHED
// console.log(array.flaten());

// // TASK 04
// String.prototype.startsWith = function(substring) {
//     var substringInSensitive = substring.toLowerCase();
//     var originalStringInSensitive = this.toLowerCase();

//     return originalStringInSensitive.indexOf(substringInSensitive) === 0;
// }

// String.prototype.endWith = function(substring) {
//     var substringInSensitive = substring.toLowerCase();
//     var originalStringInSensitive = this.toLowerCase();

//     return this.length - substring.length === originalStringInSensitive.indexOf(substringInSensitive);
// }

// String.prototype.left = function(count) {
//     return this.substring(0, count);
// }

// String.prototype.right = function(count) {
//     var stringLength = this.length;

//     if (count > stringLength) {
//         return this.toString();
//     }

//     return this.substring(stringLength - count, stringLength);
// }

// String.prototype.padLeft = function(count, character) {
//     var SPACE = ' ';
//     var paddedString = '';
//     var padSymbol = character;

//     if (!padSymbol) {
//         padSymbol = SPACE;
//     }

//     for (var i = 0; i < count; i += 1) {
//         paddedString += padSymbol;
//     }

//     paddedString += this;
//     return paddedString;
// }

// String.prototype.padRight = function(count, character) {
//     var SPACE = ' ';
//     var paddedString = this;
//     var padSymbol = character;

//     if (!padSymbol) {
//         padSymbol = SPACE;
//     }

//     for (var i = 0; i < count; i += 1) {
//         paddedString += padSymbol;
//     }

//     return paddedString;
// }

// String.prototype.repeat = function(count) {
//     var repeatedString = '';

//     for (var i = 0; i < count; i += 1) {
//         repeatedString += this;
//     }

//     return repeatedString;
// }

// var example = "This is an example string used only for demonstration purposes.";
// console.log(example.endsWith("poses."));
// console.log(example.endsWith ("example"));
// console.log(example.startsWith("something else"));

// var example = "This is an example string used only for demonstration purposes.";
// console.log(example.left(9));
// console.log(example.left(90));
// var example = "This is an example string used only for demonstration purposes.";
// console.log(example.right(9));
// console.log(example.right(90));
// var example = "abcdefgh";
// console.log(example.left(5).right(2));

// var hello = "hello";
// console.log(hello.padLeft(5));
// console.log(hello.padLeft(10));
// console.log(hello.padLeft(5, "."));
// console.log(hello.padLeft(10, "."));
// console.log(hello.padLeft(2, "."));
// var hello = "hello";
// console.log(hello.padRight(5));
// console.log(hello.padRight(10));
// console.log(hello.padRight(5, "."));
// console.log(hello.padRight(10, "."));
// console.log(hello.padRight(2, "."));
// var character = "*";
// console.log(character.repeat(5));
// // Alternative syntax
// console.log("~".repeat(3));
// // Another combination
// console.log("*".repeat(5).padLeft(10, "-").padRight(15, "+"));

// // TASK 05
// var Vector = function(dimensions) {
//     if (!dimensions || dimensions.length < 1 || dimensions.constructor !== Array) {
//         throw new DOMException('Vector constructor expected an array containing its dimension values');
//     }

//     this.dimensions = dimensions;

//     this.toString = function() {
//         return '(' + this.dimensions.join(', ') + ')';
//     }
// };

// Vector.prototype.add = function(vectorToAdd) {
//     if (vectorToAdd.constructor !== Vector) {
//         throw new DOMException('Operation with Vectors allow only Objects of type Vector');
//     }

//     if (this.dimensions.length !== vectorToAdd.dimensions.length) {
//         throw new DOMException('Operations with Vectors require Vectors with same dimensions');
//     }

//     var resultedVector = [];

//     for (var index in this.dimensions) {
//         resultedVector.push(this.dimensions[index] + vectorToAdd.dimensions[index]);
//     }

//     return new Vector(resultedVector);
// }

// Vector.prototype.subtract = function(vectorToSubtract) {
//     if (vectorToSubtract.constructor !== Vector) {
//         throw new DOMException('Operation with Vectors allow only Objects of type Vector');
//     }

//     if (this.dimensions.length !== vectorToSubtract.dimensions.length) {
//         throw new DOMException('Operations with Vectors require Vectors with same dimensions');
//     }

//     var resultedVector = [];

//     for (var index in this.dimensions) {
//         resultedVector.push(this.dimensions[index] - vectorToSubtract.dimensions[index]);
//     }

//     return new Vector(resultedVector);
// }

// Vector.prototype.dot = function(vectorToDot) {
//     if (vectorToDot.constructor !== Vector) {
//         throw new DOMException('Operation with Vectors allow only Objects of type Vector');
//     }

//     if (this.dimensions.length !== vectorToDot.dimensions.length) {
//         throw new DOMException('Operations with Vectors require Vectors with same dimensions');
//     }

//     var product = 0;

//     for (var index in this.dimensions) {
//         product += (this.dimensions[index] * vectorToDot.dimensions[index]);
//     }

//     return product;
// }

// Vector.prototype.norm = function() {
//     if (this.constructor !== Vector) {
//         throw new DOMException('Operation with Vectors allow only Objects of type Vector');
//     }

//     var result = 0;

//     for (var index in this.dimensions) {
//         result += this.dimensions[index] * this.dimensions[index];
//     }

//     return Math.sqrt(result);
// }

// var a = new Vector([1, 2, 3]);
// var b = new Vector([4, 5, 6]);
// var c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
// console.log(a.toString());
// console.log(c.toString());
// // The following throw errors
// // var wrong = new Vector();
// // var anotherWrong = new Vector([]);
// var a = new Vector([1, 2, 3]);
// var b = new Vector([4, 5, 6]);
// var c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
// var result = a.add(b);
// console.log(result.toString());
// // a.add(c); // Error
// var a = new Vector([1, 2, 3]);
// var b = new Vector([4, 5, 6]);
// var c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
// var result = a.subtract(b);
// console.log(result.toString());
// var a = new Vector([1, 2, 3]);
// var b = new Vector([4, 5, 6]);
// var c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
// var result = a.dot(b);
// console.log(result.toString());
// var a = new Vector([1, 2, 3]);
// var b = new Vector([4, 5, 6]);
// var c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
// console.log(a.norm());
// console.log(b.norm());
// console.log(c.norm());
// console.log(a.add(b).norm());
