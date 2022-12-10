const Person = require('./person');

class Teacher {
  constructor (firstName, lastName, age, subject, yearsOfExperience) {
      // invoking super function to access parent class properties
      super(firstName, lastName, age);
      this.subject = subject;
      this.yearsOfExperience = yearsOfExperience;
  };
  static combinedYearsOfExperience (teachers) {
      // invoking the reducer function to sum all years of experience
      const totalYearsOfExp = teachers.reduce(function (acc, curr) {
          const years = curr.yearsOfExperience;
          return acc + years;
      },0);
      return totalYearsOfExp;
  };

}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}