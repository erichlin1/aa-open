// Your code here

class Dog {
	constructor (name) {
		this.name = name;
	};
	static makeJet (instance) {
		instance.name = 'Jet';
		return instance;
	};
	changeName(newName) {
		this.name = newName;
	}
	speak(word) {
		
	}
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Dog;
} catch {
	module.exports = null;
}