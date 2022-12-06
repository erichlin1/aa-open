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

    // adds all salaries
    _totalSalary () {
        let sum = 0;
        const total = (list) => {
            list.forEach((ele) => {
                // checks if the current instance is of class Employee
                if (ele instanceof Employee) {
                    sum = sum + ele.salary;
                    
                } else {
                    sum = sum + ele.salary;
                    total(ele.employees);
                };

            });
        };
        total(this.employees);
        return sum;
    };



    // calculates Manager's bonus
    calculateBonus (multiplier) {
        const bonus = this.salary * multiplier;
        return bonus;
    };


};




// local test cases 

/*
const splinter = new Manager('Splinter', 2, 'Sensei');
const leo = new Manager('Leonardo', 1, 'Ninja', splinter);
const raph = new Manager('Raphael', 1, 'Ninja', leo);
const mikey = new Employee('Michelangelo', 1, 'Grasshopper', raph);
const donnie = new Employee('Donatello', 1, 'Grasshopper', raph);

splinter.addEmployee(leo);
leo.addEmployee(raph);
raph.addEmployee(mikey, donnie);


splinter._totalSalary();

*/



// exporting Manager class
module.exports = Manager;