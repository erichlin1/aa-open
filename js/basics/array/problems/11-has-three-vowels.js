/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/
/* method #1 - for...of
let hasThreeVowels = function(string) {
    const stringLow = string.toLowerCase();
    const vowels = 'aeiou';
    const vowelCounter = {};
    // create an object of vowel counts;
    for (let char of stringLow) {
        // checks if the character is a vowel
        if (vowels.includes(char)) {
            // if truthy, increment the value of the associated vowel by 1
            // if falsy, initialize the associated vowel by 1
            vowelCounter[char] ? vowelCounter[char] += 1 : vowelCounter[char] = 1;
        };
    };
    // number of vowels in the object
    const vowelCount = Object.keys(vowelCounter).length;
    // true if there are atleast 3 vowels 
    const result = vowelCount >= 3;
    return result;
};
*/


// method #2
const hasThreeVowels = function(string) {
    const vowelCounter = {};
    const stringLowList = string.toLowerCase().split('');
    // filter out the vowels of the string
    const filtered = stringLowList.filter(el => 'aeiou'.includes(el));
    filtered.forEach(el => vowelCounter[el] = undefined);
    // if there are 3 unique vowels, then 
    return Object.keys(vowelCounter).length >= 3;
};


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}
