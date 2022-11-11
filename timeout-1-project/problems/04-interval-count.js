/***********************************************************************
Write a function, `intervalCount`, that accepts a callback, a delay in 
milliseconds, and an amount. The function should set an interval with 
the given callback and delay, but clear the interval after the callback
has been executed 'amount' number of times.

Hint: utilize a 'closure' to your advantage

In addition to Mocha, we recommend that you test your code manually using 
node with the examples below.

Example

intervalCount(function() {
    console.log('hi');
}, 500, 3); // prints 'hi' at 500ms intervals a total of 3 times
***********************************************************************/

/* method #1
const intervalCount = (cb, delay, amount) => {

}
*/

// method #2
const intervalCount = (cb, delay, amount) => {
  const inCb = () => {
    amount -= 1;
    cb();
    console.log(amount);
    if (!amount) {
        clearInterval(id);
    };
  };
  const id = setInterval(inCb, delay);
};
const cb = () => console.log('interval');
const delay = 3000;
const amount = 5;
intervalCount(cb, delay, amount);

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = intervalCount;
} catch {
  module.exports = null;
}
