const { stdin, stdout } = require('process');
const readline = require('readline');

// creates a readline.Interface object, which question can be invoked
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

/*
const randomInRange = (min, max) => {
    return Math.random() * (max - min) + min;
};
*/

const checkGuess = (min, max, ans) => {
    console.log(min, max, ans);
    if (ans > max) {
        console.log('Too high');
        return false;
    } else if (ans < min) {
        console.log('Too low');
        return false;
    } else {
        console.log('Correct!');
        return true;
    }
};

/* Local Test Cases

console.log(checkGuess(5) == true);
console.log(checkGuess(1) == false);
console.log(checkGuess(7) == false);

*/

const askRange = () => {
    askMin();
}
askRange();
/* prompts user to enter min number */
function askMin() {
    rl.question('Enter a min number: ', askMax);

};
/* prompts user to enter max number */
/* passed in both min and max variables in the callback function because
   min and max are not enclosed
*/
function askMax(min) {
    rl.question('Enter a max number: ', (max) => askGuess(min, max));

};

function askGuess(min, max) {
    console.log(`I'm thinking of a number between ${min} and ${max}...`);
    rl.question('Enter a guess: ', (number) => {
        const ans = Number(number);
        const minNumber = Number(min);
        const maxNumber = Number(max);
        checkGuess(minNumber, maxNumber, ans) ? rl.close() : askGuess(min, max);
    });
    
};




/* Local Test Case 

console.log(randomInRange(min, max) < max  && randomInRange(min, max) > min);

*/



