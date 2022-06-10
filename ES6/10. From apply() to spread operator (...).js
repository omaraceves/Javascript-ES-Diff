//As seen on: https://exploringjs.com/es6/ch_core-features.html#sec_from-apply-to-spread

//In ES5, you turn arrays into parameters via apply(). ES6 has the spread operator for this purpose.

//Math.max -  returns the numerically greatest of its arguments. 
//It works for an arbitrary number of arguments, but not for Arrays.

//ES5 apply()
let result = Math.max.apply(Math, [-1, 5, 11, 3]);
console.log(result); //11

//ES6 spread operator
let result2 = Math.max(...[-1, 5, 11, 3]); 
console.log(result2); //11

//Array.prototype.push() - appends all of its arguments as elements to its receiver.
//There is no method that destructively appends an Array to another one.

//ES5 apply

var arr1 = ['a', 'b'];
var arr2 = ['c', 'd'];

arr1.push.apply(arr1, arr2);
console.log(arr1); //[ 'a', 'b', 'c', 'd' ]

//ES6 apply

const arr1 = ['a', 'b'];
const arr2 = ['c', 'd'];

arr1.push(...arr2);
console.log(arr2);
