/*******************************************************************************
Write a function `exactly` that accepts an array, a number, and a callback as
arguments. The function should return a boolean indicating whether or not there are
exactly `number` elements of the array that return true when passed into the callback.

Examples:

let result1 = exactly([18, 5, 32, 7, 100], 3, function (n) {
    return n % 2 === 0;
});
console.log(result1); // true

let result2 = exactly([18, 5, 32, 7, 100], 2, function (n) {
    return n % 2 === 0;
});
console.log(result2); // false

let result3 = exactly(['follow', 'the', 'yellow', 'brick', 'road'], 1, function (str) {
    return str.includes('x');
});
console.log(result3); // false

let result4 = exactly(['follow', 'the', 'yellow', 'brick', 'road'], 0, function (str) {
    return str.includes('x');
});
console.log(result4); // true

*******************************************************************************/

//method #1 - Every (if every values returns true, then it's exactly 'number' values) 
let exactly = function(array, number, callback) {
    
};

// method #2 - some (if there is atleast 1 value that returns false then there isn't exactly 'number' elements )
let exactly = function(array, number, callback) {
    
};

// method #3




/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = exactly;
