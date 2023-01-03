// cannot use `bind`, `call` or `apply`

class CallCenter {
	constructor (name) {
		this.name = name;
	};

	sayHello = () => {
		console.log(`Hello this is ${this.name}`);
	};
	callMeLater(delay) {
		// method #2 - implicitly with arrow function since it's lexically bound
		setTimeout(this.sayHello, delay);
	};
};


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = CallCenter;
} catch {
	module.exports = null;
}