/*
Write a function `repeatingTranslate` that accepts a sentence as an argument.
The function should translate the sentence according to the following rules:

- words that are shorter than 3 characters are unchanged
- words that are 3 characters or longer are translated according to the
  following rules:
  - if the word ends with a vowel, simply repeat the word twice (example:
    'like'->'likelike')
  - if the word ends with a non-vowel, repeat all letters that come after the
    word's last vowel, including the last vowel itself (example:
    'trash'->'trashash')

Note that if words are capitalized in the original sentence, they should remain
capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Can you reduce the problem into helper functions?

Examples:

console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"

*/


/*
input: long string
output: long string
condtions:
1. words less than 3 characters , unchanged
2. words more than 3 characters:
        a. If word ends with a vowel, repeat the word twice
        b. If word ends with non-vowel, repeat all characters after last vowel, including the last vowel
    


*/

const repeatingTranslate = function(sentence) {
    let words = sentence.split(' ');
    // creates a deep copy of the source array and replaces each element based on the condition
    const result = words.map(word => word.length < 3 ? word : translateWord(word));
    // returns the sentence with each word joined by an empty char
    return result.join(' ');


};

const translateWord = function(word) {
    const vowels = 'aeiouAEIOU';
    // converting to array of letters
    const letters = word.split('');
    // returns the last index of the vowel
    const lastVowelIndex = letters.findLastIndex(char => vowels.includes(char));
    // condition #1
    const repeat = letters.concat(letters);
    // condition #2
    const partialRepeat = letters.slice(lastVowelIndex);
    // last letter
    const lastLetter = letters.length - 1;
    // checks if the last letter is a vowel
    const isLastVowel = letters[lastLetter] == lastVowelIndex;
    // returns condition #1 if true else conditional #2
    const result = isLastVowel ? repeat : letters.concat(partialRepeat);
    // return to repeatingTranslate
    return result.join('');

};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = repeatingTranslate;
} catch (e) {
    module.exports = null;
}
