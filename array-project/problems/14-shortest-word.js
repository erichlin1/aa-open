/*
Write a function `shortestWord` that accepts a sentence as an argument.
The function should return the shortest word in the sentence. If there is a tie,
return the word that appears later in the sentence.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(shortestWord('what a wonderful life'));     // 'a'
console.log(shortestWord('the quick brown fox jumps')); // 'fox'
console.log(shortestWord('do what you enjoy'));         // 'do'

*/

/* Method #1
input: long string
output: shortest string
condition: if the length of two strings are equavalent, then return later word.

*/
// method #1
let shortestWord = function(sentence) {
  const tar = sentence.split(' ');
  let shortest = tar[0];
  tar.forEach(el => {
      if (el.length <= shortest.length) {
          shortest = el;
      };
  });
  return shortest;
};




// Your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = shortestWord;
} catch (e) {
  module.exports = null;
}
