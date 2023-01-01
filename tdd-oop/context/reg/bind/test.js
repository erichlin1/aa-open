// Your code here

import Employee from './test.js';

const john = Employee ('john wick', 'dog lover');
const johnFullName = john.sayName.bind(john);

setTimeout(johnFullName(), 2000);
