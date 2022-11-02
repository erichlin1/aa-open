/*
Write a function `unique` that accepts an array as an argument. The function
should return a new array containing elements of the input array, without
duplicates.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(unique([1, 1, 2, 3, 3])); // [1, 2, 3]
console.log(unique([11, 7, 8, 10, 8, 7, 7])); // [11, 7, 8, 10]
console.log(unique(['a', 'b', 'c', 'b'])); // ['a', 'b', 'c']

*/

/* method #1 - forEach
let unique = function(array) {
    let isUnique = [];
    array.forEach(el => {
        if (!isUnique.includes(el)) {
            isUnique.push(el);
        };
    });
    return isUnique;    
};;
*/


/* method #2 - obj
let unique = function(array) {
    let obj = {};
    array.forEach(el => obj[el] = el);
    let result = Object.values(obj);
    return result;
};
*/

// method #3 - filter
let unique = function(array) {
    const result = array.filter((num, index, array) => array.includes(num) ? false : true);
    return result;
};



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = unique;
} catch (e) {
    module.exports = null;
}
