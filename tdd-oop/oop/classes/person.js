class Person {
    constructor (firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    introduce () {
        console.log(`Hi, I'm ${this.firstName} ${this.lastName} and i'm ${this.age} years of old.`)
    };
    static introducePeople (...persons) {
        // if param is non-Array
        const isArray = Array.isArray(persons);
        const allPersons = persons.every(person => person instanceof Person);
        if (isArray) {
            // if any instances in the array is not instance of the Person
            if (allPersons) {
                persons.forEach(person => person.introduce());
            } else {
              console.log('All items in array must be Person class instances.')
            }
        } else {
            console.log('introducePeople only takes an array as an argument');
        };
        
        // else invoke introduce method on each element
    };
};


/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}