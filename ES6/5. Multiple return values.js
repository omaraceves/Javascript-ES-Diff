//As seen on: https://exploringjs.com/es6/ch_core-features.html#sec_multiple-return-values-core-feature

// Some functions or methods return multiple values via arrays or objects. 
//In ES5, you always need to create intermediate variables if you want to access those values. 
//In ES6, you can avoid intermediate variables via destructuring.

//Multiple return values via arrays


//ES5 intermediate variable (porsches in the example below)

let porsches = ['718', '911', 'Panamera'];
let cayman = porsches[0];
let nineEleven = porsches[1];
let panamera = porsches[2];
console.log(`${cayman} ${nineEleven} ${panamera}`); //718 911 Panamera

//In ES6, destructuring makes this code simpler:

const [cayman, nineEleven, panamera] = ['718', '911', 'Panamera'];

console.log(`${cayman} ${nineEleven} ${panamera}`); //718 911 Panamera

//Multiple return values via objects

//ES5 you need an intermediate variable to store the object and then assign object properties to other variables

var porsche = { name: '718 Cayman' };

var propDesc = Object.getOwnPropertyDescriptor(porsche, 'name');
console.log(propDesc);

// {
//     value: '718 Cayman',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }

var writable = propDesc.writable;
var configurable = propDesc.configurable;

console.log(writable, configurable); // true true

//ES6 you don't need an intermediate variable, you can assign desired return object properties directly
const porsche = { name: '718 Cayman' };

let {writable, configurable} = Object.getOwnPropertyDescriptor(porsche, 'name'); //we were only interested in writable and configurable
console.log(writable, configurable); // true true



