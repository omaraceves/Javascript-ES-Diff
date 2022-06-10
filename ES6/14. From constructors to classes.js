//As seen on: https://exploringjs.com/es6/ch_core-features.html#sec_from-constr-to-class

//ES6 classes are mostly just more convenient syntax for constructor functions.

//Base Classes

//In ES5, you implement constructor functions directly:

function Person(name) {
    this.name = name;
}
Person.prototype.describe = function () {
    return 'Person called '+this.name;
};

var person = new Person('Popa');
console.log(person.describe()) //Person called Popa

//In ES6 classes provide slightly more convenient syntax for constructor functions

class Person {
    constructor(name) {
        this.name = name;
    }// no commas between the parts of a class
    describe() { //for method definitions no keyword function is needed
        return 'Person called ' + this.name;
    }
}

let person = new Person('Popa');
console.log(person.describe()); //Person called Popa

//Derived classes
//Subclassing is complicated in ES5, especially referring to super-constructors and super-properties. 
//This is the canonical way of creating a sub-constructor Employee of Person

function Employee(name, title) {
    Person.call(this, name); // super(name)
    this.title = title;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
Employee.prototype.describe = function () {
    return Person.prototype.describe.call(this) // super.describe()
           + ' (' + this.title + ')';
};

//ES6 has built-in support for subclassing, via the extends clause

class Employee extends Person {
    constructor(name, title) {
        super(name);
        this.title = title;
    }
    describe() {
        return super.describe() + ' (' + this.title + ')';
    }
}


let employee = new Employee('Popa', 'Director');
console.log(employee.describe());