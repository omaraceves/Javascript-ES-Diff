//https://exploringjs.com/es2016-es2017/ch_object-getownpropertydescriptors.html

//Object.getOwnPropertyDescriptors(obj) returns the property descriptors of all own properties of obj, in an Array:

const obj = {
    [Symbol('foo')]: 123,
    get bar() { return 'abc' },
};
console.log(Object.getOwnPropertyDescriptors(obj));

// {
//     bar: {
//       get: [Function: get bar],
//       set: undefined,
//       enumerable: true,
//       configurable: true
//     },
//     [Symbol(foo)]: { value: 123, writable: true, enumerable: true, configurable: true }
// }

//Use case: cloning objects
//Shallow cloning is similar to copying properties, which is why Object.getOwnPropertyDescriptors() is a good choice here.

//This time, we use Object.create() that has two parameters:

//The first parameter specifies the prototype of the object it returns.
//The optional second parameter is a property descriptor collection 
//like the ones returned by Object.getOwnPropertyDescriptors().

const obj = {name: 'Cayman 718', brand: 'Porsche'};

const clone = Object.create(Object.getPrototypeOf(obj),
    Object.getOwnPropertyDescriptors(obj));

console.log(clone); //{ name: 'Cayman 718', brand: 'Porsche' }

