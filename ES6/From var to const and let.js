//From var to const and let
//As seen on: https://exploringjs.com/es6/ch_core-features.html#sec_from-var-to-const


//In ES5, you declare variables via var. Such variables are function-scoped, their scopes are the innermost enclosing functions. 
//The behavior of var is occasionally confusing:

var myNumber = 3;
function func(randomize) {
    if (randomize) {
        var myNumber = Math.random();
        return myNumber;
    }
    return myNumber;
}

var result = func(false); 
console.log(result); //undefined


//Making obvious the variable hoisting inside the function:
var myNumber = 3;
function func(randomize) {
    var myNumber;
    if (randomize) {
        myNumber = Math.random();
        return myNumber;
    }
    return myNumber;
}

var result = func(false); 
console.log(result); //undefined

//In ES6, you can additionally declare variables via let and const.
//Such variables are block-scoped
//let is roughly a block-scoped version of var. 
//const works like let, but creates variables whose values can’t be changed.
//If you replace var with let in the initial version, you get different behavior:

let myNumber = 3;
function func(randomize) {
    if (randomize) {
        let myNumber = Math.random();
        return myNumber;
    }
    return myNumber;
}
var result = func(false); 
console.log(result); //3

//You have to be careful during refactoring you can’t blindly replace var with let or const in existing code
//because doing so may lead you to get a different behavior.

//a) Prefer const. You can use it for all variables whose values never change.
//b) Otherwise, use let – for variables whose values do change.
//c) Avoid var.

