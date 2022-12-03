class Dragon {
    constructor (name, color) {
        this.name = name;
        this.color = color;
    };

    breathesFire () {
        return `${this.name} breathes fire everywhere! BURN!!!!`;
    };

    static getDragons (...dragons) {
        const dragonNames = [];
        dragons.forEach((dragon) => dragonNames.push(dragon.name));
        return dragonNames;
    };

};


/* Local Test Cases

const eragon = new Dragon('eragon', 'brown');
const ariel = new Dragon('ariel', 'white');
const ghanter = new Dragon('ghanter', 'silver');

console.log(eragon.breathesFire());
console.log(Dragon.getDragons(eragon, ariel, ghanter));

*/


try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}