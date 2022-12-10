import { aboutMeDesc } from './aboutMe.js';

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
    /* add each property from aboutMeDesc to aboutMe section, in a separate paragraphs */
    const aboutMeElements = document.getElementById('aboutMe');
    // collection of HTML elements 
    // appendChild is not a method of an HTMLcollection since it's not a method of the Node interface
    // appendChild is a method of Node which is also a method of Element since Element is an instance of Node
    // count of P elements
    const pCounts = childCounts(aboutMeElements, tagName);
    const descriptions = Object.values(aboutMeDesc);
    const descCounts = descriptions.length;
    changingCountofPNodes(aboutMeElements, tagName, pCounts, descCounts);
    changeElementText(aboutMeElements, tagName, descriptions);

};

// counts the number of children of a specified node
export const childCounts = ((elements, name) => {
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

// adds a specific tag element to the specified Id 
export const addElement = (elements, tagName) => {
    // creates new element;
    const newElement = document.createElement(tagName);
    // append new element to parent element
    elements.appendChild(newElement);
};

// Subtracts a node from specified Id starting from the end
export const subtractElement = (elements, tagName) => {
    // nodeList of the elements
    const nodes = elements.childNodes; 
    // creates shallow copy from nodes
    const nodesArr = Array.from(nodes);
    // returns last index of a p element
    const indexOfLastPNode = nodesArr.findLastIndex((node) => node.nodeName == tagName);
    // returns last node by index
    const lastNode = nodes.item(indexOfLastPNode);
    // removes last p element through accessing the parent element
    elements.removeChild(lastNode);
};

export const changeElementText = (elements, tagName, descriptions) => {
    /* changes the innerText for each element */
    // returns a non-live array from array-like objects
    const children = Array.from(elements.getElementsByTagName(tagName));
    descriptions.forEach((description, index) => children[index].innerText = description);
};

export const changingCountofPNodes = (elements, tagName, pCounts, descCounts) => {
    let pToDelete;
    let pToAdd;
    // assigns pToDelete or pToAdd
    pCounts > descCounts ? pToDelete = pCounts - descCounts : pToAdd = descCounts - pCounts;
    // adds p elements or deletes p elements
    if (pToAdd) {
        let index = 0;
        while (index < pToAdd) {
            addElement(elements, tagName);
            index += 1;
        }
    } else {
        let index = 0;
        while (index < pToDelete) {
            subtractElement(elements, tagName);
            index += 1;
        }
    };
};