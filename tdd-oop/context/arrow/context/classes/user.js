class User {
  constructor(name) {
    this.name = name;
  }
  /* method #1
  changeName(newName) {
    this.name = newName;
    return this.name;
  }
  */
  /* method #2 */
  changeName = (newName) => {
    this.name = newName;
    return this.name;
  };
}

module.exports = User;