// Your code here

import {Employee} from './test.js';

const john = Employee ('john wick', 'dog lover');
// bind `john.sayName` to john object
const johnFullName = john.sayName.bind(john);

setTimeout(johnFullName(), 2000);
