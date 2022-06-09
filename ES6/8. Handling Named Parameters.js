//As seen on: https://exploringjs.com/es6/ch_core-features.html#sec_named-params-core-feature

//A common way of naming parameters in JavaScript is via object literals
//Two advantages of this approach are: 
//Code becomes more self-descriptive and it is easier to omit arbitrary parameters.

function printPorsche(options) {
    options = options || {};
    var numberOfDoors = options.numberOfDoors || 2;
    var numberOfCylinders = options.numberOfCylinders || 6;
    
    if(numberOfCylinders === 6 && numberOfDoors === 2)
        console.log('Porsche 911')

    if(numberOfCylinders === 4 && numberOfDoors === 2)
        console.log('Porsche Cayman 718')

    if(numberOfCylinders === 6 && numberOfDoors === 4)
        console.log('Porsche Panamera')
}

printPorsche(); //Porsche 911
printPorsche({numberOfDoors: 4, numberOfCylinders: 6}); //Porsche Panamera

//In ES6, you can use destructuring in parameter definitions and the code becomes simpler
//when numberofDoors and numberOfCylinders are not passed, a default value will take place
//when the options params is not passed, a default value of {} empty object will take place and
//therefore numberOfDoors and numberOfCylinders will be empty taking its default values.

function printPorsche({numberOfDoors = 2, numberOfCylinders = 6} = {}) {
    if(numberOfCylinders === 6 && numberOfDoors === 2)
        console.log('Porsche 911')

    if(numberOfCylinders === 4 && numberOfDoors === 2)
        console.log('Porsche Cayman 718')

    if(numberOfCylinders === 6 && numberOfDoors === 4)
        console.log('Porsche Panamera')
}

printPorsche({}); //Porsche 911 - Here we are passing an empty object and default values for doors and cylinders are taken
printPorsche(); //Porsche 911 - Here we are passing nothing, therefore an empty object is taken as default options value, therefore default values for doors and cylinders are taken
printPorsche({numberOfDoors:4}) //Porsche Panamera - Here numberOfDoors will be 4, therefore the only default value taken will be for cylinders.