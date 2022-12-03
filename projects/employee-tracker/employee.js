class Employee {
    constructor (name, salary, title, manager) {
        this.name = name;
        this.salary = salary;
        this.title = title;
        manager ? this.manager = manager : this.manager = null;

    };

    calculateBonus(multiplier) {
        const bonus = this.salary * multiplier;
        return bonus;
    }
    
};




module.exports = Employee;