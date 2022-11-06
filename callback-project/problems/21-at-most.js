/*******************************************************************************
Write a function `atMost` that accepts an array, a max number, and a callback as
arguments. The function should return a boolean indicating whether or not there are
at most (fewer than or equal to) `max` elements of the array that result in true
when passed into the callback.

Examples:

let isPositive = function (n) {
    return n > 0;
};
let startsWithA = function (s) {
    return s[0].toUpperCase() === 'A';
};

console.log(atMost([6, -2, 4, -1], 3, isPositive));                             // true
console.log(atMost([6, -2, 4, 1], 3, isPositive));                              // true
console.log(atMost([6, 2, 4, 1], 3, isPositive));                               // false
console.log(atMost(['boat', 'cat', 'car'], 1, startsWithA));                    // true
console.log(atMost(['boat', 'cat', 'car', 'academy'], 1, startsWithA));         // true
console.log(atMost(['boat', 'arc', 'cat', 'car', 'academy'], 1, startsWithA));  // false

*******************************************************************************/

/* method #1
const atMost = (arr, max, cb) => {
    // filters values that are true from the callback
    const ans = arr.filter(el => cb(el));
    // checks if there are less than or equal to the max;
    const result = ans.length <= max;
    return result;
};
*/
/* method #2 - count approach
const atMost = (arr, max, cb) => {
    let count = 0;
    arr.forEach(el => {
        if (cb(el)) {
            count += 1;
        }
    });
    return count <= max;
};
*/

// method #3 - classic loop
const atMost = (arr, max, cb) => {
    let count = 0;
    for (let el of arr) {
        if (cb(el)) {
            count += 1;
        }
        if (count > max) {
            return false;
        }
    };
    return true;
};





/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = atMost;
