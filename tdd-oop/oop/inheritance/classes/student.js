const Person = require('./person');

// Your code here
class Student extends Person {
    // invoking super function to access parent class's properties
    constructor (firstName, lastName, age, major, GPA) {
        super(firstName, lastName, age);
        this.major = major;
        this.GPA = GPA;
    };
    static compareGPA (student1, student2) {
        const gpa1 = student1.GPA;
        const gpa2 = student2.GPA;
        const name1 = `${student1.firstName} ${student1.lastName}`;
        const name2 = `${student2.firstName} ${student2.lastName}`;
        const sentence = 'has the higher GPA.';
        if (gpa1 > gpa2) {
            return `${name1} ${sentence} `;
        } else if (gpa2 > gpa1) {
            return `${name2} ${sentence} `;
        } else {
            return "Both students have the same GPA."
        }
    };
};

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}