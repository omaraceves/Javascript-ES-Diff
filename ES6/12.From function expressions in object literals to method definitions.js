//As seen on: https://exploringjs.com/es6/ch_core-features.html#sec_from-func-expr-to-method-def

//In JavaScript, methods are object properties whose values are functions.
//In ES5 object literals, methods are created like other properties. 
//The property values are provided via function expressions.


var obj = {
    foo: function () {
        console.log('foo');
    },
    bar: function () {
        this.foo();
    }
}

obj.bar(); //foo

//ES6 has method definitions, special syntax for creating methods

const obj = {
    foo() {
        console.log('foo');
    },
    bar() {
        this.foo();
    },
}

obj.bar(); //foo