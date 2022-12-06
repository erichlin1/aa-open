const {Room} = require('./room.js');
const {Item} = require('./item.js');

class Character {

  constructor(name, description, currentRoom, strength, health, cooldown, items) {
      this.name = name;
      this.description = description;
      this.currentRoom = currentRoom;
      this.strength = 10;
      this.health = 100;
      this.cooldown = 3000;
      this.items = [];
  }

  applyDamage(amount) {
    this.health = this.health - amount;
      if (this.health <= 0) {
        this.die();
      };
  }

  die() {
    // items are dropped from player inventory to current room
    this.currentRoom.items = this.items;
    this.currentRoom = null;
    // character drops all items when dead
    this.items = [];
  }

}

/* Local Test Cases

let room =  new Room("Test Room", "A test room");
let item = new Item("rock", "just a simple rock");
let character = new Character('Character', 'an ordinary character', room);

character.applyDamage(100);

*/







module.exports = {
  Character,
};
