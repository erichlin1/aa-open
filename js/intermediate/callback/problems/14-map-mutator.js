/*******************************************************************************
Write a function `mapMutator` that accepts an array and a callback as arguments.
The function should pass each element and index into the callback and use the result
to overwrite elements of the original array, mutating the array.

Examples:

let arr1 = [4, 2, 6, 5];
mapMutator(arr1, function (el) {
    return el * 2;
});
console.log(arr1);  // [ 8, 4, 12, 10 ]

let arr2 = [8, 9, 10];
mapMutator(arr2, function (el, i) {
    return el * i;
});
console.log(arr2); // [ 0, 9, 20 ]
*******************************************************************************/

/* method #1 - classic for loop
let mapMutator = function(array, callback) {
    for (let i = 0; i < array.length; i += 1) {
        array[i] = callback(array[i], i);
    };

    return array;
};
*/

/* method #2 - map (return a modified original array instead of the return aray from the map function)
let mapMutator = function(array, callback) {
    array.map((el,i) => array[i] = callback(el, i));
    return array;
};
*/

// Method #3 - forEach (forEach is more performant than map and still achieve the same result)
let mapMutator = function(array, callback) {
    return array.forEach((el, i) => array[i] = callback(el, i));
};




/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = mapMutator;
