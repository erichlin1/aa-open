const {Item} = require('./item.js');

class Food extends Item{
    constructor (name, description) {
      super(name, description);
    };


}


/* Local Test Cases

let food = new Food("sandwich", "a delicious sandwich");
let item = new Item("rock", "just a simple rock");

console.log(food instanceof Food);
console.log(food instanceof Item);

*/


module.exports = {
  Food,
};
