// Your code here

class Calculator {
	constructor (total) {
		this.total = 0;
	};

	add(num) {
		this.total = num + this.total;
		return this.total;
	};

	subtract(num) {
		this.total = this.total - num;
		return this.total;		
	};

	divide(num) {
		this.total = this.total / num;
		return this.total;
	};

	multiply(num) {
		this.total = this.total * num;
		return this.total;
	};
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Calculator;
} catch {
	module.exports = null;
}