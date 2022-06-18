//As seen on: https://exploringjs.com/es2016-es2017/ch_async-functions.html

//The following variants of async functions exists. Note the keyword async everywhere.

//Async function declarations: 
async function foo() {}

//Async function expressions: 
const foo = async function () {};

//Async method definitions: 
let obj = { async foo() {} }

//Async arrow functions: 
const foo = async () => {};

//Async functions always return promises

//Fulfilling the Promise of an async function

async function printMyPorsche(name) {
    return `Porsche ${name}`;
}

printMyPorsche('Cayman').then(x => console.log(x)); //Porsche Cayman

//Rejecting a promise of an async function

const triggerError = async () => {
    throw new Error('Problem!');
}

triggerError().catch(x => console.log(x)); //Error: Problem!

//await: Handling results and errors of asynchronous computations via await
//The operator await (which is only allowed inside async functions) waits for its operand, 
//a Promise, to be settled

async function printMyPorsche(name) {
    return `Porsche ${name}`;
}

async function callPrintMyPorsche(name) {
    printMyPorsche(name).then(x => console.log(x));
}

callPrintMyPorsche('Cayman'); //Porsche Cayman

//callPrintMyPorsche with await:

async function printMyPorsche(name) {
    return `Porsche ${name}`;
}

async function callPrintMyPorscheWithAwait(name) {
    const result = await printMyPorsche(name);
    console.log(result);
}

callPrintMyPorscheWithAwait('911'); //Porsche 911

//Handling multiple asynchronous results sequentially

async function getBrand() {
    return 'Porsche';
}

async function getCarFullName(brand, name) {
    return `${brand} ${name}`;
}

async function printCar(name) {
    getBrand().then(brand => getCarFullName(brand, name))
        .then(fullName => console.log(fullName));
}

printCar('Cayman'); //Porsche Cayman

//printCar with await

async function getBrand() {
    return 'Porsche';
}

async function getCarFullName(brand, name) {
    return `${brand} ${name}`;
}

async function printCar(name) {
    const brand = await getBrand();
    const fullName = await getCarFullName(brand, name);
    console.log(fullName);
}

printCar('911'); //Porsche 911

//Handling multiple asynchronous results in parallel

async function getBrand() {
    return 'Porsche';
}

async function getCarName() {
    return '911 Turbo S';
}

function printCar() {
    return Promise.all([
        getBrand(),
        getCarName()
    ])
    .then(([result1, result2]) => 
        console.log(`${result1} ${result2}`));
}

printCar(); //Porsche 911 Turbo S

//Handling multiple results with await

async function getBrand() {
    return 'Toyota';
}

async function getCarName() {
    return '4runner TRD Pro';
}

async function printCar() {
    const [result1, result2] = await Promise.all([
            getBrand(),
            getCarName()
        ]);

    console.log(`${result1} ${result2}`);
}

printCar(); //Toyota 4runner TRD Pro

//Catching Errors
//await allow us to use a traditional try catch block while calling an async function
//in a way, await allow us to get rid of the .then() .catch() way of handling promises.

async function callError() {
    throw new Error('This Failed!');
}

async function myFunction() {
    try {
        await callError();
    } catch(err) {
        console.error(err); //Error: This Failed!
    }
}

myFunction();

//continue with https://exploringjs.com/es2016-es2017/ch_async-functions.html#_async-functions-are-started-synchronously-settled-asynchronously


