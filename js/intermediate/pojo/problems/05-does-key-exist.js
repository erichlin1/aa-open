/***********************************************************************
Write a function `doesKeyExist(obj, key)` that takes in an object and a
key and returns true if the key is inside the object and false if the
key is not inside the object.
Examples:
let obj1 = {bootcamp: 'App Academy', course: 'Bootcamp Prep'}
doesKeyExist(obj1, 'course'); // => true
doesKeyExist(obj1, 'name'); // => false
***********************************************************************/

/* method #1
function doesKeyExist(obj, key) {
    // returns array of given object key
    let keys = Object.keys(obj);
    // checks if the parameter is among the values of keys
    return keys.includes(key);    
}
*/

/* method #2
function doesKeyExist(obj, key) {
    // iterating through object property
    for (let sourceKey in obj) {
        // if param is the same as source key, return true
        if (sourceKey == key) {
            return true;
        };
    };
    return false;


};
*/
// method #3 - checks if the key is a 'direct' property, otherwise false (even if its inherited property)
function doesKeyExist(obj, key) {
    return obj.hasOwnProperty(key);

};


  
  /**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
  module.exports = doesKeyExist;