'use strict';

// TASK 03
var array = [1, 2, 3, 4];
var array = [1, 2, [3, 4],
    [5, 6]
];

var array = [0, ["string", "values"], 5.5, [
    [1, 2, true],
    [3, 4, false]
], 10];

Array.prototype.flaten = function() {
    var flatenArray = [];

    var extractArray = function(arr) {
        if (arr.constructor === Array) {
            for (var i = 0; i < arr.length; i += 1) {
                extractArray(arr[i]);
            }
        } else {
            flatenArray.push(arr);
        }

        return flatenArray;
    }

    return extractArray(this);
}

// TESTS

// console.log(array); // ORIGINAL ARRAY IS NOT TOUCHED
console.log(array.flaten());
