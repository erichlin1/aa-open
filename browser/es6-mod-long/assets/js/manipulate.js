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
    const headerElements = document.getElementById('header').children;
    // finding index of H1 (although it's clear that <h1> tag is located at 0th index, I find it's best not assume)
    const h1NodeIndex = headerElements.findIndex((node) => node.nodeName == 'H1');
    // changing inner text of H1 nodeName

    // headerElements which is an HTML collection is an 'array-like object'
    // methods that iterate over arrays will not work for this object
    headerElements.item(h1NodeIndex).innerText = `I am ${myName}`;

    // * another approach would be to assign a unique id to the <h1> tag *
}

export function changeAboutMe() {
    /* Update the first paragraph in the About Me section with a small
     passage about yourself */
    
    

    // Your code here
}