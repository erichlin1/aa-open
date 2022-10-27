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

/* method #1 - filter 

let exactly = function(array, number, callback) {
    const result = array.filter(function(el) {
        return callback(el);
    });
    return result.length == number;
};

*/

/* method #2 - map
let exactly = function(array, number, callback) {
    let count = 0;
    // replace each value that returns true by test function
    const result = array.map(function(el) {
        return callback(el);
    });
    // could apply pattern of method #1 or use for..of
    for (let bool of result) {
        if (bool) {
            count += 1;
        };
    };
    return count == number;
};
*/

/* method #3 - map, method chaining
let exactly = function(array, number, callback) {
    const result = array.map(function(el) {
        return callback(el);
    }).filter(function(el) {
        return el;
    });
    return result.length == number;
};
*/

// method #3 - map, method chaining and arrow function

let exactly = function(array, number, callback) {
    return array.map(el => callback(el)).filter(el => el).length == number;
};








/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = exactly;
