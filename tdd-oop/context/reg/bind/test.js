'use strict'

import {Employee} from './employee.js';
// create a new instance object and assign to variable `john`
const john = new Employee ('john wick', 'dog lover');
// binding `johnFullName` function to john object
const johnFullName = john.sayName.bind(john);
// invoke `johnFullName` after 2ms
setTimeout(johnFullName, 2000);


