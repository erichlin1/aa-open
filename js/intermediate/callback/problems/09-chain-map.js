/*******************************************************************************
Write a function `chainMap` that accepts a value and any number of callbacks as
arguments. The function should return the final result of passing the value through
all of the given callbacks. In other words, if three callbacks are given then:

- the value is given to the first callback
- the result of the first callback is given to the second callback
- the result of the second callback is given to the third callback
- the result of the third callback is the final result

Examples:

let add5 = function(n) {
    return n + 5;
};

let half = function(n) {
    return n / 2;
};

let square = function(n) {
    return n * n;
};

console.log(chainMap(25, add5));                // 30
console.log(chainMap(25, add5, half));          // 15
console.log(chainMap(25, add5, half, square));  // 225
console.log(chainMap(4, square, half));         // 8
console.log(chainMap(4, half, square));         // 4
*******************************************************************************/


/* method #1 - classic for loop
let chainMap = function(x, ...args) {
    // gather all callbacks using rest parameter
    let result = 0;
    for (let i = 0; i < args.length; i += 1) {
        const callback = args[i];
        result += callback(x);
    };
    return result;
};
*/

// method #2  - recursion with a base case
const chainMap = function(x, ...args) {
    let base = args.length;
    const result = helper(base, x, args);
    
};
const helper = function(base, args, x) {
    let n = 0;
    if (n == base) {
        return result;
    } else {
        const callback = args[n];
        let result = callback(result);
        helper(n + 1,)
       
    }

};









/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = chainMap;
