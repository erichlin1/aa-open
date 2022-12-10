const Dragon = require('./dragon');

class FriendlyDragon extends Dragon {
    constructor (name, color, lifeGoals, friend) {
        super(name, color);
        this.lifeGoals = lifeGoals;
        this.friend = friend;
    };

    hasLifeGoals () {
        this.lifeGoals.forEach((goal) => console.log(`${this.name} likes to ${goal}`));
        return
    };

    helpsPeople () {
        const ans = `${this.name} helps their friend ${this.friend.name}`;
        return ans;
    };
};


/* Local Test Cases

const ariel = new FriendlyDragon('ariel', 'white');
const eragon = new FriendlyDragon('eragon', 'brown',['achieve fire breathing mastery'], ariel);
const ghanter = new FriendlyDragon('ghanter', 'silver',['become eragons best friend'], ariel, eragon);

console.log(ghanter.hasLifeGoals());
console.log(eragon.helpsPeople());


*/



module.exports = FriendlyDragon;

