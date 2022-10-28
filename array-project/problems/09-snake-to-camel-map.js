/*
Write a function `snakeToCamel` that takes in a snake_cased string and returns a
PascalCased version of the string. snake_case is where each word is separated
with underscores(`_`). PascalCase is a string where the first char of each word
is capital, all other chars lowercase.

Solve this using `array.map()`.

Examples:

console.log(snakeToCamel('snakes_go_hiss')); // 'SnakesGoHiss'
console.log(snakeToCamel('say_hello_world')); // 'SayHelloWorld'
console.log(snakeToCamel('app_academy_is_cool')); // 'AppAcademyIsCool'
console.log(snakeToCamel('APp_ACADEMY_iS_cOol')); // 'AppAcademyIsCool'

*/

function snakeToCamel(str) {
    // separates each word by '-' into an array
    let tar = str.split('_');
    // map each value to an new array with the 1st char capitalized 
    const result = tar.map(el => {
        // lower cased every char
        const elLow = el.toLowerCase();
        // upper cased first char
        const firstChar = elLow[0].toUpperCase();
        // last index is inclusive
        const elSliced = elLow.slice(1);
        // pascal cased
        const pascalCased = `${firstChar}${elSliced}`;
        // return a new string
        return pascalCased;
    });
    // return a string with each value joined without a delimiter
    return result.join('');
} 

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = snakeToCamel;
} catch (e) {
    module.exports = null;
}
