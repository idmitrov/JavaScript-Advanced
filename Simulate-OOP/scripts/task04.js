'use strict';

String.prototype.startsWith = function(substring) {
    var substringInSensitive = substring.toLowerCase();
    var originalStringInSensitive = this.toLowerCase();

    return originalStringInSensitive.indexOf(substringInSensitive) === 0;
}

String.prototype.endWith = function(substring) {
    var substringInSensitive = substring.toLowerCase();
    var originalStringInSensitive = this.toLowerCase();

    return this.length - substring.length === originalStringInSensitive.indexOf(substringInSensitive);
}

String.prototype.left = function(count) {
    return this.substring(0, count);
}

String.prototype.right = function(count) {
    var stringLength = this.length;

    if (count > stringLength) {
        return this.toString();
    }

    return this.substring(stringLength - count, stringLength);
}

String.prototype.padLeft = function(count, character) {
    var SPACE = ' ';
    var paddedString = '';
    var padSymbol = character;

    if (!padSymbol) {
        padSymbol = SPACE;
    }

    for (var i = 0; i < count; i += 1) {
        paddedString += padSymbol;
    }

    paddedString += this;
    return paddedString;
}

String.prototype.padRight = function(count, character) {
    var SPACE = ' ';
    var paddedString = this;
    var padSymbol = character;

    if (!padSymbol) {
        padSymbol = SPACE;
    }

    for (var i = 0; i < count; i += 1) {
        paddedString += padSymbol;
    }

    return paddedString;
}

String.prototype.repeat = function(count) {
    var repeatedString = '';

    for (var i = 0; i < count; i += 1) {
        repeatedString += this;
    }

    return repeatedString;
}

// TESTS

var example = "This is an example string used only for demonstration purposes.";
console.log(example.endsWith("poses."));
console.log(example.endsWith ("example"));
console.log(example.startsWith("something else"));

console.log(example.left(9));
console.log(example.left(90));

console.log(example.right(9));
console.log(example.right(90));

example = "abcdefgh";
console.log(example.left(5).right(2));

var hello = "hello";
console.log(hello.padLeft(5));
console.log(hello.padLeft(10));
console.log(hello.padLeft(5, "."));
console.log(hello.padLeft(10, "."));
console.log(hello.padLeft(2, "."));

console.log(hello.padRight(5));
console.log(hello.padRight(10));
console.log(hello.padRight(5, "."));
console.log(hello.padRight(10, "."));
console.log(hello.padRight(2, "."));

var character = "*";
console.log(character.repeat(5));
// Alternative syntax
console.log("~".repeat(3));
// Another combination
console.log("*".repeat(5).padLeft(10, "-").padRight(15, "+"));