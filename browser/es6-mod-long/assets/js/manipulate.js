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
    // changes inner text of H1 nodeName
    for (let i = 0; i < headerElements.length; i += 1) {
        let node = headerElements[i];
        if (node.nodeName == 'H1') {
            node.innerText = `I am ${myName}`;
        };
    };
    // 'headerElements is a array-like object - either use reg. for loop, convert Array instance or an iterable 
    // * another approach would be to assign a unique id to the <h1> tag *
}

export function changeAboutMe() {
    /* Update the first paragraph in the About Me section with a small
     passage about yourself */
    
    
    

    // Your code here
}