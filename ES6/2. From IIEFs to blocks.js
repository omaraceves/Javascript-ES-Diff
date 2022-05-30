//From IIEfs to blocks
//As seen on: https://exploringjs.com/es6/ch_core-features.html#sec_from-iifes-to-blocks

//In ES5, you had to use a pattern called IIFE (Immediately-Invoked Function Expression) 
//if you wanted to restrict the scope of a variable tmp to a block

(function () {  // open IIFE
    var temp = 'Hello World';
}());  // close IIFE

console.log(tmp); //ReferenceError: tmp is not defined

//Without IIFE
function myFunction () {  
    var tmp = 'Hello Function';
}; 
console.log(tmp); //Hello World


//In ECMAScript 6, you can simply use a block and a let declaration (or a const declaration):

{  // open block
    let tmp = 'Hello World.'
}  // close block

console.log(tmp); // ReferenceError: tmp is not defined