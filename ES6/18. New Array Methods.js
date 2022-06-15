//https://exploringjs.com/es6/ch_core-features.html#sec_new-array-methods-core-feature

const res = require("express/lib/response");

//From Array.prototype.indexOf to Array.prototype.findIndex
//The latter can be used to find NaN, which the former can’t detect

const arr = ['a', NaN];

//ES5
console.log(arr.indexOf(NaN)); // -1

//ES6
console.log(arr.findIndex(x => Number.isNaN(x))); // 1

//From Array.prototype.slice() to Array.from() or the spread operator
//In ES5, Array.prototype.slice() was used to convert Array-like objects to Arrays. 
//In ES6, you have Array.from()

//ES5
function argumentsToArray() {
    var arr1 = Array.prototype.slice.call(arguments);
    return arr1;
}

var result = argumentsToArray('Cayman', '911', 'Panamera');
console.log(result); //[ 'Cayman', '911', 'Panamera' ]

//ES6
function argumentsToArray() {
    var arr1 = Array.from(arguments);
    return arr1;
}

var result = argumentsToArray('Cayenne', 'Macan', 'Taycan');
console.log(result); //[ 'Cayenne', 'Macan', 'Taycan' ]

//If a value is iterable (as all Array-like DOM data structure are by now), 
//you can also use the spread operator (...) to convert it to an Array:

const arr1 = [...'abc'];
console.log(arr1);// ['a', 'b', 'c']
const arr2 = [...new Set().add('a').add('b')];
console.log(arr2);// ['a', 'b']

//From apply() to Array.prototype.fill() 
//In ES5, you can use apply(), as a hack, 
//to create in Array of arbitrary length that is filled with undefined

// ES5
var arr1 = Array.apply(null, new Array(2));
console.log(arr1); // [undefined, undefined]

//In ES6, fill() is a simpler alternative
const arr2 = new Array(2).fill(undefined);
console.log(arr2); // [undefined, undefined]

//fill() is even more convenient if you want to create an Array 
//that is filled with an arbitrary value

// ES5
var arr3 = Array.apply(null, new Array(2))
    .map(function (x) { return 'Porsche' });
 console.log(arr3); // [ 'Porsche', 'Porsche' ]


// ES6 
let arr3 = new Array(2).fill('Porsche');
console.log(arr3); // [ 'Porsche', 'Porsche' ]

//fill() replaces all Array elements with the given value. Holes are treated as if they were elements.

let arr4 = ['BMW', 'Ford'];
arr4.fill('Porsche');
console.log(arr4); // [ 'Porsche', 'Porsche' ]


