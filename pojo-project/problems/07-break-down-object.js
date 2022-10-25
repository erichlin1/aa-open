/***********************************************************************
Write a function `breakDownObj(obj)` that takes in an object as a parameter 
and returns an array containing:  all the keys from the object **and** all the 
values of the object.
**Hint**: Use spread syntax to spread out elements into an array!
Examples:
let object1 = {name: 'Rupert', age: 5, speak: 'Meow'};
breakDownObj(object1); // => [ 'name', 'age', 'speak', 'Rupert', 5, 'Meow' ]
let object2 = {location: 'NY', borough: 'Brooklyn'};
breakDownObj(object2); // => [ 'location', 'borough', 'NY', 'Brooklyn' ]
***********************************************************************/

// method #1 -- plain objects aren't iterable, so objects cannot be spread into an array
function breakDownObj(obj) {
    let keys = Object.keys(obj);
    let values = Object.values(obj);
    return keys.concat(values); 
    /* alternative 
    return [...keys,...values];
    */
}
  
  /**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
  module.exports = breakDownObj;