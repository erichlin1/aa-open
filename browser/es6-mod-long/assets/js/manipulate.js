import { aboutMeDesc } from './aboutMe.js';

// why is aboutMeCollection not defined?

export function changeTitle() {
    // Change the title of the page to "(Your name)'s Portfolio"
    const myName = 'Eric Lin';
    // there exist only one tag called 'title'
    const collection = document.getElementsByTagName('title');
    // accessed the first element in the array and changed the property innerText to a string
    collection[0].innerText = `${myName}'s Portfolio`;
}

export function changeHeader() {
    const myName = 'Eric Lin';
    // Change the name in the h1 of the page to your name
    const headerElements = Array.from(document.getElementById('header').children); // >> returns an HTML collection
    headerElements.forEach((node) => {
        if (node.nodeName == 'H1') {
            node.innerText = `I am ${myName}`;
        }
    });
}

/* although 'aboutMeCollection' is obviously declared in global scope, it won't be referenced in
function scope if the parameter has the same identifier. In this case, 'aboutMeCollection' is 
declared, but not initialized resulting in a typeError from accessing a undefined property.
*/

export function changeAboutMe() {
    let pCounts = 0;
    let descCounts = aboutMeDesc.values().length;
    /* add each property from aboutMeDesc to aboutMe section, in a separate paragraphs */
    const aboutMeElement = document.getElementById('aboutMe');
    const aboutMeArrCollection = Array.from(aboutMeElement.children);
    // counts the number of 'P'
    aboutMeArrCollection.forEach((child) => {
        if (child.nodeName == 'H1') {
            pCounts += 1;
        }
    });
    // adds or subtracts paragraphs 
    pCounts > descCounts ? /* delete p starting from the end */ : /* add p to the end */
};