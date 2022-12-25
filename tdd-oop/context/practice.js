// prohibits acessing the global object
"use strict"
// class
class Student {
    constructor (name, age, major, GPA) {
        this.name = name;
        this.age = age;
        this.major = major;
        this.GPA = GPA
    }

    intro = () => {
        // this value refers to the passed in parameter of `steven`
        // Context refers to the value of this - in this case, the context is the parameter passed in to init. the instance 
        console.log(`my name is ${this.name}. I am ${this.age}. I am majoring in ${this.major}. My current GPA: ${this.GPA}`);
        // will return where a function was invoked - this case, this refers to the class `Student`
        return this;
    };
};
// object invoking `intro` instance method is the stevent object.
const steven = new Student('steven', 24, 'mathematics', 3.4);
//console.log(steven.intro());
// context refers to the value of `this` while `this` refers to where a function is called.


// What occurs if 2 different objects invokes methods of one another?

class Panda {
    constructor(name) {
        this.name = name;
    };
    
    changeName = () => {
        this.name = 'oreo';
    }
};

class Dog {
    constructor(name) {
        this.name = name;
    };
    
    changeName = () => {
        this.name = 'ritz';
    }
};


const dog = new Dog('Dino');
//const dogChange = dog.changeName();
// console.log(dogChange()); // typeError
//const cat = new Cat('haku');
//const catChange = cat.changeName();
//console.log(dog.catChange());

// what occurs if the inner function of an outer function returns this?

function func1 () {
    function func2 () {
        return this;
    };
    console.log(func2());
};

/* class Cat {
    purr() {
      console.log("meow");
    }
  
    purrMore() {
      this.purr();
    }
  }
  let cat = new Cat();
  
  global.setTimeout(cat.purrMore(), 5000);

*/

function hello() {
    console.log(this);
}
hello();


// What's the value of this inside of a constructor vs an instance method?

class House{
    constructor(sqrt, rooms, bathrooms) {
        this.sqrt = sqrt;
        this.rooms = rooms;
        this.bathrooms = bathrooms;
        return this; // context of `this` in this scenario is the instance of house
    };

    printDesc () {
        const desc = `this house is ${this.sqrt} square feet with ${this.rooms} bedrooms and ${this.bathrooms} bathrooms`;
        console.log(desc);
        return this; // context of `this` is the instance of house class 
    };

    static printProps (instance) {
        console.log(`sqrt: ${instance.sqrt}`);
        return this; // context of static method is the House class
    };
}

// instance of house
// context of the constructor function
// const wellingtonMansion = new House(10000, 5, 5);
// console.log(wellingtonMansion); 

// context of the instance method
// console.log(wellingtonMansion.printDesc());

const lin = new House(20000, 10, 10);
//console.log(lin);

// context of the instance method 
//console.log(lin.printDesc());

// invoking method of class House
//console.log(House.printProps(lin));

/** without the use of strict mode, a error will be thrown - global will assigning the property `firstName` with `Eric` 
function bye() {
    this.firstName = 'Eric'; // creates a class named the function and init. a property with value 'Eric';
    console.log(`bye ${this.firstName}`);
    return this;
};

// console.log(bye()); // typeError  (using strict mode), this is undefined;

const aBye = new bye();
console.log(aBye);
*/

function Func1 () {
    // creates a class named Func1
    this.Func2 = (() => {
        // creates a class named Func2
        console.log(`Func2`);
        this.Func3 = () => {
            console.log(`Func3`);
        };
    })();
    console.log(this.Func2);
    console.log(this.Func3);
    
};


