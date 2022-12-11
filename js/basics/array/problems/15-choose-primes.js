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

/* Method #1 - Array object, .some and filter

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
*/


// Method #2 - classic for loop
// From face value, this seems more time performant than Method #1 
/*
const isPrime = function(num) {
    for (let i = 2; i < num; i += 1) {
        if (num % i == 0) {
            return false;
        };
    };
    return true;

};
const choosePrimes = function(nums) {
    return nums.filter(el => isPrime(el));
};
*/


// method #3 - syntax-wise, looks simple, but not very performant for very large numbers.

const choosePrimes = function(nums) {
    // filter out numbers that are prime
    const result = nums.filter(num => {
        // creates an numerical iterable, sliced from 2 to 4 to delete trivial cases: 0, 1
        const iterable = [...Array(num).keys()].slice(2);
        // tests whether there exist a divisor (if so, return false);
        return iterable.some(el => num % el == 0) ? false : true;
    });
    return result;
};






/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = choosePrimes;
} catch (e) {
    module.exports = null;
}
