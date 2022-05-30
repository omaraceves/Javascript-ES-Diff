
//Series of examples to explain diffetent var problems

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


