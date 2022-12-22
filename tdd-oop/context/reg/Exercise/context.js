function eat() {
  console.log(`${this.name} eats fish food`);
}

class Fish {
  constructor(name) {
    this.name = name;
  }

  swim() {
    console.log(`${this.name} swimming in the water`);
  }
}

const nemo = new Fish('Nemo');

/********************************* Scenario 1 *********************************/
//eat(); // this refers to the global scope and name is an undefined property


/********************************* Scenario 2 *********************************/
//nemo.eat = eat; //referenceError - does not have a method called `eat
//nemo.eat(); // TypeError - does not have a method called `eat`


/********************************* Scenario 3 *********************************/
// nemo.eat = eat; - same as the previous scenario
eat(); // invokes eat function


/********************************* Scenario 4 *********************************/
// nemo.swim(); // logs Nemo swimming in the water


/********************************* Scenario 5 *********************************/
// const swim = nemo.swim;
// swim(); // not a function of the global scope