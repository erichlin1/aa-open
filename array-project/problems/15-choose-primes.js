/*

Write a function `choosePrimes(nums)` that takes in an array of numbers as args.
The function should return a new array containing the primes from the original
array.

A prime number is a number that is only divisible by 1 and itself.

Hint: consider creating a helper function to check if a number is prime!

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]

*/

// Method #1

const isPrime = function(num) {
    let prime;
    // creates an array with numbers ranging from 0 up to num, exclusive;
    const coll =  Array.from({length: num}, (x, i) => i);
    // indicates whether num is a prime (1 and 0 are trivial cases)
    const result = coll.some(el => num % el == 0 && el != 1 && el != 0);
    // since .some method returns true if num is not prime
    return result ? false : true;
}

const choosePrimes = function(nums) {
    const result = nums.filter(el => isPrime(el));
    return result;
}


/* Method #2
let choosePrimes = function(nums) {
};
*/





// alternative solution using Array.filter
// let choosePrimes = function(nums) {
//     return nums.filter(isPrime);
// }

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = choosePrimes;
} catch (e) {
    module.exports = null;
}
