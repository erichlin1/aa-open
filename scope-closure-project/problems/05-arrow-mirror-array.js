/***********************************************************************
Write a function `arrowMirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples.

Write this function using an arrow function!

Examples:

arrowMirrorArray([1,2,3]); // => [ 1, 2, 3, 3, 2, 1 ]
arrowMirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
***********************************************************************/

// concatenates the parameter to a shallow copied instance of the parameter reversed
/* method #1  
const arrowMirrorArray = arr => arr.concat(Array.from(arr).reverse());
*/
/* method #2 - map function
const arrowMirrorArray = arr => arr.concat(arr.map(el => el + 0).reverse());
*/
// method #3 - adds in-place  
const arrowMirrorArray = arr => {
    const indexLen = arr.length - 1;
    // inner function creates a closure and closes on outer variables: indexLen
    arr.forEach((ele, index, array) => {
      let reversedEle = array[j];
      arr.push(reversedEle);
      let j = indexLen - 1;
    });
    return arr;
}


/* method #4
const arrowMirrorArray = arr => {
    let copyArr = JSON.parse(JSON.stringify(arr));
    const result = copyArr.concat(arr.reverse());
    return result;
};
*/


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowMirrorArray;
} catch (e) {
  return null;
}


