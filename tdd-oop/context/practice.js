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