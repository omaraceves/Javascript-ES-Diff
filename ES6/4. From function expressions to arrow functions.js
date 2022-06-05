//As seen on: https://exploringjs.com/es6/ch_arrow-functions.html#ch_arrow-functions

// In JavaScript, traditional functions can be used as 1 Non-method functions, 2 Methods and 3 Constructors
//These roles clash: Due to roles 2 and 3, functions always have their own this. 
//But that prevents you from accessing the this of, e.g., a surrounding method from inside a callback (role 1 Non-Method functions).

//constructor
function Porsche(name) {
    this.name = name;
}

//method
Porsche.prototype.getFullName = function () { // (A)
    
    //non-method in this case, an IIFE
    return (function() { // open IIFE
        return `Porsche ${this.name}`; //this is undefined in non-method functions. The this of the IIFE shadows the this of the method from line A.
    })(); // close IIFE
};

var myPorsche = new Porsche('718 Cayman');
console.log(myPorsche.getFullName()); //'Porsche undefined'
console.log(myPorsche);

//There are three ways to work around this problem in ECMAScript 5.

//ES5 Solution 1: that = this
//You can assign this to a variable that isn’t shadowed.

//constructor
function Porsche(name) {
    this.name = name;
}

//method
Porsche.prototype.getFullName = function () {
    
    var myThis = this; //myThis is now a function scoped variable that can be accessed inside other blocks and points to the original 'this'.
    return (function() { // open IIFE
        return `Porsche ${myThis.name}`; //we are calling that.name rather than this.name. The 'this' inside this non-method func is still undefined.
    })(); // close IIFE
};

var myPorsche = new Porsche('718 Cayman');
console.log(myPorsche.getFullName()); //'Porsche 718 Cayman'


//ES5 Solution 2: specifying a value for this 
//A few Array methods have an extra parameter for specifying the value that this should have when invoking the callback.
//this of course will only works with the mentioned set of array functions

function Prefixer(prefix) {
    this.prefix = prefix;
}
Prefixer.prototype.prefixArray = function (arr) {
    return arr.map(function (x) {
        return this.prefix + ' ' + x;
    }, this); // (A)
};

var myArray = ['Cayman 718'];
var prefix = new Prefixer('Porsche');
console.log(prefix.prefixArray(myArray)); //[ 'Porsche Cayman 718' ]

//ES5 Solution 3: bind(this)
//You can use the method bind() to convert a function whose this is determined by how it is called 
//(via call(), a function call, a method call, etc.) to a function whose this is always the same fixed value

function Porsche(name) {
    this.name = name;
}

//method
Porsche.prototype.getFullName = function () {
    
    //non-method in this case, an IIFE
    return (function() { // open IIFE
        return `Porsche ${this.name}`; 
    }.bind(this))(); //the value for this will be fixed. The this object of the bound function is associated with the specified object.
};

var myPorsche = new Porsche('718 Cayman');
console.log(myPorsche.getFullName()); //Porsche 718 Cayman
console.log(myPorsche);









