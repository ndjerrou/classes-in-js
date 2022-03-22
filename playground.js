// why this 'this'

function Person(name, age) {
  //function constructor
  this.name = name;
  this.age = age;
}
const nissim = new Person("Nissim", 18);
// console.log(nissim);
// console.log(typeof nissim);

///////////////////////////////////////////////////////

function sayHi(name) {
  //   console.log("hi there" + name);
  //   console.log(this);
}

// console.log(this); // this depends of the execution context
sayHi("Nissim");
// console.log(window);

// ==> this = the window object

///////////////////////////////////////////////////////

const person = {
  firstName: "Claire",
  lastName: "Thierry",
  fullName() {
    const { firstName, lastName } = this;

    return `Description : firstname = ${firstName}, lastname = ${lastName}`;
  },
  printBio() {
    return this.fullName();
  },
};
console.log(person.printBio());

///////////////////////////////////////////////////////

// This depends on the execution context

// 1 - Scope Global / Inside a function : this = Window

// 2 - Inside a method : this = the current object

///////////////////////////////////////////////////////
