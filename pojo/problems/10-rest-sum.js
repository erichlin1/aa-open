/***********************************************************************
Write a function named `restSum` that accepts all incoming parameters and sums them.

**Hint**: Use rest parameter syntax!

Examples:
restSum(3,5,6); // => 14
restSum(1, 2, 3, 4, 5, 6, 7, 8, 9); // => 45
restSum(0); // => 0
***********************************************************************/

/* method #1
function restSum(...otherNums) {
      let sum = 0;
      for (let i = 0; i < otherNums.length; i += 1) {
            let el = otherNums[i];
            sum += el;
      };
      return sum;
};
*/
// method #2
function restSum(...otherNums) {
      let sum = otherNums.reduce(function(a, b) {
            return a + b
      }, 0);
      return sum;
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = restSum;