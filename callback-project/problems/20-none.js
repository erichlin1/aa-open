/*******************************************************************************
Write a function `none` that accepts an array and a callback as arguments.
The function should call the callback for each element of the array, passing in
the element. The function should return true if all
elements of the array result to false when passed into the callback. Otherwise,
the method should return false.

Examples:

let result1 = none(['ruby', 'topaz', 'opal'], function(w) {
    return w.includes('e');
});
console.log(result1);   // true

let result2 = none(['ruby', 'topaz', 'sapphire', 'opal'], function(w) {
    return w.includes('e');
});
console.log(result2);   // false

let result3 = none([4, 5, 7, 1], function(n) {
    return n < 0;
});
console.log(result3);   // true

let result4 = none([4, -5, 7, -1], function(n) {
    return n < 0;
});
console.log(result4);   // false
*******************************************************************************/

/* method #1 
const none = (arr, cb) => {
    // if there exist atleast one element that's true => not all elements in the array is false.
    const ans = arr.some(el => cb(el));
    // if not all elements in the array is false, return false
    const result = ans ? false : true;
    return result;
}
*/

// method #2 - one line expression
const none = (arr, cb) => arr.some(el => cb(el)) ? false : true;






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = none;
