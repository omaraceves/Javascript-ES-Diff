
//Series of examples to explain different var problems

//var 1: As seen on: https://www.youtube.com/watch?v=XgSjoHgy3Rk
//var inside functions produces a function scope variable not a block scope variable 

function myFunction()
{
    for(var i = 0; i < 5; i++ ) {
        console.log(i);
    }
}

myFunction(); //from here all is correct

// 0
// 1
// 2
// 3
// 4

//If we try to access variables outside of the scope of the for loop, we can!

function myFunction()
{
    for(var i = 0; i < 5; i++ ) {
        console.log(i);
        if(true) {
            var color = 'white';
        }
    }

    console.log(i); //line A
    console.log(color); //line B
}

myFunction();

// 0
// 1
// 2
// 3
// 4
// 5 this gets printed on line A
// white this gets printed on line B

//Javascript in combination with var is probably the only programming language that let you access a local variable outside it's scope.
//Again this is a consequence of Javascript function scope variables.

//var 2: hoisting declarations
//as seen on: https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
//In javascript a javascript function variable declarations are always moved to the top of the function

function myFunction() {
    console.log(car); //undefined
    if(true) {
        var car = '718 Cayman';
    }
}
myFunction();

//On the snipped above Javascript will do something like:
 
function myFunction() {
    var car;
    console.log(car); //undefined
    if(true) {
        var car = '718 Cayman';
    }
}
myFunction();

//var hoisting declaration also occurs outside of functions

console.log(car); //undefined
var car = 'Porsche Cayman';

//when you don't declare the variable, no hoisting occurs, the variable doesn't exists
//therefore we get a reference error

console.log(car); //ReferenceError: car is not defined

//function hoisting can happen outside of a function:

printMyPorsche(); //Porsche Cayman 718

function printMyPorsche() {
    console.log('Porsche Cayman 718');
}

//Function declaration hoisting occurs within a function
//But it is slightly different than with variables

function myFunction() {
    printMyPorsche(); //Porsche Cayman 718
    
    function printMyPorsche() {
        console.log('Porsche Cayman 718');
    }
}

myFunction();

//However function hoisting occurs precisely on the block it was declared

function myFunction() {
    printMyPorsche(); //TypeError: printMyPorsche is not a function
    
    if(true) {
        function printMyPorsche() {
            console.log('Porsche Cayman 718');
        }
    }
}

myFunction();

//Now calling the function within the same block it was declared

function myFunction() {
    
    if(true) {
        printMyPorsche(); //Porsche Cayman 718
    
        function printMyPorsche() {
            console.log('Porsche Cayman 718');
        }
    }
}

myFunction();

//Problems with hoisting and function scope variables:
//Hoisting and function scope for var is just the way javascript treats var.
//That's why on ES6 let and const were introduced.
//let and const declare block scope variables not function scope.

let car = 'Porsche 718'
function myFunction(flag) {
    if(flag)
    {
        let car = '911';
        return car //the car returned here is the variable declared withing the if block
    }

    return car; //the car returned here is the global variable declared outside of the function
}

console.log(myFunction(false)); //Porsche 718
console.log(myFunction(true)); //911

//let and const are hoisted, however they remain in a deadzone until they are initialized withing the scope

function myFunction() {
    console.log(car); //ReferenceError: Cannot access 'car' before initialization
    let car = '718 Cayman'
}
myFunction();

