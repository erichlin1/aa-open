const {expect} = require('chai');
const {it} = require('mocha');

import {childCounts, addElement, subtractElement} from 'assets/js/manipulate.js';
import {changeElementText, changingCountofPNodes} from 'assets/js/manipulate.js';

describe ('childCounts', () => {
    const parentElement = document.getElementById('aboutMe');
    it ('counts the number of children of the parent node with Id (aboutMe)', () => {
        expect(parentElement.children.length).to.equal(3);
    });
})