
const isEven = (num) => num % 2 == 0;

try {
    module.exports = isEven;
  } catch {
    module.exports = null;
  }