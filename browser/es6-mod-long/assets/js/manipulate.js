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
    const tagName = 'P';
    let descCounts = aboutMeDesc.values().length;
    /* add each property from aboutMeDesc to aboutMe section, in a separate paragraphs */
    const aboutMeElement = document.getElementById('aboutMe');
    // collection of HTML elements 
    // appendChild is not a method of an HTMLcollection since it's not a method of the Node interface
    // appendChild is a method of Node which is also a method of Element since Element is an instance of Node
    const aboutMeElements = aboutMeElement;
    // count of P elements
    const pCount = childCounts(aboutMeElements, tagName);
    // adds or subtracts paragraphs 
    pCounts > descCounts ? : /* add p to the end */
};


const childCounts = ((elements, name) => {
    const children = elements.children;
    // counts the number of 'P'
    let pCount = 0;
    // creates a shallow-copy of an array from children
    const arrChildren = Array.from(children);
    // iterate over each element and if the current child name is idential to name parameter then count p by 1
    arrChildren.forEach((child) => {
        if (child.nodeName == name) {
            pCount += 1;
        }
    });
    return pCount;
});

const addElement = (children, tagName) => {
    const newElement = document.createElement(tagName);


};

const subtractElement = (children, tagName) => {

};