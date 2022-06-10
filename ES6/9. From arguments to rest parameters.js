//As seen on https://exploringjs.com/es6/ch_core-features.html#sec_from-arguments-to-rest

//In ES5, if you want a function (or method) to accept an arbitrary number of arguments, 
//you must use the special variable arguments

function logAllArguments() {
    for (var i=0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

logAllArguments('718', '911', 'Panamera'); // 718 911 Panamera

//In ES6, you can declare a rest parameter (args in the example below) via the ... operator
//Rest parameters are even nicer if you are only interested in trailing parameters:

function logOtherCarNames(myCarName, ...otherCarNames) {
    for (const arg of otherCarNames) {
        console.log(arg);
    }
}

logOtherCarNames('718 Cayman', '911', 'Panamera'); //911 Panamera

//To do the code above in ES5 we would have to do something clumsy like this:

function logOtherCarNames() {
    var args = [].slice.call(arguments, 1);
    
    for (var i=0; i < args.length; i++) {
        console.log(args[i]);
    }
}

logOtherCarNames('718 Cayman', '911', 'Panamera'); //911 Panamera

//Rest parameters make code easier to read: 
//You can tell that a function has a variable number of parameters just by looking at its parameter definitions.
