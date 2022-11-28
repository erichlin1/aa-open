/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/
/* method #1
let minValueCallback = function(array, callback) {
    if (callback == undefined) {
        return Math.min(...array);
    } else {
        const result = callback(Math.min(...array));
        return result;
    };
};
*/

// method #2 - ternary operator
let minValueCallback = function(array, callback) {
    const min = Math.min(...array);
    return callback == undefined ? min : callback(min);
};










/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = minValueCallback;
