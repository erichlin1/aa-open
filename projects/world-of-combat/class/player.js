const {Character} = require('./character');
const {Enemy} = require('./enemy');
const {Food} = require('./food');

class Player extends Character {

  constructor(name, startingRoom) {
    super(name, "main character", startingRoom);
  }

  move(direction) {

    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;

      nextRoom.printRoom(this);
    } else {
      console.log("You cannot move in that direction");
    }
  };

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0 ; i < this.items.length ; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  };

  // player takes an item of itemName from room
  takeItem(itemName) {
    // current room inventory
    const roomInventory = this.currentRoom.items;
    // current item to take
    const item = roomInventory.find((el) => el.name == itemName);
    // returns index of itemName
    const itemNameIndex = roomInventory.findIndex((el) => el.name == itemName);
    // delete itemName of Item from room inventory
    roomInventory.splice(itemNameIndex, 1);
    // add itemName of Item to player inventory
    this.items.push(item);
  };

  dropItem(itemName) {
    // invoke same class instance method
    const item = this.getItemByName(itemName);
    // finds item in the items inventory
    const itemNameIndex = this.items.findIndex((el) => el == item);
    // deletes item from player inventory
    this.items.splice(itemNameIndex, 1);
    // adds item to room inventory
    this.currentRoom.items.push(item);
  };

  eatItem(itemName) {
    const item = this.getItemByName(itemName);
    if (item instanceof Food) {
        const foodIndex = this.items.findIndex((el) => el.name == itemName);
        this.items.splice(foodIndex, 1);
    };
  };

    // retrieves item from player inventory by name property
  getItemByName(name) {
    let ans;
    this.items.forEach((item) => {
        if (item.name == name) {
            ans = item;
        }
    });
    return ans;
  };


  hit(name) {

    // Fill this in

  }

  die() {
    console.log("You are dead!");
    process.exit();
  }

}

module.exports = {
  Player,
};
