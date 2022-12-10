const {Character} = require('./character');
const {Player} = require('./player');
const {Room} = require('./room');



class Enemy extends Character {
  constructor(name, description, currentRoom, strength, health, cooldown) {
      // delay is set to default 3000ms in base class
      super (name, description, currentRoom, strength, health, cooldown);
  }

  setPlayer(player) {
    this.player = player;
  }


  randomMove() {
    // Fill this in
  }

  takeSandwich() {
    // Fill this in
  }

  // Print the alert only if player is standing in the same room
  alert(message) {
    if (this.player && this.player.currentRoom === this.currentRoom) {
      console.log(message);
    }
  }

  rest() {
    // Wait until cooldown expires, then act
    const resetCooldown = function() {
      this.act();
    };
    setTimeout(resetCooldown, this.cooldown);
  }

  attack() {
    // Fill this in
  }

  applyDamage(amount) {
    // Fill this in
  }



  act() {
    if (this.health <= 0) {
      // Dead, do nothing;
    } else if (this.cooldown > 0) {
      this.rest();
    } else {
      this.scratchNose();
      this.rest();
    }

    // Fill this in
  }


  scratchNose() {
    this.cooldown += 1000;

    this.alert(`${this.name} scratches its nose`);

  }


}

let northRoom = new Room('north room', 'the room in the northside');
// both enemy and player are in the same room
let enemy = new Enemy('goblin', 'main antagonist', northRoom);
let player = new Player("player", northRoom);

enemy.setPlayer(player);
enemy.rest();
console.log(enemy.cooldown);



module.exports = {
  Enemy,
};
