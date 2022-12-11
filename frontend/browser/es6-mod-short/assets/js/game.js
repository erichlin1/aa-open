import { getIndex } from './utilities.js';
import { mrPotatoHeadQuotes } from './quotes/mrPotatoHead.js';
// utilized export default since object was not initialized to a variable
import mrsPotatoHeadQuotes from './quotes/mrsPotatoHead.js';

export class Game {

  start() {
    
    // document.getElementById() returns a HTML element object with the identifer (id property) matching the parameter
    // .addEventListener accepts 2 parameters: event, callback
    // the 'target' is the HTMLElement (doc.getElement.)
    // once the user clicks the button, the target receives the event, then the callback function ins invoked
    document.getElementById('hello').addEventListener('click', () => {
      // invoking getIndex function and returns the dataset property of the HTML Element 
      // 1 gets assigned to index
      const index = getIndex();

      const messageContainer = document.getElementById('message');
      if (index === 1) {
        messageContainer.innerText = mrPotatoHeadQuotes['hello'];
      } else {
        messageContainer.innerText = mrsPotatoHeadQuotes['hello'];
      }
    });

    document.getElementById('bye').addEventListener('click', () => {
      const index = getIndex();
      const messageContainer = document.getElementById('message');
      if (index === 1) {
        messageContainer.innerText = mrPotatoHeadQuotes['bye'];
      } else {
        messageContainer.innerText = mrsPotatoHeadQuotes['bye'];
      }
    });
    // once the user clicks on 'swap places' the HTMLElement receives the event and invokes the callback function
    document.getElementById('swap').addEventListener('click', () => {
      const index = getIndex();
      const image = document.getElementById('image');
      const messageContainer = document.getElementById('message');
      const wrapper = document.getElementById('wrapper');
      // reassigned data-index to 2
      if (index === 1) {
        image.src = "./assets/images/potatohead2.png";
        wrapper.dataset.index = "2";
      } else {
        image.src = "./assets/images/potatohead1.png";
        wrapper.dataset.index = "1";
      }
      // the property innerText gets reassigned to an empty string once the button is clicked
      messageContainer.innerText = "";
    })
  }
}
