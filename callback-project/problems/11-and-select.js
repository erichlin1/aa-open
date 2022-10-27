/*******************************************************************************
Write a function `andSelect` that accepts an array and two callbacks. The function
should return a new array containing elements of the original array that result in
true when passed into both callbacks.

Examples:

let isEven = function (n) {
    return n % 2 === 0;
};

let isPositive = function (n) {
    return n > 0;
};

console.log(andSelect([-3, 8, 7, 11, 6, 12, -4], isEven, isPositive));
// [ 8, 6, 12 ]

let isUpperCase = function (s) {
    return s === s.toUpperCase();
};

let startsWithA = function (s) {
    return s[0].toUpperCase() === 'A';
}
console.log(andSelect(['ants', 'APPLES', 'ART', 'BACON', 'arm'], isUpperCase,  startsWithA));
// [ 'APPLES', 'ART' ]

*******************************************************************************/

/* method #1
const andSelect = function(array, callback1, callback2) {
    let result = [];
    for (let el of array) {
        let result1 = callback1(el);
        let result2 = callback2(el);
        if (result1 && result2) {
            result.push(el);
        };
    };
    return result;

};
*/

// method #2 - forEach
/*
const andSelect = function(array, callback1, callback2) {
    let result = [];
    array.forEach(function(el) {
        callback1(el) && callback2(el)  ? result.push(el) : false;
    });
    return result;
};
*/
// method #3 - filter
/*
const andSelect = function(array, callback1, callback2) {
    const result = array.filter(function(el) {
        return callback1(el) && callback2(el);
    });
    return result;

};
*/

// method #4 - filter with arrow function 
const andSelect = function(array, callback1, callback2) {
    return array.filter(el => callback1(el) && callback2(el));

};



/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = andSelect;
