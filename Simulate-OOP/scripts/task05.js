'use strict';

var Vector = function(dimensions) {
    if (!dimensions || dimensions.length < 1 || dimensions.constructor !== Array) {
        throw new DOMException('Vector constructor expected an array containing its dimension values');
    }

    this.dimensions = dimensions;

    this.toString = function() {
        return '(' + this.dimensions.join(', ') + ')';
    }
};

Vector.prototype.add = function(vectorToAdd) {
    if (vectorToAdd.constructor !== Vector) {
        throw new DOMException('Operation with Vectors allow only Objects of type Vector');
    }

    if (this.dimensions.length !== vectorToAdd.dimensions.length) {
        throw new DOMException('Operations with Vectors require Vectors with same dimensions');
    }

    var resultedVector = [];

    for (var index in this.dimensions) {
        resultedVector.push(this.dimensions[index] + vectorToAdd.dimensions[index]);
    }

    return new Vector(resultedVector);
}

Vector.prototype.subtract = function(vectorToSubtract) {
    if (vectorToSubtract.constructor !== Vector) {
        throw new DOMException('Operation with Vectors allow only Objects of type Vector');
    }

    if (this.dimensions.length !== vectorToSubtract.dimensions.length) {
        throw new DOMException('Operations with Vectors require Vectors with same dimensions');
    }

    var resultedVector = [];

    for (var index in this.dimensions) {
        resultedVector.push(this.dimensions[index] - vectorToSubtract.dimensions[index]);
    }

    return new Vector(resultedVector);
}

Vector.prototype.dot = function(vectorToDot) {
    if (vectorToDot.constructor !== Vector) {
        throw new DOMException('Operation with Vectors allow only Objects of type Vector');
    }

    if (this.dimensions.length !== vectorToDot.dimensions.length) {
        throw new DOMException('Operations with Vectors require Vectors with same dimensions');
    }

    var product = 0;

    for (var index in this.dimensions) {
        product += (this.dimensions[index] * vectorToDot.dimensions[index]);
    }

    return product;
}

Vector.prototype.norm = function() {
    if (this.constructor !== Vector) {
        throw new DOMException('Operation with Vectors allow only Objects of type Vector');
    }

    var result = 0;

    for (var index in this.dimensions) {
        result += this.dimensions[index] * this.dimensions[index];
    }

    return Math.sqrt(result);
}


// TESTS

var a = new Vector([1, 2, 3]);
var b = new Vector([4, 5, 6]);
var c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);

console.log(a.toString());
console.log(c.toString());
// The following throw errors
// var wrong = new Vector();
// var anotherWrong = new Vector([]);
var result = a.add(b);

console.log(result.toString());
// a.add(c); // Error

var result = a.subtract(b);
console.log(result.toString());

var result = a.dot(b);
console.log(result.toString());

console.log(a.norm());
console.log(b.norm());
console.log(c.norm());
console.log(a.add(b).norm());
