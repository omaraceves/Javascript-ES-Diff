//As seen on: https://exploringjs.com/es6/ch_core-features.html#sec_param-defaults-core-feature

//In ES5, you specify default values for parameters like this:

function printPorsche(numberOfDoors, numberOfCylinders) {
    numberOfDoors = numberOfDoors || 2;
    numberOfCylinders = numberOfCylinders || 6;
    
    if(numberOfCylinders === 6 && numberOfDoors === 2)
        console.log('Porsche 911')

    if(numberOfCylinders === 4 && numberOfDoors === 2)
        console.log('Porsche Cayman 718')

    if(numberOfCylinders === 6 && numberOfDoors === 4)
        console.log('Porsche Panamera')
}

printPorsche(); //Porsche 911

//ES6 has nicer syntax, and a parameter default value is only triggered by undefined, 
//In ES5, a parameter default value will be triggered by any falsy value.

function printPorsche(numberOfDoors = 2, numberOfCylinders = 6) {
    numberOfDoors = numberOfDoors || 2;
    numberOfCylinders = numberOfCylinders || 6;
    
    if(numberOfCylinders === 6 && numberOfDoors === 2)
        console.log('Porsche 911')

    if(numberOfCylinders === 4 && numberOfDoors === 2)
        console.log('Porsche Cayman 718')

    if(numberOfCylinders === 6 && numberOfDoors === 4)
        console.log('Porsche Panamera')
}

printPorsche(); //Porsche 911