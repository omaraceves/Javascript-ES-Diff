//As seen on: https://exploringjs.com/es6/ch_core-features.html#sec_from-concat-to-spread

//The spread operator can also (non-destructively) turn the contents of its operand into Array elements. 
//That means that it becomes an alternative to the Array method concat()

//ES5 Concat 

var arr1 = ['a', 'b'];
var arr2 = ['c'];
var arr3 = ['d', 'e'];

console.log(arr1.concat(arr2, arr3)); // [ 'a', 'b', 'c', 'd', 'e' ]

//ES6 spread operator

const arr1 = ['a', 'b'];
const arr2 = ['c'];
const arr3 = ['d', 'e'];

const arr4 = [...arr1, ...arr2, ...arr3];
console.log(arr4); // [ 'a', 'b', 'c', 'd', 'e' ]