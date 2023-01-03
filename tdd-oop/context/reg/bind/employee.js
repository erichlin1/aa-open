export class Employee {
    constructor (name, occupation) {
        this.name = name;
        this.occupation = occupation;
    };
    
    sayName () {
        const ans = `${this.name} says hello`;
        console.log(ans)
        return ans;
    };
    sayOccupation () {
        return `${this.name} is a ${this.occupation}`;
    };

}
