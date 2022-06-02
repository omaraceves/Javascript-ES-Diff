//From IIEfs to blocks
//As seen on: https://exploringjs.com/es6/ch_core-features.html#sec_from-iifes-to-blocks

//In ES5, you had to use a pattern called IIFE (Immediately-Invoked Function Expression) 
//if you wanted to restrict the scope of a variable tmp to a block.
//With this pattern you immediately execute a function, since var is function scoped, 
//you can encapsulate any var declared inside the immediately-invoked function.

function myFunction()
{
    (function () {  // open IIFE
        var temp = 'Hello World';
    }()); // close IIFE

    console.log(temp); //ReferenceError: temp is not defined
}

myFunction();


//In ECMAScript 6, you can simply use a block and a let declaration (or a const declaration):

{  // open block
    let tmp = 'Hello World.'
}  // close block

console.log(tmp); // ReferenceError: tmp is not defined