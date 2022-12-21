window.addEventListener('DOMContentLoaded', () =>{
    // alerts user that DOM is fully loaded
    alert(`DOM is loaded!`);

    /** BEGIN Section 1: changes color to user input */
    const changeRedInputBackgroundColor = (event) => {
        // gets user input
        const input = event.target.value;
        // gets style attribute value
        const isRedBackground = `background-color:${input}`;
        // compares if the current user input value is equal. to `red`
        const condition = input == 'red';
        // sets new attribute with style name and background color
        const isRed = () => event.target.setAttribute('style', isRedBackground);
        // removes attribute if user input is not red
        const notRed = () => event.target.removeAttribute('style');
        // condition
        condition ? isRed() : notRed();
    };
    /** adds event listener to the id: `red-input` */
    document.getElementById('red-input')
    .addEventListener('change', changeRedInputBackgroundColor);
    /** END Section 1 */

    /** BEGIN Section 2 - adds user's input as a list item */
    /** Approach #1 
    document.getElementById('list-add')
    .addEventListener('change', (event) => {
        // gets user input value - enclosed, accessible in inner callback function
        const userInput = event.target.value;
        document.getElementById('add-item')
        .addEventListener('click', () => {
            console.log(userInput);
            const listItem = document.createElement('li');
            listItem.innerText = userInput;
            document.querySelector('ul')
            .appendChild(listItem);
        });
    });

    / ** Approach #2
    let foo;
    document.getElementById('list-add')
    .addEventListener('change', (event) => {
        foo = event.target.value;
    });

    document.getElementById('add-item')
    .addEventListener('click', () => {
        const listItem = document.createElement('li');
        listItem.innerText = foo;
        document.querySelector('ul')
        .appendChild(listItem);
    });

    /** Approach #4

    (() => {
        let userInput;
        // declaring listItem with const outside of cb will lock the init. value
        document.getElementById('list-add')
        .addEventListener('change', (event) => {
            userInput = event.target.value;
        });
        document.getElementById('add-item')
        .addEventListener('click', () => {
            // every `click` generates a new `li` element
            const listItem = document.createElement('li');
            listItem.innerText = userInput;
            document.querySelector('ul')
            .appendChild(listItem);
        });
    })();

    /** Approach #5 */
    let userInput;

    document.getElementById('list-add')
    .addEventListener('change', listToAdd);

    function listToAdd (event) {
        userInput = event.target.value;
    };

    document.getElementById('add-item')
    .addEventListener('click', addListItem);
    
    function addListItem () {
        const listItem = document.createElement('li');
        listItem.innerText = userInput;
        document.querySelector('ul')
        .appendChild(listItem);
    };
    /** END Section 2 */



    /** BEGIN Section #4 - removes all event listeners */
    document.getElementById('remove-listeners')
    .addEventListener('click', () => {
        // removes event listener for section #1
        document.getElementById('red-input').removeEventListener('change', changeRedInputBackgroundColor);
        // removes event listener for section #2 - list to add
        document.getElementById('list-add').removeEventListener('change',listToAdd);
        // removes event listener for section #2 - add to list
        document.getElementById('add-item').removeEventListener('click', addListItem);
        // removes event listenr for section #6
        document.getElementById('hover').removeEventListener('mouseenter', isHover);
        // removes event listenr for section #6
        document.getElementById('hover').removeEventListener('mouseleave', notHover);

    })
    /** END Section #5 */


    /** BEGIN Section #5 - adds all event listeners */
    document.getElementById('add-listeners')
    .addEventListener('click', () => {
                // add event listener for section #1
                document.getElementById('red-input').addEventListener('change', changeRedInputBackgroundColor);
                // add event listener for section #2 - list to add
                document.getElementById('list-add').addEventListener('change',listToAdd);
                // add event listener for section #2 - add to list
                document.getElementById('add-item').addEventListener('click', addListItem);
                // add event listenr for section #6
                document.getElementById('hover').addEventListener('mouseenter', isHover);
                // add event listenr for section #6
                document.getElementById('hover').addEventListener('mouseleave', notHover);
    });
    /** END Section #5 */

    /** BEGIN Section #6 - changes text indicating that the current user mouse has moused over */
    document.getElementById('hover').addEventListener('mouseenter', isHover);
    function isHover () {
        document.getElementById('ind').innerText = `Your mouse is hovering over this invisible element.`
    };
    document.getElementById('hover').addEventListener('mouseleave', notHover);
    function notHover () {
        document.getElementById('ind').innerText = ``;
    };
    /** BEGIN Section #6 */
    




    /** Local Tests */
    

});
window.addEventListener('keydown', (event) => {
    console.log(event);
    if (event.key == " ") {
        alert(`you just pressed the spacebar`);
    };

})