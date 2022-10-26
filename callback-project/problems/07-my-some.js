/*******************************************************************************
Write a function `mySome` that accepts an array and a callback as an argument.
The function should call the callback for each element of the array, passing in
the element and its index. The function should return a boolean
indicating whether or not at least one element of the array returns true when passed
into the callback.

Examples:

let result1 = mySome([5, 1, 7, 9], function(ele, i) {
    return ele === i;
});
console.log(result1);   // true

let result2 = mySome([5, 3, 7, 9], function(ele, i) {
    return ele === i;
});
console.log(result2);   // false

let result3 = mySome(['soup', 'noodles', 'bike', 'ship'], function(ele) {
    return ele.length === 4;
});
console.log(result3);   // true
*******************************************************************************/

/* method #1 - forEach method - not very efficient as forEach executes for each value regardless if its true.
let mySome = function(array, callback) {
    let ans;
    array.forEach(function(ele) {
        const result = callback(ele);
        if (result) {
            ans = true;
        };
    })
    return ans;
};
*/

/* method #2 - iterator, terminates right when a value returns true
let mySome = function(array, callback) {
    for (let i = 0; i < array.length; i += 1) {
        let el = array[i];
        if (callback(el, i)) {
            return true;
        };
    };
    return false;
};
*/

// method #3
const mySome = function(array,callback) {
    array.some(function(el) {
        return callback(el);
    });
};



/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = mySome;
