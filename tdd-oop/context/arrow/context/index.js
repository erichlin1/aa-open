const User = require('./classes/user');

const michelle = new User('Michelle');

function greetAfterNameChange(changeName, newName) {
  const name = changeName(newName);

  console.log(`Hi my name is ${name}`);
}

// method #1 - bind instance method of `michelle` to the instance class
//greetAfterNameChange(michelle.changeName.bind(michelle), 'Elle');

// method #2 - convert class method using an arrow function
greetAfterNameChange(michelle.changeName, 'Elle');


  // should print out: Hi my name is Elle