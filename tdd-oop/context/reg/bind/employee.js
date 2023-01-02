export class Employee {
    constructor (name, occupation) {
        this.name = name;
        this.occupation = occupation;
    };
    
    sayName () {
        `${this.name} says hello`;
    };
    sayOccupation () {
        `${this.name} is a ${this.occupation}`;
    };

}
