//As seen on: https://exploringjs.com/es6/ch_core-features.html#sec_from-custom-error-to-error-subclass

//In ES5, it is impossible to subclass the built-in constructor for exceptions, Error. 
//The following code shows a work-around that gives the constructor MyError important features 
//such as a stack trace

function MyError() {
    // Use Error as a function
    var superInstance = Error.apply(null, arguments);
    copyOwnPropertiesFrom(this, superInstance);
}
MyError.prototype = Object.create(Error.prototype);
MyError.prototype.constructor = MyError;

function copyOwnPropertiesFrom(target, source) {
    Object.getOwnPropertyNames(source)
    .forEach(function(propKey) {
        var desc = Object.getOwnPropertyDescriptor(source, propKey);
        Object.defineProperty(target, propKey, desc);
    });
    return target;
};

//In ES6, all built-in constructors can be subclassed, 
//which is why the following code achieves what the ES5 code can only simulate:

class MyError extends Error {
}