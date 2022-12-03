const Employee = require('./employee');

// creating child class 'Manager' of parent class 'Employee'
class Manager extends Employee {    
    //
    constructor (name, salary, title, manager, employees) {
        // invoking super function to access parent class properties
        super(name, salary, title, manager);
        // assigns employees parameter to an empty array if it's not defined
        employees == undefined ? this.employees = [] : this.employees = employees;
    };

    // adds Employee instance to employees list
    addEmployee (employee) {
        this.employees.push(employee);
    };

};




/* local test cases */


// employee and manager list
const sensei  = new Manager('Sensei', 9000, 'Ninja', null, []);
const michelangelo = new Employee ('Michelangelo', 9000, 'Ninja', sensei);
const raphael = new Employee('Raphael', 90000, 'Ninja', sensei);

sensei.addEmployee(michelangelo);
sensei.addEmployee(raphael);


console.log(sensei);


// exporting Manager class
module.exports = Manager;