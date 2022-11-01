/*

Write a function `hipsterfy(sentence)` that takes in a sentence string and
returns the sentence where every word is missing it's last vowel.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

*/


/* method #1
let removeLastVowel = function(word) {
    const vowels = 'aeiouAEIOU';
    // letter string to array
    let letters = word.split('');
    // return the index of the last vowel
    const lastIndexOfVowel = letters.findLastIndex(char => vowels.includes(char));
    // altering in place
    letters.splice(lastIndexOfVowel, 1);
    return letters.join('');
};

let hipsterfy = function(sentence) {
    let words = sentence.split(' ');
    words.forEach((word, index, words) => {
        words[index] = removeLastVowel(word);
    });
    return words.join(' ');

};
*/
// method #2

const removeLastVowel = function(word) {
    const vowels = 'aeiouAEIOU';
    // letter string to array
    let letters = word.split('');
    // return the index of the last vowel
    const lastIndexOfVowel = letters.findLastIndex(char => vowels.includes(char));
    // altering in place
    letters.splice(lastIndexOfVowel, 1);
    return letters.join('');
};


const hipsterfy = function(sentence) {
    const result = sentence.split(' ').map(word => removeLastVowel(word)).join(' ');
    return result;

};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hipsterfy;
} catch (e) {
    module.exports = null;
}
