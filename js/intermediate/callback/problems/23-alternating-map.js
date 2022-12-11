/*******************************************************************************
Write a function `alternatingMap` that accepts an array and two callbacks as
arguments. The function should return a new array containing the results of passing
the original elements into the callbacks in an alternating fashion.

In other words,
    - the first element should be passed to callback 1
    - the second element should be passed to callback 2
    - the third element should be passed to callback 1
    - the fourth element should be passed to callback 2
    - ... and so on

Examples:

let triple = function (n) {
    return 3 * n;
};

let half = function (n) {
    return n / 2;
};
console.log(alternatingMap([7, 3, 2, 9, 8], triple, half));
// [ 21, 1.5, 6, 4.5, 24 ]


let yell = function (s) {
    return s.toUpperCase() + '!';
};

let whisper = function (s) {
    return '..' + s.toLowerCase() + '..';
};
console.log(alternatingMap(['hEy', 'EVERYone', 'whats', 'uP??'], yell, whisper));
// [ 'HEY!', '..everyone..', 'WHATS!', '..up??..' ]

*******************************************************************************/


/* method #1
const alternatingMap = (arr, cb1, cb2) => {
    let result = [];
    for (let i = 0; i < arr.length; i += 1) {
        let el = arr[i];
        let cb1Ans = cb1(el);
        let cb2Ans = cb2(el);
            if (i % 2 == 0) {
                result.push(cb1Ans);
            } else {
                result.push(cb2Ans);
            };
    };
    return result;
}
*/

// method #2 - map

// returns a bool indicating whether it's even or not
const isEven = (param) => param % 2 == 0;

// returns a bool indicating whether it's odd or not
const isOdd = (param, even) => !even(param);

// returns  a deep array with each element of the original array altered by the 2 callbacks in alternating order
// notice that callbacks are passed implicitly because of closure
const alternatingMap = (arr, cb1, cb2) => {
    const result = arr.map((el, index) => {
        // return value of callback1
        let cb1Ans = cb1(el);
        // return value of callback2
        let cb2Ans = cb2(el);
        // if the current index is even, return the value of callback1, otherwise return value of callback2
        let ans = isEven(index) ? cb1Ans : cb2Ans;
        return  ans;
    });
    return result;
};



/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = alternatingMap;
