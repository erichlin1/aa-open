const readline = require('readline');

// creates a readline.Interface object, which question can be invoked
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// generates a random number between the range of min and max specified by the user
const randomInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

// checks if the user input value is the same as random
const checkGuess = (userGuess, random) => {

    if (userGuess > random) {
        console.log('Too high');
        return false;
    } else if (userGuess < random) {
        console.log('Too low');
        return false;
    } else if (userGuess == random) {
        console.log('Correct!');
        return true;
    } else {
        console.log('Please enter a valid entry - numbers only');
        return false;
    }
    
};


/* prompts user to enter min number */
function askMin() {
    rl.question('Enter a min number: ', askMax);

};

/* prompts user to enter max number. Min and Max are not enclosed. */
function askMax(min) {
    rl.question('Enter a max number: ', (max) => randomNumber(min, max));

};

/* invokes random generator function and asks user to input the amount of attempts */
function randomNumber(min, max) {
    console.log(`I'm thinking of a number between ${min} and ${max}...`);
    const minNumber = Number(min);
    const maxNumber = Number(max);
    const random = randomInRange(minNumber, maxNumber);
    rl.question('specify the number of attempts: ', (attempts) => askGuess(random, attempts));
    
};

/* prompts user to guess a number */
function askGuess(random, attempts) {
    attempts -= 1;
    rl.question('Enter a guess: ', (number) => {
        const userGuess = Number(number);
        let checked = checkGuess(userGuess, random);
        if (attempts) {
            console.log(`You have ${attempts} attempts left`);
        } else {
            console.log(`You have no more attempts - good try`);
        }
        if (checked || attempts == 0) {
            rl.close();
        } else {
            askGuess(random, attempts);
        };
    });
};

const askRange = () => {
    askMin();
}
askRange();


/** NOTES 
1. variables will not be enclosed for an intended function if it is defined in global scope.
2. readline.createInterface() creates a readline.interface class object which has a method question
3. question prompts user in the terminal - writable stream
4. readline.createInferface().question() is a asynch function

*/