
const isFive = (num) => num == 5;

try {
    module.exports = isFive;
  } catch {
    module.exports = null;
  }